import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

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

// Placeholder gallery items - replace with actual photography data
const getGalleryItems = (categoryId: string) => {
  const itemCount = 12;
  return Array.from({ length: itemCount }, (_, i) => ({
    id: i,
    title: `${categoryData[categoryId]?.title || 'Photography'} ${i + 1}`,
    image: `/placeholder-${categoryId}-${i + 1}.jpg`,
  }));
};

export default function PhotographyGallery({ categoryId }: { categoryId: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const category = categoryData[categoryId] || categoryData["wedding"];
  const galleryItems = getGalleryItems(categoryId);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/photography">
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
          <p className="text-muted-foreground max-w-2xl text-lg">
            {category.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
                {/* Placeholder gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-foreground/20">
                    {item.id + 1}
                  </span>
                </div>

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
              <div className={`aspect-square bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                <span className="text-7xl font-bold text-white/30">
                  {selectedImage + 1}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
