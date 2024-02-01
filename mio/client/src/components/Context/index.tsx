import React, { createContext, useContext, ReactNode } from 'react';
import useCart from '../../hooks/useCart';
// import usePostal from '../../hooks/usePostal';
import { Cart } from '../../types/Cart';
import { DeliveryOption } from '../../types/DeliveryOption';

interface AppContextType {
    setNewQuantity: (productId: string, quantity: number) => void;
    setNewDelivery: (deliveryId: string) => void;
    cart: Cart | undefined;
    loadingCart: boolean;
    deliveryOptions: DeliveryOption[] | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppContext must be used within a QuantityProvider');
    }
    return context;
};

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    // const { postal, setPostal } = usePostal();
    const { cart, loading: loadingCart, setDelivery, setQuantity, deliveryOptions } = useCart(postal);

    const setNewQuantity = (productId: string, quantity: number) => setQuantity(productId, quantity);
    const setNewDelivery = (deliveryId: string) => setDelivery(deliveryId);

    return (
        <AppContext.Provider
            value={{
                cart,
                setNewQuantity,
                setNewDelivery,
                loadingCart,
                deliveryOptions,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
