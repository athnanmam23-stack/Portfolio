import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Mobile App UI Design",
      category: "UI/UX Design",
      description: "Comprehensive mobile application interface design with user-centered approach and modern design patterns.",
      image: "/your-project-image1.jpeg",
      tags: ["Figma", "Mobile Design", "Prototyping"],
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      description: "Complete branding package including logo design, color palette, and brand guidelines for a creative agency.",
      image: "/your-project-image2.jpg",
      tags: ["Branding", "Logo Design", "Design System"],
    },
    {
      title: "Professional Photography",
      category: "Photography",
      description: "Curated collection of professional portrait, wedding, and product photography with premium editing.",
      image: "/your-project-image3.jpg",
      tags: ["Photography", "Editing", "Curation"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 bg-card overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.23, 0.43, 0.23],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-25 w-76 h-76 bg-accent/16 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.21, 0.41, 0.21],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-25 w-68 h-68 bg-violet-500/16 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.13, 1],
            opacity: [0.19, 0.39, 0.19],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/4 right-1/4 w-88 h-88 bg-rose-500/13 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -32, 0],
              x: [0, i % 2 === 0 ? -22 : 22, 0],
              opacity: [0.26, 0.52, 0.26],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-2 h-2 bg-accent/36 rounded-full"
            style={{
              top: `${20 + i * 16}%`,
              right: `${18 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Selected Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-accent text-sm font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                {project.category === "Graphic Design" ? (
                  <Link href="/portfolio">
                    <button className="w-full px-4 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      View Portfolio
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                ) : project.category === "Photography" ? (
                  <Link href="/photography">
                    <button className="w-full px-4 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      View Portfolio
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                ) : (
                  <button 
                    disabled
                    className="w-full px-4 py-2 border border-muted text-muted-foreground rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
