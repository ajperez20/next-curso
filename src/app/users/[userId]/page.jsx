"use client";

import { useParams } from "next/navigation";

//! para cuando tenemos un componente cliente y queremos extraer el parámetro de la url, necesitamos usar un hook que nos provee el navigation de next, y este se llama useParams

export default function Users() {
  const { userId } = useParams();
  return <div>Users</div>;
}
