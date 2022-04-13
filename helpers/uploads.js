// const cloudinary = require('cloudinary').v2;
import { v2 as cloudinary } from 'cloudinary' // ES6
cloudinary.config(process.env.CLOUDINARY_URL)

import User from '../models/user.js';

const  uploadImageCloudinary = async (_id, image, res)  => {
    await cloudinary.uploader.upload(image, { tags: 'basic_sample' }, function (error, result) {
        if (error) {
            console.log('Error al subir a cloudinary', error.message)
        }
        else {
            User.findById(_id, (err, userDB) => {
                if (err) {
                    console.log('Error al relacionar usuario:', err)
                } else {
                    userDB.image = result.secure_url
                    userDB.save((err, newUserDB) => {
                        return res.json({
                            userDB: newUserDB
                        })
                    })
                }
            })
        }
    })
}

function uploadImageHelper(archivo, extension, res) {
    archivo.mv(`upload/users/image-${new Date().getMilliseconds()}.${extension}`, (err, res) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
    })
    return res.json({
        ok: true,
        message: 'Image was sucessfully uploaded on backend'
      })
  }


module.exports = {
      uploadImageHelper, 
      uploadImageCloudinary
}