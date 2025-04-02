
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock } from "lucide-react";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u: any) => 
        u.email === formData.email && u.password === formData.password
      );
      
      if (user) {
        // Set current user (without password)
        localStorage.setItem("currentUser", JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email
        }));
        
        toast({
          title: "Login realizado com sucesso!",
          description: `Bem-vindo(a) de volta, ${user.name}!`,
        });
        
        navigate("/");
      } else {
        setError("Email ou senha incorretos");
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <Mail size={18} />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleChange}
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="password">Senha</Label>
          <a href="#" className="text-sm text-primary hover:underline">
            Esqueceu a senha?
          </a>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <Lock size={18} />
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
            value={formData.password}
            onChange={handleChange}
            className="pl-10"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  );
};
