"use client";

//! importante: en next todo se renderiza de parte del servidor, por lo que cuando queramos usar manejadores de eventos como onClick de parte directamente en el frontend o sea en el cliente nos lanzará un error a menos que le indiquemos que es código cliente,  esto lo hacemos colocando la cláusula "use client". Además de esto si queremos importar hooks, también debemos especificar que es un cliente o sea usamos la cláusula "use client". En conclusión, cualquier cosa que use cosas del cliente necesitaremos indicarlo porque en caso contrario explotaría la aplicación. Importante también hay que decidir bien que componentes son clientes y que otros son del servidor.

export default function HomePage() {
  return (
    <section>
      <h1>Hola mundo</h1>
      <button
        onClick={() => {
          console.log("Hola mundo");
        }}
      >
        Click
      </button>
    </section>
  );
}
