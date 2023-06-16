const indexRouter = require('express').Router();

indexRouter.use('/auth', require('./auth.route'));
indexRouter.use('/blog', require('./blog.route'));
indexRouter.use('/event', require('./events.route'));

module.exports = indexRouter;
