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
      className="relative py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
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
