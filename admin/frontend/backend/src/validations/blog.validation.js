const { Joi } = require('express-validation');
const { validateId } = require('./common.validation');

exports.createBlogValidation = {
  body: Joi.object({
    title: Joi.string().required(),
    metaDescription: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    date: Joi.string().required(),
    subTitle: Joi.string().required(),
    oder: Joi.any(),
    blogType: Joi.any(),
  }),
};

exports.deleteBlogValidation = {
  params: validateId,
};
