//! route.js es el archivo por defecto que usa next para saber que se está programando directamente código de backend, además de esto aquí también tenemos una especie de orden de carpetas también, de resto todo es igual que desarrollar en express por decirlo así. Lo importante es que estos métodos programados aquí usen los nombres de los métodos http como bien los conoces

/*
    ! Podemos:
    * 1. Extract params
    * 2. query database
    * 3. communite with other services
*/

import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return NextResponse.json(users);
};

export const POST = () => {
  return NextResponse.json({
    message: "creando datos",
  });
};

export const PUT = () => {
  return NextResponse.json({
    message: "actualizando datos",
  });
};

export const DELETE = () => {
  return NextResponse.json({
    message: "eliminando datos",
  });
};
