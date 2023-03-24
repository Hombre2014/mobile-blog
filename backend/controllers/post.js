const Post = require('../models/post');

exports.createPost = (req, res) => {
  const { title, meta, content, author, tags, slug } = req.body;
  // const newPost = new Post({ title, meta, content, author, tags, slug });
  console.log(req.body);
  res.send('Hello from createPost');
  // res.json(newPost);
};

