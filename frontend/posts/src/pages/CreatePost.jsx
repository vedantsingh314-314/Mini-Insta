import React from 'react'
import './CreatePost.css';
import axios from 'axios';

const CreatePost = () => {
   const handlesubmit=async (e)=>{
        e.preventDefault();
        const formdata=new FormData(e.target);
        axios.post("http://localhost:8000/create-post",formdata).then((res)=>{
            alert("post created successfully");
            e.target.reset();
        }).catch((err)=>{
            alert("there was some error uploading the image");
        })
   }
  return (
   <section className="create-post-section">
    <h1>Create Post</h1>
    <form className="create-post-form"  onSubmit={handlesubmit}>
        <div>
            <label htmlFor="image">Upload Image</label>
            <input
                type="file"
                id="image"
                name="post"
                accept="image/*"
            />
        </div>

        <div>
            <label htmlFor="caption">Caption</label>
            <textarea
                id="caption"
                placeholder="Write a caption..."
                rows="4"
                name="caption"
            />
        </div>

        <button type="submit">
            Create Post
        </button>
    </form>
</section>
  )
}

export default CreatePost
