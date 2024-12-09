"use client";
import { useRouter } from "next/navigation";

//! Para redireccionar desde un evento tenemos que usar el useRouter que nos ofrece nextjs, esto porque el componente link no puede ejecutar lógica, por lo que para eso está esta otra opción.

export default function AboutPage() {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste
        voluptatibus commodi ullam tempore sunt incidunt totam earum ut, quidem
        nostrum quam nam? Nulla molestias voluptatem fugit temporibus saepe
        repudiandae facere? Eos illo facilis libero odio quia deserunt maiores?
        Illum excepturi earum cupiditate distinctio nihil! Dolorum, eos fuga.
        Ratione, vel animi pariatur ex blanditiis hic impedit deleniti est
        cupiditate eum, tempore iure iusto odit reprehenderit a alias architecto
        maxime suscipit ut corporis totam quo optio voluptates dolor.
        Voluptatibus inventore porro labore ducimus, accusamus veritatis
        architecto ex voluptate, quasi consequatur harum nostrum at nihil, ullam
        minus. Unde quidem tempora harum ipsam.
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          router.push("/");
        }}
      >
        Volver
      </button>
    </section>
  );
}
