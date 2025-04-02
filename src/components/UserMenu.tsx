
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { UserRound, LogOut, ShoppingBag, Heart } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export const UserMenu = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="flex gap-2">
        <Button variant="ghost" onClick={() => navigate("/login")} className="text-sm">
          Entrar
        </Button>
        <Button onClick={() => navigate("/registro")} className="text-sm">
          Cadastrar
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <UserRound className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuLabel>Olá, {user?.name.split(' ')[0]}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/perfil")}>
          <UserRound className="mr-2 h-4 w-4" />
          <span>Meu Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/pedidos")}>
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span>Meus Pedidos</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate("/favoritos")}>
          <Heart className="mr-2 h-4 w-4" />
          <span>Favoritos</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {
          logout();
          navigate("/");
        }}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
