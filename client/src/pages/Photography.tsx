import { useEffect } from "react";
import Footer from "@/components/Footer";
import PhotographyCategories from "@/components/PhotographyCategories";

export default function Photography() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <PhotographyCategories />
      </main>
      <Footer />
    </>
  );
}
