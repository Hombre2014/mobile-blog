const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  meta: {
    type: String,
    required: true,
    trim: true
  },
  tags: [String],
  author: {
    // When we are using many users as authors and authentication is implemented,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'User',
    type: String,
    default: 'Admin'
  },
  slug: {
    type: String,
    required: true,
    trim: true
  }
  thumbnail: {
    type: Object,
    url: {
      type: URL
    },
    public_id: {
      type: String
    }
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
