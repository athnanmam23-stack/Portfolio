import { useEffect } from "react";
import Footer from "@/components/Footer";
import PhotographyGallery from "@/components/PhotographyGallery";
import { useParams } from "wouter";

export default function PhotographyGalleryPage() {
  const params = useParams();
  const categoryId = params.categoryId || "wedding";
  const albumId = params.albumId || "1";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <PhotographyGallery categoryId={categoryId} albumId={albumId} />
      </main>
      <Footer />
    </>
  );
}
