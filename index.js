const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const methodOverride = require('method-override')
//  
const  path = require('path');


const sortMiddleware = require('./app/middlewares/sortMiddleware')

const route = require('./routes');
const db = require('./config/db/index.config');

db.connect();

app.use('/static', express.static('public'))


app.engine('hbs', handlebars({
  extname: 'hbs', 
  helpers : require('./help/help-handlebars'),
  defaultLayout: 'main', 
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir  : [
      //  path to your partials
      path.join(__dirname, 'views/layouts/partials'),
  ]
}));
app.set('view engine', 'hbs');


app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(sortMiddleware)

route(app);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
