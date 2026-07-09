import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const categoryData: Record<string, { title: string; description: string; color: string }> = {
  wedding: {
    title: "Wedding Photography",
    description: "Capturing beautiful moments of your special day",
    color: "from-rose-500 to-pink-500",
  },
  birthday: {
    title: "Birthday Photography",
    description: "Celebrating life's joyous occasions",
    color: "from-amber-500 to-orange-500",
  },
};

// Gallery items with actual images
const getGalleryItems = (categoryId: string, albumId: string) => {
  const category = categoryData[categoryId];
  const itemCount = 30;
  
  return Array.from({ length: itemCount }, (_, i) => ({
    id: i,
    title: `${category?.title || 'Photography'} Album ${albumId} - Photo ${i + 1}`,
    image: `/__manus__/${categoryId}/album${albumId}/${i + 1}.jpg`,
  }));
};

export default function PhotographyGallery({ categoryId, albumId }: { categoryId: string; albumId: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const category = categoryData[categoryId] || categoryData["wedding"];
  const galleryItems = getGalleryItems(categoryId, albumId);
  const [validImages, setValidImages] = useState<Set<number>>(new Set());
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

  useEffect(() => {
    // Check which images actually exist
    const checkImages = async () => {
      const validSet = new Set<number>();
      
      for (const item of galleryItems) {
        try {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = item.image;
          });
          validSet.add(item.id);
        } catch (error) {
          // Image doesn't exist, skip it
        }
      }
      
      setValidImages(validSet);
    };

    checkImages();
  }, [categoryId, albumId]);

  const shouldAnimate = inView || isVisible;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
          className={`absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br ${category.color} opacity-15 rounded-full blur-3xl`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </motion.button>

          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-semibold mb-4`}>
            {category.title}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {category.title} Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
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
          {galleryItems.filter((item) => validImages.has(item.id)).map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-muted overflow-hidden">
                {item.image.startsWith("/__manus__") ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Placeholder gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-foreground/20">
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
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
              <div className="relative aspect-square bg-gradient-to-br rounded-2xl overflow-hidden">
                {galleryItems[selectedImage]?.image.startsWith("/__manus__") ? (
                  <img
                    src={galleryItems[selectedImage]?.image}
                    alt={galleryItems[selectedImage]?.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl font-bold text-white/30">
                        {selectedImage + 1}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
