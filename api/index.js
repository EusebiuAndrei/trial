const { Router } = require('express');

const app = Router();

// Import all the routers
const userRouter = require('./routes/userRouter');

// Add all the routers as middlewares
app.use('/users', userRouter);

module.exports = app;
