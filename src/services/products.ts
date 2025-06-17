export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "Bolos" | "Tortas" | "Doces" | "Cupcakes";
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Bolo de Chocolate",
    description: "Delicioso bolo de chocolate com cobertura especial",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Bolos",
    featured: true
  },
  {
    id: 2,
    name: "Torta de Limão",
    description: "Torta de limão com massa amanteigada e merengue",
    price: 75.90,
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBwaWV8ZW58MHx8MHx8fDA%3D",
    category: "Tortas",
    featured: true
  },
  {
    id: 3,
    name: "Cupcake Red Velvet",
    description: "Cupcake de red velvet com cobertura de cream cheese",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwdmVsdmV0JTIwY3VwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Cupcakes",
    featured: true
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === "Todos") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};
