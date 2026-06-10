import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0 scroll-mt-28"
    >
      <div className="container-wide section-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary to-primary/60 opacity-60 blur-md" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-3 border-background shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Julio Rubio"
                  width="320"
                  height="320"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-base md:text-lg text-muted-foreground mb-3 font-mono tracking-wide"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Name */}
          {/* LCP element: animate transform only so the text paints immediately */}
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-heading tracking-tight"
          >
            <span className="gradient-text">{t.hero.name}</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-foreground mb-3 font-heading"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:juliorubiodev@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                {t.hero.cta}
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToProjects}>
              {t.hero.viewWork}
            </Button>
          </motion.div>

          {/* Email Copy Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-6 mb-10"
          >
            <EmailCopyButton variant="hero" />
          </motion.div>

          {/* Mobile Social Links (hidden on lg screens where sidebar shows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4 lg:hidden"
          >
            <motion.a
              href="https://github.com/Juliorubiodev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200 shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juliocrubiom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-card/80 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200 shadow-lg"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
