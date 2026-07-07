import Footer from "@/components/Footer";
import PhotographyGallery from "@/components/PhotographyGallery";
import { useParams } from "wouter";

export default function PhotographyGalleryPage() {
  const params = useParams();
  const categoryId = params.categoryId || "wedding";

  return (
    <>
      <main>
        <PhotographyGallery categoryId={categoryId} />
      </main>
      <Footer />
    </>
  );
}
