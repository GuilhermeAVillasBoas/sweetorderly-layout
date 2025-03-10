
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] md:h-[80vh] bg-primary flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-playfair font-bold mb-4 md:mb-6 leading-tight">
            Doces Momentos, Sabores Únicos
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-foreground/80 px-4">
            Descubra nossa seleção de doces artesanais feitos com amor e os melhores ingredientes
          </p>
          <div className="flex justify-center px-4">
            <Button 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground button-hover"
              asChild
            >
              <Link to="/menu">Ver Cardápio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
