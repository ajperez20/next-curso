import Posts from "../page";
import { Suspense } from "react";

//! Importante: Los parámetros son promesas, por lo que habría que usar async y await para destructurar el objeto que se retorna.

//! El componente suspense permite que puedamos adminitrar que partes del código se ejecuten primero para que se muestren y no obstaculicen lo demás, esto quiere decir que por ejemplo si tenemos una petición fetch que tarda cierta cantidad de tiempo después de algo que se cargaría al instante, entonces metemos esa petición en el suspense para que cargue primero lo que está de inmediato y luego lo demás. A este suspense le podemos pasar un fallback para que mientras se está ejecutando dicho suspense se muestre ese mensaje.

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
  const post = await loadPost(postId);

  console.log(post);

  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense
        fallback={
          <div>
            <h3>Loading...</h3>
          </div>
        }
      >
        <Posts />
      </Suspense>
    </div>
  );
}
