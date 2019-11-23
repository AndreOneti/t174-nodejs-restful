const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.disable('x-powered-by');

app.use('/api/tasks', require('./routes/tasks'));
app.use(require('./middleware/not-found'));

module.exports = app;
