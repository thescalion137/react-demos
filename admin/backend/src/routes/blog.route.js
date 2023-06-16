// const { validate } = require('express-validation');
const blogRouter = require('express').Router();
const { validate } = require('express-validation');
// const { AuthController } = require('../controllers');
// const {
//   login,
//   forgotPassword,
//   resetPassword,
// } = require('../validations/auth.validation');
const { upload } = require('../config/multer');
const {
  UploadImages,
  createBlog,
  editBlog,
  deleteBlog,
  allBlogs,
} = require('../controllers/blog.controller');
const {
  createBlogValidation,
  deleteBlogValidation,
} = require('../validations/blog.validation');

blogRouter.post('/', validate(createBlogValidation), createBlog);
blogRouter.post(
  '/imageUpload',
  // isAuth,
  upload.array('file'),
  UploadImages
);

blogRouter.put('/:id', validate(createBlogValidation), editBlog);

blogRouter.delete('/:id', validate(deleteBlogValidation), deleteBlog);
blogRouter.get('/', allBlogs);

module.exports = blogRouter;
