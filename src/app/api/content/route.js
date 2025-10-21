import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getPageContent, savePageContent } from "@/lib/contentService";
import { COOKIE_NAME, SESSION_VALUE } from "@/lib/adminAuth";

const isAuthenticated = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === SESSION_VALUE;
};

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
  }

  const content = await getPageContent();
  return NextResponse.json(content);
}

export async function POST(request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
  }

  try {
    const updatedContent = await request.json();
    await savePageContent(updatedContent);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save content", error);
    return NextResponse.json({ message: "Invalid content payload" }, { status: 400 });
  }
}
