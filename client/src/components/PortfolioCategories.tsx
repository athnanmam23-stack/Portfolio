import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PenTool, Image, CreditCard, Utensils, Shirt, Store, Layout, Frame, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const categories = [
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Creative brand identities and memorable logos",
    icon: PenTool,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "poster-design",
    title: "Poster Design",
    description: "Eye-catching promotional and event posters",
    icon: Image,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "business-card",
    title: "Business Card Design",
    description: "Professional networking and contact cards",
    icon: CreditCard,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "menu-card",
    title: "Menu Card Design",
    description: "Elegant restaurant and cafe menu designs",
    icon: Utensils,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "t-shirt",
    title: "T-Shirt Design",
    description: "Custom apparel and merchandise designs",
    icon: Shirt,
    color: "from-red-500 to-rose-500",
  },
  {
    id: "shop-board",
    title: "Shop Board Design",
    description: "Retail signage and promotional displays",
    icon: Store,
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: "banner",
    title: "Banner Design",
    description: "Large-scale advertising and event banners",
    icon: Layout,
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "frame",
    title: "Frame Design",
    description: "Artistic frames and decorative borders",
    icon: Frame,
    color: "from-yellow-500 to-orange-500",
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PortfolioCategories() {
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
          className="absolute top-20 left-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Portfolio Categories
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my diverse design work across various categories. Click on any category to view the complete collection.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/portfolio/${category.id}`}>
                <motion.div
                  variants={itemVariants}
                  className="group relative glass-card p-6 rounded-2xl cursor-pointer overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
