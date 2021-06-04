const homeRouter = require('./home.routes')
const newsRouter = require('./Site')
const searchRouter = require('./Site')
const coursesRouter = require('./course.routes')

function route(app) {
  app.get('/search',searchRouter);
  app.get('/news',newsRouter);
  app.use('/courses',coursesRouter);
  app.get('/',homeRouter);
}

module.exports = route;