import PostCard from "@/src/components/PostCard";
import "./Posts.css";

//! @ nos permite apuntar al root de la aplicación

const loadPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
};

export default async function Posts() {
  const posts = await loadPosts();
  return (
    <div className="grid">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
