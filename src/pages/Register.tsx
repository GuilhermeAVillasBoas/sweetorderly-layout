
import { Navigation } from "@/components/Navigation";
import { RegistrationForm } from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
            Crie uma conta
          </h1>
          <p className="text-center mb-8 text-muted-foreground">
            Cadastre-se para facilitar seus pedidos e acompanhar seu histórico de compras
          </p>
          <RegistrationForm />
        </div>
      </main>
    </div>
  );
};

export default Register;
