const indexRouter = require('express').Router();

indexRouter.use('/auth', require('./auth.route'));
// indexRouter.use('/user', require('./user.route'));
// indexRouter.use('/post', require('./post.route'));
// indexRouter.use('/comment', require('./comment.route'));
indexRouter.use('/blog', require('./blog.route'));
indexRouter.use('/event', require('./events.route'));

module.exports = indexRouter;
