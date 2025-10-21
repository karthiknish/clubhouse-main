import HomePageClient from "@/components/home/HomePageClient";
import { getPageContent } from "@/lib/contentService";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getPageContent();

  return <HomePageClient content={content.home ?? null} />;
}
