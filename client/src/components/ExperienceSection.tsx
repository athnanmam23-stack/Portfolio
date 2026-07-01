import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExperienceSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Witsberry (Pvt) Ltd",
      period: "May 2024 – June 2025",
      description:
        "Designed responsive web and mobile application interfaces, created wireframes and prototypes using Figma, and improved user experience through usability testing and design optimization.",
      highlights: [
        "Responsive web and mobile design",
        "Figma prototyping",
        "Design systems",
        "User research",
      ],
    },
    {
      title: "Graphic Designer & Photographer",
      company: "Gulf Studio",
      period: "March 2020 – February 2024",
      description:
        "Designed logos, brand identities, and marketing materials. Professional portrait, wedding, and event photography with photo editing and album design.",
      highlights: [
        "Logo and branding",
        "Marketing materials",
        "Professional photography",
        "Photo editing",
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-card"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Experience & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 border-l-4 border-accent"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-semibold mt-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                  >
                    {highlight}
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
