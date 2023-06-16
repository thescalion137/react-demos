const { Blog } = require('../models');
const cloud = require('../config/cloudynery');
const fs = require('fs');
const APIError = require('../utils/APIError');

const uploadImage = async path => {
  return await new Promise((resole, reject) => {
    cloud.uploader.upload(path, async (error, result) => {
      if (error) {
        console.error(error);
        next(error);
      } else {
        // delete the uploaded file from the local file system
        fs.unlinkSync(path);
        const url = await result.secure_url;
        resole(url);
      }
    });
  });
};

exports.createBlog = async (req, res, next) => {
  const payload = req.body;
  try {
    await Blog.create(payload);
    return res.sendJson('Blog Created successfully.');
  } catch (error) {
    next(error);
  }
};

exports.UploadImages = async (req, res, next) => {
  try {
    if (req?.file?.location) {
      res.sendJson(req.file.location);
    } else {
      throw new APIError({ status: 403, message: 'Files not Found' });
    }
  } catch (error) {
    next(error);
  }
};
exports.editBlog = async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await Blog.findByIdAndUpdate(id, payload);
    return res.sendJson({ message: 'Blog Updated Successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteBlog = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndRemove(id);
    res.sendJson({ message: 'Blog Deleted Successfully' });
  } catch (error) {
    next(error);
  }
};

exports.allBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.sendJson(blogs);
  } catch (error) {
    next(error);
  }
};
