import { NextResponse } from "next/server";
import { COOKIE_NAME, SESSION_VALUE, COOKIE_OPTIONS, ADMIN_USERNAME, ADMIN_PASSWORD } from "@/lib/adminAuth";

export async function POST(request) {
  let credentials;

  try {
    credentials = await request.json();
  } catch (error) {
    return NextResponse.json({ message: "Invalid request payload" }, { status: 400 });
  }

  const { username, password } = credentials ?? {};

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set(COOKIE_NAME, SESSION_VALUE, COOKIE_OPTIONS);

  return response;
}
