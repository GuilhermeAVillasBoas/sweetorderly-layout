
import { Button } from "./ui/button";

type Category = "Todos" | "Bolos" | "Tortas" | "Doces";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: Category[] = ["Todos", "Bolos", "Tortas", "Doces"];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="button-hover"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
