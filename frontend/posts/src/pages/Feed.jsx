import React, { useState ,useEffect} from 'react';
import axios from 'axios'
import './feed.css'
const Feed = () => {
  const [posts, setPosts] = useState([
  ])
  useEffect(()=>{
    axios.get("http://localhost:8000/posts").then((res)=>{
        setPosts(res.data.posts);
    },[])
  })

  return (
    <section className="feed">
      {posts.map((_post) => (
        <div key={_post._id} className="post">
          <img src={_post.post} alt={_post.caption} />
          <p>{_post.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default Feed;