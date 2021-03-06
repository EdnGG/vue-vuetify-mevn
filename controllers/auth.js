const { response } = require('express');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const User = require('../models/user.js');

const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-verify');

const googleSignin = async (req, res = response) => {

    // id_token from google
    const id_token = req.body.id_token;
    console.log('token from google signIn: ', id_token)

    // I receive res.body as undefined
    console.log('req.body from google signIn: ', req.body)
    // console.log('res._events from google signIn: ', res._events)
    // console.log('res.ServerResponse from google signIn: ', res.ServerResponse)
    // console.log('res from google signIn: ', res)

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
            // console.log('newUser', newUser)

            // Generating  JWT
            // Mongo creates new users setting _id as default

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

module.exports = {
    googleSignin
}