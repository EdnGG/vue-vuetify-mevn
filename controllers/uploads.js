const express = require('express')
const router = express.Router()

// CLOUDINARY
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL)

const User = require('../models/user.js');
const { uploadImageCloudinary, uploadImageHelper } = require('../helpers/uploads')

const uploadImage = (req, res) => {

    const _id = req.params.id
    console.log('req.files: ', req.files)

    try {
        if (!req.files) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'no files were selected'
                }
            })
        }

        let archivo = req.files.image

        // separara el nombre del archivo en cuanto encuentre un punto '.'
        let nombreArchivoCortado = archivo.name.split('.')
        // Obtenemos la ultima posicion del arreglo
        let extension = nombreArchivoCortado[nombreArchivoCortado.length - 1]

        // Extensiones permitidas
        let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg', 'JPG']

        // Valida si "extension" esta en alguna posicion index del arreglo 'extencionesValidas'
        if (extensionesValidas.indexOf(extension) < 0) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Allowed extensions are: ' + extensionesValidas.join(', '),
                    ext: extension
                }
            })
        }

        const filePath = req.files.image.tempFilePath

        uploadImageCloudinary(_id, filePath, res)

        // uploadImage(archivo, extension)

    } catch (err) {
        console.log('Error dentro de la peticion: ', err)
    }

}

module.exports = uploadImage