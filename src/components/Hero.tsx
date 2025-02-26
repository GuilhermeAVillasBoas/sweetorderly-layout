
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-primary flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Doces Momentos, Sabores Únicos
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80">
            Descubra nossa seleção de doces artesanais feitos com amor e os melhores ingredientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground button-hover">
              Ver Cardápio
            </Button>
            <Button variant="outline" className="button-hover">
              Fazer Pedido
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
