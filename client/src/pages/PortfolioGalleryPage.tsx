import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioGallery from "@/components/PortfolioGallery";
import { useParams } from "wouter";

export default function PortfolioGalleryPage() {
  const params = useParams();
  const categoryId = params.categoryId || "logo-design";

  return (
    <>
      <Header />
      <main>
        <PortfolioGallery categoryId={categoryId} />
      </main>
      <Footer />
    </>
  );
}
