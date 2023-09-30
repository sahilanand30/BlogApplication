import Post from "../Post";
import { useEffect, useState } from "react";
import React from 'react';

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  let ct=0;
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={ct++} {...post} />
      ))}
    </>
  );
}

export default IndexPage;