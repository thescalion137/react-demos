require('dotenv').config();
const multer = require('multer');
const multerS3 = require('multer-s3');
const BUCKET = process.env.BUCKET;
const aws = require('aws-sdk');
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: BUCKET,
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },
  }),
});

exports.upload = upload;
