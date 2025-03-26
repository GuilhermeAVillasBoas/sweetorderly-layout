
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { MinusCircle, PlusCircle, ShoppingBag, Trash2, MapPin, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type DeliveryInfo = {
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  zipCode: string;
  phone: string;
};

type PaymentMethod = "credit" | "pix" | "cash";

const Order = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<"cart" | "delivery-payment" | "confirmation">("cart");
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: "",
    street: "",
    number: "",
    complement: "",
    city: "",
    zipCode: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit");
  const [isDeliveryFormValid, setIsDeliveryFormValid] = useState(false);

  const total = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryInfo(prev => ({ ...prev, [name]: value }));
    
    // Check if all required fields are filled
    const updatedInfo = { ...deliveryInfo, [name]: value };
    const requiredFields = ['name', 'street', 'number', 'city', 'zipCode', 'phone'];
    const allRequiredFilled = requiredFields.every(field => updatedInfo[field as keyof DeliveryInfo].trim() !== '');
    
    setIsDeliveryFormValid(allRequiredFilled);
  };

  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value as PaymentMethod);
  };

  const handleProceedToDelivery = () => {
    setCurrentStep("delivery-payment");
  };

  const handleBackToCart = () => {
    setCurrentStep("cart");
  };

  const handleCheckout = () => {
    if (!isDeliveryFormValid) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    toast.success("Pedido finalizado com sucesso!");
    clearCart();
    setCurrentStep("cart");
    
    // Reset form
    setDeliveryInfo({
      name: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      zipCode: "",
      phone: "",
    });
    setPaymentMethod("credit");
  };

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
            {currentStep === "cart" ? "Seu Carrinho" : "Informações de Entrega e Pagamento"}
          </h1>

          {currentStep === "cart" && (
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
                    onClick={handleProceedToDelivery}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Continuar para Entrega
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {currentStep === "delivery-payment" && (
            <div className="grid md:grid-cols-[2fr,1fr] gap-6">
              {/* Form de Entrega e Pagamento */}
              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center">
                      <MapPin className="mr-2 h-5 w-5" /> Informações de Entrega
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={deliveryInfo.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="street">Rua/Avenida *</Label>
                        <Input 
                          id="street" 
                          name="street" 
                          value={deliveryInfo.street}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="number">Número *</Label>
                        <Input 
                          id="number" 
                          name="number" 
                          value={deliveryInfo.number}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="complement">Complemento</Label>
                      <Input 
                        id="complement" 
                        name="complement" 
                        value={deliveryInfo.complement}
                        onChange={handleInputChange}
                        placeholder="Apartamento, bloco, referência..."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Cidade *</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={deliveryInfo.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">CEP *</Label>
                        <Input 
                          id="zipCode" 
                          name="zipCode" 
                          value={deliveryInfo.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={deliveryInfo.phone}
                        onChange={handleInputChange}
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground">* Campos obrigatórios</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" /> Forma de Pagamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup 
                      value={paymentMethod}
                      onValueChange={handlePaymentMethodChange}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="credit" id="payment-credit" />
                        <Label htmlFor="payment-credit" className="flex-1 cursor-pointer">Cartão de Crédito</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="pix" id="payment-pix" />
                        <Label htmlFor="payment-pix" className="flex-1 cursor-pointer">PIX</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="cash" id="payment-cash" />
                        <Label htmlFor="payment-cash" className="flex-1 cursor-pointer">Dinheiro na Entrega</Label>
                      </div>
                    </RadioGroup>
                    
                    <Collapsible className="mt-4">
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm" className="text-xs w-full">
                          Mostrar detalhes de pagamento
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 p-2 border rounded-md">
                        {paymentMethod === "credit" && (
                          <p className="text-sm text-muted-foreground">
                            O pagamento será processado na entrega via máquina de cartão.
                          </p>
                        )}
                        {paymentMethod === "pix" && (
                          <p className="text-sm text-muted-foreground">
                            Após a confirmação do pedido, você receberá as informações para pagamento via PIX.
                          </p>
                        )}
                        {paymentMethod === "cash" && (
                          <p className="text-sm text-muted-foreground">
                            Por favor, tenha o valor exato para facilitar a entrega.
                          </p>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </div>
              
              {/* Resumo do Pedido */}
              <Card className="h-fit sticky top-20">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl">Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="max-h-40 overflow-y-auto mb-2">
                    {cart.map((product) => (
                      <div key={product.id} className="flex justify-between text-sm mb-1">
                        <span>{product.name} x{product.quantity}</span>
                        <span>R$ {(product.price * product.quantity).toFixed(2).replace('.', ',')}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover"
                    onClick={handleCheckout}
                    disabled={!isDeliveryFormValid}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Finalizar Pedido
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={handleBackToCart}
                  >
                    Voltar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Order;
