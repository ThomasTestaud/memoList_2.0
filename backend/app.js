let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

let wordRouter = require('./routes/word');
let listRouter = require('./routes/list');
let authRouter = require('./routes/auth');

let app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/word', wordRouter);
app.use('/list', listRouter);
app.use('/auth', authRouter);

module.exports = app;
