import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');

  },
  filename: function (req, file, cd) {
    cd(null, '${Date.now()}-${File.originalname}');
  }

}
);
const upload = multer({ storage });

export default upload;
