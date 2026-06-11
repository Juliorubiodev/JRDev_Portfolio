import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { EmailCopyButton } from "@/components/EmailCopyButton";

const smoothTransition = {
  duration: 0.7,
  ease: "easeOut" as const,
};

export const Footer = () => {
  const { t, language } = useLanguage();
  const cvFile = language === "es" ? "/Julio_Rubio_CV_ES.pdf" : "/Julio_Rubio_CV_EN.pdf";

  return (
    <footer id="contact" className="py-24 md:py-32 relative overflow-hidden scroll-mt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={smoothTransition}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
              {t.footer.ready}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              {t.footer.letsTalk}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild className="h-14 min-w-[200px]">
                <a href="mailto:juliorubiodev@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.footer.contactMe}
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild className="h-14 min-w-[200px]">
                <a href={cvFile} download>
                  <Download className="w-5 h-5 mr-2" />
                  {t.footer.downloadResume}
                </a>
              </Button>
            </div>

            {/* Email Copy Button */}
            <div className="flex justify-center">
              <EmailCopyButton variant="footer" />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothTransition, delay: 0.15 }}
            className="flex justify-center gap-4 mt-12"
          >
            <motion.a
              href="https://github.com/Juliorubiodev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juliocrubiom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Copyright & Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.25 }}
            className="mt-16 pt-8 border-t border-border/50 flex flex-col items-center gap-4 text-center"
          >
            <p className="font-bold text-lg text-foreground font-heading">
              {t.footer?.author}
            </p>

            <p className="text-muted-foreground text-sm -mt-2">
              {t.footer?.slogan}
            </p>

            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <span>&copy; {new Date().getFullYear()} Julio Rubio</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
