const express = require('express');
const app = express();

app.disable('x-powered-by');

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

module.exports = app;