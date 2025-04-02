
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Lock } from "lucide-react";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Senhas não coincidem";
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Save user to localStorage for a simple approach
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Check if email already exists
      const emailExists = users.some((user: any) => user.email === formData.email);
      if (emailExists) {
        setErrors({ email: "Este email já está cadastrado" });
        setIsLoading(false);
        return;
      }
      
      // Add new user
      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        password: formData.password, // In a real app, this should be hashed
      };
      
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      
      // Set current user
      localStorage.setItem("currentUser", JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }));
      
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Você está conectado à sua nova conta.",
      });
      
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome completo</Label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <User size={18} />
          </div>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleChange}
            className={`pl-10 ${errors.name ? 'border-destructive' : ''}`}
          />
        </div>
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>
      
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
            className={`pl-10 ${errors.email ? 'border-destructive' : ''}`}
          />
        </div>
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <Lock size={18} />
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={handleChange}
            className={`pl-10 ${errors.password ? 'border-destructive' : ''}`}
          />
        </div>
        {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirme sua senha</Label>
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <Lock size={18} />
          </div>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`pl-10 ${errors.confirmPassword ? 'border-destructive' : ''}`}
          />
        </div>
        {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Cadastrando..." : "Criar conta"}
      </Button>
    </form>
  );
};
