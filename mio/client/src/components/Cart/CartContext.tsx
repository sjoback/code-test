import React, { createContext, useContext, ReactNode } from 'react';
import useCart from '../../hooks/useCart';
import usePostal from '../../hooks/usePostal';
import { Cart } from '../../types/Cart';

interface CartContextType {
    setNewQuantity: (id: string, quantity: number) => void;
    cart: Cart | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            'useCartContext must be used within a QuantityProvider'
        );
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const { postal, setPostal } = usePostal();

    const {
        cart,
        loading: loadingCart,
        setDelivery,
        setQuantity,
        deliveryOptions,
    } = useCart(postal);

    const setNewQuantity = (id: string, quantity: number) => {
        // Implement your setQuantity logic here
        setQuantity(id, quantity);
        // Add your actual logic to update the quantity
    };

    return (
        <CartContext.Provider value={{ setNewQuantity, cart }}>
            {children}
        </CartContext.Provider>
    );
};
