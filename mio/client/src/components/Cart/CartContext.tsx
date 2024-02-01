import React, { createContext, useContext, ReactNode } from 'react';
import useCart from '../../hooks/useCart';
import usePostal from '../../hooks/usePostal';
import { Cart } from '../../types/Cart';
import { DeliveryOption } from '../../types/DeliveryOption';

interface CartContextType {
    setNewQuantity: (productId: string, quantity: number) => void;
    setNewDelivery: (deliveryId: string) => void;
    cart: Cart | undefined;
    loadingCart: boolean;
    deliveryOptions: DeliveryOption[] | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCartContext must be used within a QuantityProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const { postal, setPostal } = usePostal();
    const { cart, loading: loadingCart, setDelivery, setQuantity, deliveryOptions } = useCart(postal);

    const setNewQuantity = (productId: string, quantity: number) => setQuantity(productId, quantity);
    const setNewDelivery = (deliveryId: string) => setDelivery(deliveryId);

    return (
        <CartContext.Provider
            value={{
                cart,
                setNewQuantity,
                setNewDelivery,
                loadingCart,
                deliveryOptions,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
