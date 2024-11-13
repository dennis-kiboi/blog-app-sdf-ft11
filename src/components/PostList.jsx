import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';

export function PostList() {
  return (
    <div className="post-list">
      <h2>Latest Posts</h2>
      {blogPosts.map(post => (
        <article key={post.id} className="post-preview">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </article>
      ))}
    </div>
  );
}