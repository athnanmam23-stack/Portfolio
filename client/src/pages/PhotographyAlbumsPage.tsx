import { useEffect } from "react";
import Footer from "@/components/Footer";
import PhotographyAlbums from "@/components/PhotographyAlbums";
import { useParams } from "wouter";

export default function PhotographyAlbumsPage() {
  const params = useParams();
  const categoryId = params.categoryId || "wedding";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <PhotographyAlbums categoryId={categoryId} />
      </main>
      <Footer />
    </>
  );
}
