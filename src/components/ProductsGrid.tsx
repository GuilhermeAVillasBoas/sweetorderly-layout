import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";

// Keep only the most popular product
const featuredProduct = {
  id: 1,
  name: "Bolo de Chocolate",
  price: "R$ 89,90",
  image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  category: "Bolos",
  description: "Nosso delicioso bolo de chocolate com cobertura especial e decoração artesanal"
};

export const ProductsGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-3 md:mb-4">Produto Mais Pedido</h2>
          <p className="text-sm md:text-base text-foreground/80 px-4">Descubra porque este é o favorito dos nossos clientes</p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden card-hover animate-fade-in">
            <CardHeader className="p-0">
              <div className="aspect-square relative">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-primary px-2 py-1 rounded-full text-xs md:text-sm">
                    {featuredProduct.category}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-accent px-3 py-1 rounded-full text-xs md:text-sm flex items-center">
                    <Crown className="w-4 h-4 mr-1" /> Mais Pedido
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <CardTitle className="font-playfair text-xl md:text-2xl">{featuredProduct.name}</CardTitle>
              <p className="text-sm md:text-base text-muted-foreground mt-2 md:mt-3">
                {featuredProduct.description}
              </p>
              <p className="text-lg md:text-xl font-semibold mt-2 md:mt-4">{featuredProduct.price}</p>
            </CardContent>
            <CardFooter className="p-4 md:p-6 pt-0">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover text-sm md:text-base">
                Adicionar ao Carrinho
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
