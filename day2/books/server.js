const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'session-secret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session(sessionConfig));
app.use(cookieParser('askdljfhaslkdjfhaksldjhfkla'));

// /api/books

require('./server/config/database');
app.use('/api', require('./server/config/routes'));
app.use(require('./server/config/routes/catch-all.route'));

//
app.listen(port, () => console.log(`express server listening on port ${port}`));
