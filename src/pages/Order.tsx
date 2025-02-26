
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { MinusCircle, PlusCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";

type OrderProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

const initialProducts: OrderProduct[] = [
  {
    id: 1,
    name: "Bolo de Chocolate",
    price: 89.90,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Bolos"
  },
  {
    id: 2,
    name: "Cupcake Red Velvet",
    price: 12.90,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Cupcakes"
  }
];

const Order = () => {
  const [products, setProducts] = useState<OrderProduct[]>(initialProducts);

  const updateQuantity = (id: number, increment: boolean) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = increment ? product.quantity + 1 : Math.max(0, product.quantity - 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    }));
  };

  const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
            Seu Pedido
          </h1>

          <div className="grid md:grid-cols-[2fr,1fr] gap-6">
            {/* Lista de Produtos */}
            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden animate-fade-in">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <span className="text-xs bg-primary px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                          <h3 className="font-playfair text-lg mt-2">{product.name}</h3>
                          <p className="text-foreground/80">
                            R$ {product.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, false)}
                          >
                            <MinusCircle className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{product.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, true)}
                          >
                            <PlusCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Resumo do Pedido */}
            <Card className="h-fit sticky top-20">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span>{product.name} x{product.quantity}</span>
                    <span>R$ {(product.price * product.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Finalizar Pedido
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;
