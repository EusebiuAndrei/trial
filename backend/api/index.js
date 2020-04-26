const { Router } = require('express');

const app = Router();

// Import all the routers
const userRouter = require('./routes/userRouter');
const menuRouter = require('./routes/menuRouter');

// Add all the routers as middlewares
app.use('/users', userRouter);
app.use('/menus', menuRouter);

module.exports = app;
