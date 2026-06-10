const express = require('express');
const app = express();
require('dotenv').config();
const multer = require('multer');
const uploadImage = require('./services/storage.services.js');
const postModel = require('./models/post.model.js');
const cors=require('cors')
//required files

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage : multer.memoryStorage() });
//middlewares

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello i am Mini Insta!');
});

//api to create a post
app.post('/create-post', upload.single('post'), async (req, res) => {
  // api to create a post
app.post('/create-post', upload.single('post'), async (req, res) => {
  try {
    // 1. Check if the file exists before doing anything else
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // 2. Now it is safe to read the buffer and upload to ImageKit
    const result = await uploadImage(req.file.buffer);
    
    // 3. Save the URL and caption to the database
    const post = await postModel.create({
      post: result.url,
      caption: req.body.caption
    });

    res.status(201).json({ message: "post created successfully", post });

  } catch (err) {
    // 4. This catch block now handles database errors AND ImageKit upload errors
    console.error(err);
    res.status(500).json({ message: "something went wrong" });
  }
});
});

//api to get all posts
app.get('/posts',async (req,res)=>{
  const posts= await postModel.find();
  res.json({message : "posts retrieved successfully", posts});
});
module.exports = app;