import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate form submission
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "athnanmam23@gmail.com",
      href: "mailto:athnanmam23@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 2330954",
      href: "tel:+94772330954",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Riyadh, Saudi Arabia",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/athnanmam",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/athnan_maxz_?igsh=N2Z1Zmw0d2h0ZGty&utm_source=qr",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1BdutJJPSn/?mibextid=wwXIfr",
      label: "Facebook",
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
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.24, 0.44, 0.24],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-25 left-20 w-84 h-84 bg-accent/17 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.24, 1],
            opacity: [0.22, 0.42, 0.22],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-25 right-20 w-72 h-72 bg-pink-500/17 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-1/3 w-92 h-92 bg-orange-500/15 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.27, 0.54, 0.27],
            }}
            transition={{
              duration: 9 + i * 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.9,
            }}
            className="absolute w-2 h-2 bg-accent/37 rounded-full"
            style={{
              top: `${22 + i * 13}%`,
              left: `${14 + i * 13}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
