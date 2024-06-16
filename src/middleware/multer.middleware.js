import multer from 'multer'

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // console.log("FIle Name file", file);
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage: storage })