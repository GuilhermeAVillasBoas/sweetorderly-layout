
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Cake } from "lucide-react";

export const ProductsGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* About Section */}
          <Card className="overflow-hidden card-hover animate-fade-in">
            <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Nossa História</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                Desde 2020, trazemos doçura e alegria para momentos especiais. 
                Cada criação é feita com amor, dedicação e ingredientes selecionados.
              </p>
              <p className="text-base md:text-lg font-medium text-foreground/90 italic">
                "Transformando momentos em doces memórias"
              </p>
            </CardContent>
          </Card>

          {/* Custom Orders Section */}
          <Card className="overflow-hidden card-hover animate-fade-in">
            <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <Cake className="h-12 w-12 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Pedidos Personalizados</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Quer algo especial? Criamos doces únicos para suas ocasiões especiais.
                Entre em contato e faça seu pedido personalizado.
              </p>
            </CardContent>
            <CardFooter className="p-6 md:p-8 pt-0">
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover"
                asChild
              >
                <Link to="/contato">Fazer Pedido Personalizado</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
