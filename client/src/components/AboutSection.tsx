import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-accent/40 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.p
                variants={itemVariants}
                className="text-accent font-semibold text-sm uppercase tracking-widest mb-2"
              >
                About Me
              </motion.p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Crafting Digital
                <br />
                <span className="text-accent">Experiences</span>
              </h2>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a Software Engineering graduate with professional experience in UI/UX design, graphic design, photography, and digital product development. I enjoy creating user-centered digital experiences that combine functionality, aesthetics, and innovation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Passionate about technology, creativity, and continuous learning, I've collaborated with cross-functional teams to deliver high-quality digital products. My multidisciplinary background allows me to approach problems from unique angles, blending technical expertise with creative vision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 text-center transform hover:scale-105"
              >
                Let's Work Together
              </a>
              <a
                href="https://www.linkedin.com/in/athnanmam"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 text-center"
              >
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "100%", label: "Dedication" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
