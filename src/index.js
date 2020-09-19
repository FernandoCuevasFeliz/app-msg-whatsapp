const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const exphbs = require('express-handlebars');

const routes = require('./routes');

const app = express();

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(app.get('port'), () => {
  console.log('Server running on port', app.get('port'));
});
