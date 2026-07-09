import { useEffect } from "react";
import Footer from "@/components/Footer";
import PortfolioCategories from "@/components/PortfolioCategories";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <PortfolioCategories />
      </main>
      <Footer />
    </>
  );
}
