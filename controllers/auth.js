const { Response } = require('express');
const bcryptjs = require('bcryptjs')
const mailgun = require('mailgun-js')
// const mailgunLoader = require('mailgun-js')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js');
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN })

// const { generarJWT } = require('../helpers/generar-jwt');
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

const resetPassword = async (req, res = Response) => {

    const { resetLink, pass } = req.body;
    // const { email, newPass } = req.body;
    // console.log('resetLink and newPass ', resetLink + ' ' + pass)
    console.log('params: ', req.params)


    try {
        if (resetLink) {
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

                    // 
                    // const obj = {
                    //     pass: newPass,
                    //     resetLink: ''
                    // }

                    // userDB = _.extend(userDB, obj)
                    // userDB.save((error, result) => {
                    //     if (error) {
                    //         return res.status(400).json({
                    //             error: 'Reset password error'
                    //         })
                    //     }
                    //     return res.status(200).json({
                    //         message: 'Your password has been changed'
                    //     })
                    // })



                    // console.log('userDB: ', userDB)
                    // console.log('newPass: ', newPass)
                    const salt = bcryptjs.genSaltSync(10);
                    const hashPass = bcryptjs.hashSync(newPass, salt);
                    userDB.pass = hashPass;
                    userDB.resetLink = '';
                    userDB.save();
                    return res.json({
                        msg: 'Password changed successfully!'
                    })
                })
            })
        }

        return res.status(404).json({ error: 'Authentication Error' })

    } catch (e) {
        console.log('Error: ', e);
    }

}

const forgotPassword = async (req, res = Response) => {
    const { email } = req.body;
    console.log('email: ', email)

    // let mailGunn = mailgunLoader({
    //     apiKey: process.env.MAILGUN_API_KEY,
    //     domain: process.env.MAILGUN_DOMAIN
    // })

    try {

        await User.findOne({ email }, (err, userDB) => {

            if (err || !userDB) {
                return res.status(404).json({
                    msg: 'User not found!'
                })
            }

            const token = jwt.sign({ _id: userDB._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' })

            const data = {
                from: 'noreply@hello.com',
                to: email,
                subject: 'Reset password',
                html: `
            <h2>Please click on the given link to reset your password</h2>
            <a>${process.env.CLIENT_URL_CLOUD}/reset-password/${token}</a>
            `
            }
            {/* <a>${process.env.CLIENT_URL}/reset-password/${token}</a> */ }

            return userDB.updateOne({ resetLink: token }, (err, success) => {
                if (err) {
                    return res.status(404).json({
                        error: 'Error sending reset password link!'
                    })
                } else {
                    mg.messages().send(data, (error, body) => {
                        console.log('Email body: ' + data)
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

module.exports = {
    googleSignin,
    forgotPassword,
    resetPassword
}