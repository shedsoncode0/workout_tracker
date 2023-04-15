const express = require('express');
const dotenv = require('dotenv').config();
const color = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
// const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});

app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/user', require('./routes/userRoute'));

// app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Server is up and running on PORT: 8000');
});