//! Importante: Los parámetros son promesas, por lo que habría que usar async y await para destructurar el objeto que se retorna.

const loadPost = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export default async function PostDetail({ params }) {
  const { postId } = await params;
  const post = await loadPost(postId)

  console.log(post)

  return (
    <div>
      <h3>{post.id}. {post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
