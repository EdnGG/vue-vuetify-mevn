const { Response } = require('express');
const bcrypt = require('bcrypt')
const mailgun = require('mailgun-js')
// const _ = require('lodash')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js');
// const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN_CLOUD })

// hash Password
const saltRounds = 10
const { googleVerify } = require('../helpers/google-verify');

const googleSignin = async (req, res = Response) => {

    // id_token from google
    const id_token = req.body.id_token;
    // console.log('token from google signIn: ', id_token)

    try {
        const { email, name, image } = await googleVerify(id_token);

        let userDB = await User.findOne({ email });

        if (!userDB) {
            // Creating new userDB
            const data = {
                name,
                email,
                pass: ':P',
                image,
                google: true
            };

            userDB = new User(data);
            let newUser = await userDB.save();

            // Generating token
            const token = jwt.sign({
                data: userDB
            }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' })

            res.json({
                userDB: newUser,
                token
            })

            // const token = await generarJWT(newUser._id);
            // res.json({
            //     userDB: newUser,
            //     token
            // });
        }

        // If userDB exists
        if (userDB) {

            const token = jwt.sign({
                data: userDB
            }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' })

            res.json({
                userDB,
                // token: await generarJWT(userDB._id)
                token
            });
        }
    } catch (err) {
        res.status(400).json({
            msg: 'Google token not valid! ' + err
        })

    }
}

const forgotPassword = async (req, res = Response) => {
    const { email } = req.body;
    console.log('email: ', email)

    try {

        await User.findOne({ email }, (err, userDB) => {

            if (err || !userDB) {
                return res.status(404).json({
                    msg: 'User not found!'
                })
            }
            //  checar aqui
            const token = jwt.sign({ _id: userDB._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' })
            const formattingToken = token.replace(/["."]+/g, '_')

            const data = {
                from: `noreply@vuetify-todo.com`,
                to: email,
                subject: 'Reset password',
                html: `
            <h2>Please click on the given link to reset your password</h2>
            <a>${process.env.CLIENT_URL}/reset-password/${formattingToken}</a>
            `
            }

            return userDB.updateOne({ resetLink: token }, (err, success) => {
                if (err) {
                    return res.status(404).json({
                        error: 'Error sending reset password link!'
                    })
                } else {
                    mg.messages().send(data, (error, body) => {
                        // console.log('Email body: ' , data)
                        if (error) {
                            return res.status(404).json({
                                error: err.message
                            })
                        }
                        return res.json({ message: 'Reset password link sent!' })
                    })
                }
            })
        })

    } catch (e) {
        console.log(e);
    }

}

const resetPassword = async (req, res = Response) => {
    console.log('params: ', req.params)
    console.log('body: ', req.body)

    // const originalToken = resetLink.replace(/["_"]+/g, '.');

    // checar
    // const originalToken = req.body.resetLink;

    const resetLink = req.body.resetLink;

    // checar aqui
    // const resetLink = originalToken.replace(/["_"]+/g, '.');

    const newPass = req.body.pass;
    console.log('resetLink deberia venir limpio desde el frontend: ', resetLink)
    console.log('newPass: ', newPass)
    // const { email, newPass } = req.body;

    try {
        if (resetLink) {
            console.log('resetLink dentro del try /reset-password: ', resetLink)
            jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, (error, decodeData) => {
                if (error) {
                    return res.status(401).json({
                        error: "Incorrect token or token expired"
                    })
                }
                User.findOne({ resetLink }, (err, userDB) => {
                    if (err || !userDB) {
                        return res.status(404).json({
                            error: 'User with this token does not exist'
                        })
                    }

                    const hashPass = bcrypt.hashSync(newPass, saltRounds);
                    userDB.pass = hashPass;
                    userDB.resetLink = '';
                    userDB.save();
                })
                return res.json({ message: 'Password changed successfully!' })
            })
        }
    } catch (e) {
        console.log('Error: ', e);
        return res.status(404).json({ error: 'Authentication Error' })
    }

}

module.exports = {
    googleSignin,
    forgotPassword,
    resetPassword
}
