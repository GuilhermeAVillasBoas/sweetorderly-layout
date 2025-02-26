
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ProductsGrid } from "../components/ProductsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ProductsGrid />
      </main>
    </div>
  );
};

export default Index;
