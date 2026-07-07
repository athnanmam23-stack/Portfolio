import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const categoryData: Record<string, { title: string; description: string; color: string }> = {
  "logo-design": {
    title: "Logo Design",
    description: "Creative brand identities and memorable logos",
    color: "from-purple-500 to-pink-500",
  },
  "poster-design": {
    title: "Poster Design",
    description: "Eye-catching promotional and event posters",
    color: "from-blue-500 to-cyan-500",
  },
  "business-card": {
    title: "Business Card Design",
    description: "Professional networking and contact cards",
    color: "from-green-500 to-emerald-500",
  },
  "menu-card": {
    title: "Menu Card Design",
    description: "Elegant restaurant and cafe menu designs",
    color: "from-orange-500 to-amber-500",
  },
  "t-shirt": {
    title: "T-Shirt Design",
    description: "Custom apparel and merchandise designs",
    color: "from-red-500 to-rose-500",
  },
  "shop-board": {
    title: "Shop Board Design",
    description: "Retail signage and promotional displays",
    color: "from-indigo-500 to-violet-500",
  },
  "banner": {
    title: "Banner Design",
    description: "Large-scale advertising and event banners",
    color: "from-teal-500 to-cyan-500",
  },
  "frame": {
    title: "Frame Design",
    description: "Artistic frames and decorative borders",
    color: "from-yellow-500 to-orange-500",
  },
};

// Gallery items with actual images
const getGalleryItems = (categoryId: string) => {
  if (categoryId === "logo-design") {
    return [
      { id: 0, title: "Logo Design 1", image: "/__manus__/logo1.jpg" },
      { id: 1, title: "Logo Design 2", image: "/__manus__/logo2.jpg" },
      { id: 2, title: "Logo Design 3", image: "/__manus__/logo3.jpg" },
      { id: 3, title: "Logo Design 4", image: "/__manus__/logo4.jpg" },
    ];
  }
  
  if (categoryId === "poster-design") {
    return [
      { id: 0, title: "Poster Design 1", image: "/__manus__/poster1.jpg" },
      { id: 1, title: "Poster Design 2", image: "/__manus__/poster2.jpg" },
      { id: 2, title: "Poster Design 3", image: "/__manus__/poster3.jpg" },
      { id: 3, title: "Poster Design 4", image: "/__manus__/poster4.jpg" },
      { id: 4, title: "Poster Design 5", image: "/__manus__/poster5.jpg" },
      { id: 5, title: "Poster Design 6", image: "/__manus__/poster6.jpg" },
      { id: 6, title: "Poster Design 7", image: "/__manus__/poster7.jpg" },
      { id: 7, title: "Poster Design 8", image: "/__manus__/poster8.jpg" },
    ];
  }
  
  if (categoryId === "business-card") {
    return [
      { id: 0, title: "Business Card Design 1", image: "/__manus__/business-card1.jpg" },
      { id: 1, title: "Business Card Design 2", image: "/__manus__/business-card2.jpg" },
      { id: 2, title: "Business Card Design 3", image: "/__manus__/business-card3.jpg" },
      { id: 3, title: "Business Card Design 4", image: "/__manus__/business-card4.jpg" },
    ];
  }
  
  if (categoryId === "t-shirt") {
    return [
      { id: 0, title: "T-Shirt Design 1", image: "/__manus__/tshirt1.jpg" },
      { id: 1, title: "T-Shirt Design 2", image: "/__manus__/tshirt2.jpg" },
      { id: 2, title: "T-Shirt Design 3", image: "/__manus__/tshirt3.jpg" },
      { id: 3, title: "T-Shirt Design 4", image: "/__manus__/tshirt4.jpg" },
    ];
  }
  
  if (categoryId === "menu-card") {
    return [
      { id: 0, title: "Menu Card Design 1", image: "/__manus__/menu-card1.jpg" },
    ];
  }
  
  if (categoryId === "shop-board") {
    return [
      { id: 0, title: "Shop Board Design 1", image: "/__manus__/shop-board1.jpg" },
      { id: 1, title: "Shop Board Design 2", image: "/__manus__/shop-board2.jpg" },
      { id: 2, title: "Shop Board Design 3", image: "/__manus__/shop-board3.jpg" },
      { id: 3, title: "Shop Board Design 4", image: "/__manus__/shop-board4.jpg" },
      { id: 4, title: "Shop Board Design 5", image: "/__manus__/shop-board5.jpg" },
      { id: 5, title: "Shop Board Design 6", image: "/__manus__/shop-board6.jpg" },
      { id: 6, title: "Shop Board Design 7", image: "/__manus__/shop-board7.jpg" },
      { id: 7, title: "Shop Board Design 8", image: "/__manus__/shop-board8.jpg" },
      { id: 8, title: "Shop Board Design 9", image: "/__manus__/shop-board9.jpg" },
      { id: 9, title: "Shop Board Design 10", image: "/__manus__/shop-board10.jpg" },
    ];
  }
  
  if (categoryId === "banner") {
    return [
      { id: 0, title: "Banner Design 1", image: "/__manus__/banner1.jpg" },
      { id: 1, title: "Banner Design 2", image: "/__manus__/banner2.jpg" },
      { id: 2, title: "Banner Design 3", image: "/__manus__/banner3.jpg" },
      { id: 3, title: "Banner Design 4", image: "/__manus__/banner4.jpg" },
      { id: 4, title: "Banner Design 5", image: "/__manus__/banner5.jpg" },
      { id: 5, title: "Banner Design 6", image: "/__manus__/banner6.jpg" },
      { id: 6, title: "Banner Design 7", image: "/__manus__/banner7.jpg" },
      { id: 7, title: "Banner Design 8", image: "/__manus__/banner8.jpg" },
      { id: 8, title: "Banner Design 9", image: "/__manus__/banner9.jpg" },
      { id: 9, title: "Banner Design 10", image: "/__manus__/banner10.jpg" },
      { id: 10, title: "Banner Design 11", image: "/__manus__/banner11.jpg" },
    ];
  }
  
  if (categoryId === "frame") {
    return [
      { id: 0, title: "Frame Design 1", image: "/__manus__/frame1.jpg" },
      { id: 1, title: "Frame Design 2", image: "/__manus__/frame2.jpg" },
      { id: 2, title: "Frame Design 3", image: "/__manus__/frame3.jpg" },
      { id: 3, title: "Frame Design 4", image: "/__manus__/frame4.jpg" },
      { id: 4, title: "Frame Design 5", image: "/__manus__/frame5.jpg" },
      { id: 5, title: "Frame Design 6", image: "/__manus__/frame6.jpg" },
      { id: 6, title: "Frame Design 7", image: "/__manus__/frame7.jpg" },
      { id: 7, title: "Frame Design 8", image: "/__manus__/frame8.jpg" },
      { id: 8, title: "Frame Design 9", image: "/__manus__/frame9.jpg" },
      { id: 9, title: "Frame Design 10", image: "/__manus__/frame10.jpg" },
      { id: 10, title: "Frame Design 11", image: "/__manus__/frame11.jpg" },
      { id: 11, title: "Frame Design 12", image: "/__manus__/frame12.jpg" },
      { id: 12, title: "Frame Design 13", image: "/__manus__/frame13.jpg" },
      { id: 13, title: "Frame Design 14", image: "/__manus__/frame14.jpg" },
      { id: 14, title: "Frame Design 15", image: "/__manus__/frame15.jpg" },
      { id: 15, title: "Frame Design 16", image: "/__manus__/frame16.jpg" },
      { id: 16, title: "Frame Design 17", image: "/__manus__/frame17.jpg" },
    ];
  }
  
  // Placeholder for other categories
  const itemCount = 8;
  return Array.from({ length: itemCount }, (_, i) => ({
    id: i,
    title: `${categoryData[categoryId]?.title || 'Design'} ${i + 1}`,
    image: `/placeholder-${categoryId}-${i + 1}.jpg`,
  }));
};

