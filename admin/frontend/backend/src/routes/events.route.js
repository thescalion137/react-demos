const eventsRouter = require('express').Router();

const { upload } = require('../config/multer');

const {
  editEvent,
  createEvent,
  deleteEvent,
  allEvent,
} = require('../controllers/event.controller');
const { validate } = require('express-validation');
const {
  createEventValidation,
  deleteEventValidation,
} = require('../validations/event.validation');

eventsRouter.post('/', validate(createEventValidation), createEvent);
eventsRouter.get('/', allEvent);

eventsRouter.put('/:id', validate(createEventValidation), editEvent);

eventsRouter.delete('/:id', validate(deleteEventValidation), deleteEvent);

module.exports = eventsRouter;
