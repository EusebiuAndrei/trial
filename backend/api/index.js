const { Router } = require('express');

const app = Router();

// Import all the routers
const userRouter = require('./routes/userRouter');
const menuRouter = require('./routes/menuRouter');
const clientRouter = require('./routes/clientRoute');
const uploadRouter = require('./routes/uploadRouter');
// Add all the routers as middlewares
app.use('/users', userRouter);
app.use('/menus', menuRouter);
app.use('/clients', clientRouter);
app.use('/upload', uploadRouter);

module.exports = app;
