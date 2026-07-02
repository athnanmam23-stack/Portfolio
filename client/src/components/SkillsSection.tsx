import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      category: "Software Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      category: "Graphic Design",
      skills: ["Photoshop", "Illustrator", "Canva Pro", "Branding", "Logo Design"],
    },
    {
      category: "Photography",
      skills: ["Portrait Photography", "Wedding Photography", "Product Photography", "Lightroom"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Figma", "CapCut", "Ubuntu Linux", "macOS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-15 left-15 w-80 h-80 bg-accent/18 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.22, 0.42, 0.22],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-15 right-15 w-72 h-72 bg-cyan-500/18 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.38, 0.18],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/14 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -28, 0],
              x: [0, i % 2 === 0 ? 18 : -18, 0],
              opacity: [0.28, 0.55, 0.28],
            }}
            transition={{
              duration: 7 + i * 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            className="absolute w-2 h-2 bg-accent/38 rounded-full"
            style={{
              top: `${18 + i * 14}%`,
              left: `${12 + i * 14}%`,
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
            Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold text-accent mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-accent/10 text-accent text-sm rounded-lg font-medium hover:bg-accent/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
