
import { ShoppingBag, Menu, Instagram, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80vw] sm:w-[300px]">
              <div className="py-6">
                <a href="/" className="text-xl font-playfair font-bold">
                  Confeitaria
                </a>
              </div>
              <nav className="flex flex-col gap-4">
                <a href="#" className="block px-2 py-3 hover:text-primary-foreground border-b">Menu</a>
                <a href="#" className="block px-2 py-3 hover:text-primary-foreground border-b">Sobre</a>
                <a href="#" className="block px-2 py-3 hover:text-primary-foreground">Contato</a>
              </nav>
            </SheetContent>
          </Sheet>
          
          <a href="/" className="text-xl md:text-2xl font-playfair font-bold">
            Confeitaria
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Menu</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Sobre</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Contato</a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="button-hover hidden md:flex">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="button-hover">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="button-hover relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
