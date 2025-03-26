
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Cake } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const dessertOptions = [
  { id: "bolo-chocolate", label: "Bolo de Chocolate" },
  { id: "bolo-red-velvet", label: "Bolo Red Velvet" },
  { id: "bolo-cenoura", label: "Bolo de Cenoura" },
  { id: "torta-limao", label: "Torta de Limão" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "brigadeiros", label: "Brigadeiros" },
  { id: "docinhos", label: "Docinhos Tradicionais" },
  { id: "macarons", label: "Macarons" },
];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  orderDetails: string;
  guestCount: string;
  deliveryDate: Date | undefined;
  eventType: string;
}

const CustomOrder = () => {
  const [selectedDesserts, setSelectedDesserts] = useState<string[]>([]);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      orderDetails: "",
      guestCount: "",
      deliveryDate: undefined,
      eventType: "",
    },
  });

  const toggleDessert = (dessertId: string) => {
    setSelectedDesserts((current) =>
      current.includes(dessertId)
        ? current.filter((id) => id !== dessertId)
        : [...current, dessertId]
    );
  };

  const onSubmit = (data: FormValues) => {
    // Include selected desserts in submission
    const formData = {
      ...data,
      selectedDesserts: selectedDesserts,
    };
    
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Pedido enviado com sucesso!",
      description: "Entraremos em contato em breve para confirmar os detalhes.",
    });
    
    // Reset form
    form.reset();
    setSelectedDesserts([]);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <Cake className="h-12 w-12 text-accent mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Pedido Personalizado
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário abaixo com os detalhes do seu pedido personalizado. 
              Nossa equipe entrará em contato para confirmar disponibilidade e finalizar os detalhes.
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">Informações do Pedido</CardTitle>
              <CardDescription>
                Forneça os detalhes para seu pedido personalizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Order Details Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Detalhes do Evento</h3>
                    
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Evento</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo de evento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="aniversario">Aniversário</SelectItem>
                              <SelectItem value="casamento">Casamento</SelectItem>
                              <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantidade de Pessoas</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="deliveryDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Data de Entrega</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Escolha uma data</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Precisamos de pelo menos 5 dias de antecedência para pedidos personalizados.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="orderDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detalhes do Pedido</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Descreva os detalhes do seu pedido, incluindo temas, cores, sabores ou qualquer outra personalização desejada." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Dessert Preferences */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Preferências de Doces</h3>
                    <p className="text-sm text-muted-foreground">
                      Selecione os itens que você gostaria de incluir no seu pedido:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {dessertOptions.map((option) => (
                        <div 
                          key={option.id} 
                          className="flex items-center space-x-2"
                        >
                          <Checkbox 
                            id={option.id} 
                            checked={selectedDesserts.includes(option.id)}
                            onCheckedChange={() => toggleDessert(option.id)} 
                          />
                          <label 
                            htmlFor={option.id} 
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Delivery Address Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Endereço de Entrega</h3>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Endereço Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Rua, número, complemento" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cidade</FormLabel>
                          <FormControl>
                            <Input placeholder="Cidade" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Contact Information Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Informações de Contato</h3>
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                              <Input placeholder="seu.email@exemplo.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground button-hover"
                  >
                    Enviar Pedido
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CustomOrder;
