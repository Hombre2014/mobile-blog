const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/mobile-blog')
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log('DB connection failed: ', err.message || err));

