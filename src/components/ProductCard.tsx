
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export const ProductCard = () => {
  return (
    <Card className="overflow-hidden card-hover animate-fade-in">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <img
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
            alt="Produto"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-primary px-2 py-1 rounded-full text-xs md:text-sm">
              Bolos
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-playfair text-lg">Bolo de Chocolate</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Delicioso bolo de chocolate com cobertura especial
        </p>
        <p className="text-lg font-semibold mt-2">R$ 89,90</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
