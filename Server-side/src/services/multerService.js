import multer from "multer";
import path from "path";

export const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(process.cwd(), 'uploads'));
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + Date.now() + '-' + path.extname(file.originalname));
    }
});

/**
 * 
 * @param {string} picture 
 */


export const uploadAccountPicture = multer({ storage: storage }).single('picture');
export const uploadProductPicture = multer({ storage: storage }).single('url');
export const uploadEventPicture = multer({ storage: storage }).single('event');