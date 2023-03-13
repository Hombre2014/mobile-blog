const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/mobile-blog')
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log('DB connection failed: ', err.message || err));
