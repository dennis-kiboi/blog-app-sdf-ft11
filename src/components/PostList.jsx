import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-app-sdf-ft11-json-server.onrender.com/posts")
      .then(res => res.json())
      .then(blogPosts => setPosts(blogPosts));
  }, []);

  return (
    <div className="post-list">
      <h2>Latest Posts</h2>
      {posts.map(post => (
        <article key={post.id} className="post-preview">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </article>
      ))}
    </div>
  );
}
