
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "Bolo de Chocolate",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Bolos"
  },
  {
    id: 2,
    name: "Cupcake Red Velvet",
    price: "R$ 12,90",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Cupcakes"
  },
  {
    id: 3,
    name: "Torta de Morango",
    price: "R$ 79,90",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Tortas"
  },
  {
    id: 4,
    name: "Brigadeiros Gourmet",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Doces"
  }
];

export const ProductsGrid = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-playfair font-bold mb-4">Nossos Produtos</h2>
          <p className="text-foreground/80">Escolha entre nossa seleção de delícias artesanais</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden card-hover animate-fade-in">
              <CardHeader className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary px-2 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-playfair">{product.name}</CardTitle>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover">
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
