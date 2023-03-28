const multer = require('multer');

const MIME_TYPES ={
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        const filename = name + Date.now() + '.' + extension;
        callback(null, filename);
    }
});

module.exports = multer({storage}).single('image');


// register images in the images folder
// connect sauce var to registered images