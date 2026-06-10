import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AuroraBackground } from "@/components/AuroraBackground";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <AuroraBackground />
      <main className="relative z-10 text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold font-heading gradient-text mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {language === "en" ? "Oops! Page not found" : "¡Ups! Página no encontrada"}
        </p>
        <Button variant="hero" size="xl" asChild>
          <Link to="/">
            <Home className="w-5 h-5 mr-2" />
            {language === "en" ? "Return to Home" : "Volver al Inicio"}
          </Link>
        </Button>
      </main>
    </div>
  );
};

export default NotFound;
