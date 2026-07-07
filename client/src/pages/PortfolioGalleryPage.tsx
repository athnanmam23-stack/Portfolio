import Footer from "@/components/Footer";
import PortfolioGallery from "@/components/PortfolioGallery";
import { useParams } from "wouter";

export default function PortfolioGalleryPage() {
  const params = useParams();
  const categoryId = params.categoryId || "logo-design";

  return (
    <>
      <main>
        <PortfolioGallery categoryId={categoryId} />
      </main>
      <Footer />
    </>
  );
}
