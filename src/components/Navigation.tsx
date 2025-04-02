
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { UserMenu } from "./UserMenu";

export const Navigation = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

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
                <Link to="/" className="text-xl font-playfair font-bold">
                  Confeitaria
                </Link>
              </div>
              <nav className="flex flex-col gap-4">
                <Link to="/menu" className="block px-2 py-3 hover:text-primary-foreground border-b">Menu</Link>
                <Link to="/contato" className="block px-2 py-3 hover:text-primary-foreground border-b">Contato</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="text-xl md:text-2xl font-playfair font-bold">
            Confeitaria
          </Link>

          <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/menu" className="hover:text-primary-foreground transition-colors">Menu</Link>
            <Link to="/contato" className="hover:text-primary-foreground transition-colors font-medium">Contato</Link>
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/order" className="flex items-center">
              <Button variant="ghost" size="icon" className="button-hover relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              </Button>
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
