import { useEffect } from "react";
import Footer from "@/components/Footer";
import PortfolioGallery from "@/components/PortfolioGallery";
import { useParams } from "wouter";

export default function PortfolioGalleryPage() {
  const params = useParams();
  const categoryId = params.categoryId || "logo-design";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <PortfolioGallery categoryId={categoryId} />
      </main>
      <Footer />
    </>
  );
}
