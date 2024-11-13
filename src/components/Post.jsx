import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/posts";

export function Post() {
  const { postId } = useParams();

  const [post] = blogPosts.filter(blogPost => {
    return blogPost.id == postId;
  });

  console.log(post);

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
