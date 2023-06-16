const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    oder: {
      type: String,
      required: true,
      default: 999,
    },
    blogType: {
      type: String,
      required: true,
      default: 'normal',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('blog', blogSchema, 'blog');
