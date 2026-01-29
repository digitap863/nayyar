// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         // const uniqueSuffix = Date.now()
//         const filname=file.originalname.replace(/\s+/g, '');
//         console.log(filname,"##################################")
//         cb(null,  filname)
//     }
// })

// // const storage = multer.memoryStorage()

// // export const upload = multer({ storage: storage })

// export const upload = multer({ 
//     storage: storage,
//     limits: {
//       fieldSize: 20 * 1024 * 1024 
//     }
//   });

//   // Set the limit to 10MB, for example


import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.mjs'

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        allowed_formats: ['jpeg', 'png', 'jpg','pdf', 'webp'], // Restrict file types
    },
});

// Configure multer to use Cloudinary storage
export const upload = multer({ 
    storage: storage,
    limits: {
      fieldSize: 50 * 1024 * 1024 
    }
  });
