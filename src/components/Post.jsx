import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://blog-app-sdf-ft11-json-server.onrender.com/posts/${parseInt(postId)}`)
      .then(res => res.json())
      .then(data => setPost(data));
  });

  return (
    <article className="post-full">
      <Link to={"/"} className="back-button">
        ← Back to Posts
      </Link>
      <h2>{post.title}</h2>
      <div className="post-content">{post.content}</div>
    </article>
  );
}
