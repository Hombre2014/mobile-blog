require('./db');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routers/post');


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/post', postRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
