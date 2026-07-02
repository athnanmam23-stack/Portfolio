import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20">
      {/* Background with Photo and Overlay */}
      <div className="absolute inset-0">
        {/* Photo Background - Face on left side */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-image.jpg')`,
            backgroundPosition: 'left center',
          }}
        />
        {/* Gradient Overlay - Right side darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/85 to-background/30" />
        {/* Additional dark overlay on top */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
              style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900 }}
            >
              Athnan
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-accent text-4xl md:text-5xl lg:text-6xl whitespace-nowrap"
            >
              Graphic Designer
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Software Engineer, UI/UX Designer, Graphic Designer, and Photographer crafting beautiful digital experiences that blend functionality, aesthetics, and innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToNext}
              className="px-8 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

          {/* Right Content - Photo in Red Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-96">
              {/* Red Border Box */}
              <div className="absolute inset-0 border-4 border-red-500 rounded-3xl" />
              {/* Photo Inside Box */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src="/hero-image.jpg"
                  alt="Athnan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}