export default function PortfolioGallery({ categoryId }: { categoryId: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const category = categoryData[categoryId] || categoryData["logo-design"];
  const galleryItems = getGalleryItems(categoryId);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback to ensure content is visible on mobile
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const shouldAnimate = inView || isVisible;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen py-20 md:py-32 bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-20 left-20 w-80 h-80 bg-gradient-to-br ${category.color} opacity-15 rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br ${category.color} opacity-15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Categories</span>
            </motion.button>
          </Link>

          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-4`}>
            {category.title}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {category.title} Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-muted">
                {item.image.startsWith("/__manus__") ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <>
                    {/* Placeholder gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground/20">
                        {item.id + 1}
                      </span>
                    </div>
                  </>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="text-white"
                  >
                    <ZoomIn size={32} />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-center">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 md:-top-16 right-0 text-white hover:text-accent transition-colors z-10"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center bg-black rounded-2xl overflow-hidden">
                {galleryItems[selectedImage]?.image.startsWith("/__manus__") ? (
                  <img
                    src={galleryItems[selectedImage]?.image}
                    alt={galleryItems[selectedImage]?.title}
                    className="w-full h-full object-contain max-h-[80vh] md:max-h-[75vh]"
                  />
                ) : (
                  <div className={`aspect-square bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center w-full max-w-lg`}>
                    <span className="text-6xl font-bold text-white/30">
                      {selectedImage + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {galleryItems[selectedImage]?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
