import React, { createContext, useContext, ReactNode } from 'react';
import useCart from '../../hooks/useCart';
import usePostal from '../../hooks/usePostal';
import { Cart } from '../../types/Cart';
import { DeliveryOption } from '../../types/DeliveryOption';

interface AppContextType {
    setCart: (cart: Cart) => void;
    setQuantity: (productId: string, quantity: number) => void;
    setDelivery: (deliveryId: string) => void;
    setContextPostal: (value: string) => void;
    cart?: Cart;
    loadingCart: boolean;
    postal: string;
    deliveryOptions?: DeliveryOption[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);

    if (!context) throw new Error('useAppContext must be used within a AppProvider');
    return context;
};

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const { postal, setPostal } = usePostal();
    const { setCart, cart, loading: loadingCart, setDelivery, setQuantity, deliveryOptions } = useCart(postal);

    const setContextPostal = (postal: any) => setPostal(postal);

    const contextValue: AppContextType = {
        cart,
        setCart,
        setQuantity,
        setDelivery,
        loadingCart,
        deliveryOptions,
        postal,
        setContextPostal,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
