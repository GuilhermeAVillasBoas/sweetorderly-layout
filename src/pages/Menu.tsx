
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { useState } from "react";

type Category = "Todos" | "Bolos" | "Tortas" | "Doces" | "Cupcakes";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">
            Nosso Cardápio
          </h1>
          
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ProductCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
