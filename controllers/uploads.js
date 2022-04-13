import { uploadImageCloudinary } from '../helpers/uploads'

const uploadImage = (req, res) => { 

    const _id = req.params.id

    try {
        if (!req.files) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No image was selected'
                }
            })
        }

        let image = req.files.image

        // separara el nombre del image en cuanto encuentre un punto '.'
        let nombreArchivoCortado = image.name.split('.')
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

    } catch (err) {
        console.log('Error dentro de la peticion: ', err.message)
    }

}

module.exports = uploadImage