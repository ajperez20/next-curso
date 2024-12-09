//! searchParams:  es la porción de url que está después de un ? el cual permite ejecutar ciertas consultas o querys

//! requestBody: esta es la información que se manda desde el cliente hacia el backend, básicamente es la comunicación entre el front y back

import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

/*
  ? const { searchParams } = new URL(request.url);
  ? const name = searchParams.get("name");
  ? const username = searchParams.get("username");
*/

  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();

  return NextResponse.json(user);
};
