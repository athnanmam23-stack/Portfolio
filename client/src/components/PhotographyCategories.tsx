import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Heart, Cake, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const categories = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description: "Capturing beautiful moments of your special day",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "birthday",
    title: "Birthday Photography",
    description: "Celebrating life's joyous occasions",
    icon: Cake,
    color: "from-amber-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function PhotographyCategories() {
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
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl"
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
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </motion.button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 mb-6"
          >
            <Camera size={40} className="text-white" />
          </motion.div>
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Photography Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Capture Your Moments
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my photography work across different occasions. Each category tells a unique story through the lens.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/photography/${category.id}`}>
                <motion.div
                  variants={itemVariants}
                  className="group relative glass-card p-8 rounded-3xl cursor-pointer overflow-hidden"
                  whileHover={{ y: -12, scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-400`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400`}
                  >
                    <Icon size={40} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg
                      width="28"
                      height="28"
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

                  {/* Decorative Elements */}
                  <motion.div
                    className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-400`}
                  />
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
