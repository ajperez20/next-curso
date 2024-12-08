"use client";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div>
      <div>
        <Link href={`/posts/${post.id}`}>
          <h3>
            {post.id}. {post.title}
          </h3>
        </Link>
        <p>{post.body}</p>
      </div>
      <button
        onClick={() => {
          alert("Hola mundo");
        }}
      >
        Click
      </button>
    </div>
  );
}
