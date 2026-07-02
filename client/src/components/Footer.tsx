import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Athnan"
              className="w-8 h-8"
            />
            <div>
              <p className="font-semibold text-foreground">Mohamed Athnan</p>
              <p className="text-sm text-muted-foreground">
                Creative Engineer & Designer
              </p>
            </div>
          </div>

          {/* Center Section */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Mohamed Athnan. All rights reserved.
          </p>

          {/* Right Section */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent hover:text-background transition-all duration-300"
          >
            Back to Top
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-muted-foreground text-center">
            Crafted with care using React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
