
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/services/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <Card className="overflow-hidden card-hover animate-fade-in">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-primary px-2 py-1 rounded-full text-xs md:text-sm">
              {product.category}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-playfair text-lg">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold mt-2">R$ {product.price.toFixed(2).replace('.', ',')}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
