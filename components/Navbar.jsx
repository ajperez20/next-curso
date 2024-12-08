import Link from "next/link";

//! Links: es un componente que provee next.js para el manejo del enrutado, me refiero a que te permite redireccionar usando botones y cosas así para que no tengas que recargar la página entera cada que se cambia de ruta.

export default function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
