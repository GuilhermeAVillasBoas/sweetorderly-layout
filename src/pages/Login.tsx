
import { Navigation } from "@/components/Navigation";
import { LoginForm } from "@/components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
            Fazer Login
          </h1>
          <p className="text-center mb-8 text-muted-foreground">
            Entre com seu e-mail e senha para acessar sua conta
          </p>
          <LoginForm />
          <div className="text-center mt-6">
            <span className="text-muted-foreground">Não tem uma conta? </span>
            <Link to="/registro" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
