const { Event } = require('../models');

exports.createEvent = async (req, res, next) => {
  const payload = req.body;
  try {
    await Event.create(payload);
    return res.sendJson({ message: 'Event Created successfully.' });
  } catch (error) {
    next(error);
  }
};

exports.editEvent = async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await Event.findByIdAndUpdate(id, payload);
    return res.sendJson({ message: 'Event Updated Successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndRemove(id);
    return res.sendJson({ message: 'Event Deleted Successfully' });
  } catch (error) {
    next(error);
  }
};

exports.allEvent = async (req, res, next) => {
  try {
    const events = await Event.find();
    res.sendJson(events);
  } catch (error) {
    next(error);
  }
};
