
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
    category: "Cupcakes"
  },
  {
    id: 4,
    name: "Brigadeiro Gourmet",
    description: "Brigadeiro artesanal com chocolate belga",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1584883825983-5fcb32564c1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZ2FkZWlyb3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Doces"
  },
  {
    id: 5,
    name: "Bolo de Morango",
    description: "Bolo com recheio de creme e morangos frescos",
    price: 95.90,
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyeSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    category: "Bolos"
  },
  {
    id: 6,
    name: "Torta de Maçã",
    description: "Torta de maçã com canela e especiarias",
    price: 68.90,
    image: "https://images.unsplash.com/photo-1568571780765-9276a7373eba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D",
    category: "Tortas"
  },
  {
    id: 7,
    name: "Cupcake de Baunilha",
    description: "Cupcake de baunilha com cobertura de buttercream",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFuaWxsYSUyMGN1cGNha2V8ZW58MHx8MHx8fDA%3D",
    category: "Cupcakes"
  },
  {
    id: 8,
    name: "Bombom de Cereja",
    description: "Bombom artesanal com cereja e licor",
    price: 7.90,
    image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNob2NvbGF0ZSUyMGJvbWJvbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Doces"
  },
  {
    id: 9,
    name: "Bolo de Coco",
    description: "Bolo de coco com cobertura de beijinho",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jb251dCUyMGNha2V8ZW58MHx8MHx8fDA%3D",
    category: "Bolos"
  },
  {
    id: 10,
    name: "Torta de Chocolate",
    description: "Torta de chocolate com ganache e frutas vermelhas",
    price: 82.90,
    image: "https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwdGFydHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Tortas"
  },
  {
    id: 11,
    name: "Cupcake de Chocolate",
    description: "Cupcake de chocolate com cobertura de ganache",
    price: 11.90,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY3VwY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Cupcakes"
  },
  {
    id: 12,
    name: "Beijinho Gourmet",
    description: "Beijinho artesanal com coco fresco",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1648023292693-8507c5a18a26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dCUyMHRydWZmbGV8ZW58MHx8MHx8fDA%3D",
    category: "Doces"
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
