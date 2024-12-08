import PostCard from "../../components/PostCard";

const loadPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
};

export default async function PostPages() {
  const posts = await loadPosts();
  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
}
