const { Joi } = require('express-validation');
const { validateId } = require('./common.validation');

exports.createEventValidation = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    date: Joi.string().required(),
    location: Joi.string().required(),
  }),
};

exports.deleteEventValidation = {
  params: validateId,
};
