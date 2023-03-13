require('./db');
require('dotenv').config();
const express = require('express');
const postRouter = require('./routers/post');

const app = express();
app.use('/api/post', postRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
