
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { MinusCircle, PlusCircle, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const Order = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success("Pedido finalizado com sucesso!");
    clearCart();
  };

  const total = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-secondary">
        <Navigation />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
              Seu Carrinho
            </h1>
            <Card className="p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">Seu carrinho está vazio</h2>
                <p className="text-muted-foreground mb-6">Adicione alguns produtos do nosso cardápio</p>
                <Button asChild>
                  <a href="/menu">Ver Cardápio</a>
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
            Seu Carrinho
          </h1>

          <div className="grid md:grid-cols-[2fr,1fr] gap-6">
            {/* Lista de Produtos */}
            <div className="space-y-4">
              {cart.map((product) => (
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
                          <div className="flex justify-between items-start mt-2">
                            <h3 className="font-playfair text-lg">{product.name}</h3>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-destructive hover:text-destructive/90"
                              onClick={() => removeFromCart(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-foreground/80">
                            R$ {product.price.toFixed(2).replace('.', ',')}
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
                {cart.map((product) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span>{product.name} x{product.quantity}</span>
                    <span>R$ {(product.price * product.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover"
                  onClick={handleCheckout}
                >
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
