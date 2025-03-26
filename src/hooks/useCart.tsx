
import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: Omit<CartProduct, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, increment: boolean) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: Omit<CartProduct, 'quantity'>) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        const updatedCart = prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        toast.success(`${product.name} adicionado ao carrinho`);
        return updatedCart;
      } else {
        toast.success(`${product.name} adicionado ao carrinho`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => {
      const productToRemove = prevCart.find(item => item.id === id);
      if (productToRemove) {
        toast.info(`${productToRemove.name} removido do carrinho`);
      }
      return prevCart.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: number, increment: boolean) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = increment ? item.quantity + 1 : Math.max(0, item.quantity - 1);
          if (newQuantity === 0) {
            // Se a quantidade for 0, removeremos o item em seguida
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Carrinho esvaziado');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
