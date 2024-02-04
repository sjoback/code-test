import { useCallback, useEffect, useState } from 'react';
import { Cart } from '../types/Cart';
import { DeliveryOption } from '../types/DeliveryOption';

const MOCK_CART_ID = 'MOCK_CART_ID';
const CART_SERVICE_URL = 'http://localhost:8081/api/cart';

export default (postal) => {
    const url = `${CART_SERVICE_URL}/${MOCK_CART_ID}`;
    const [cart, setCart] = useState<Cart>();
    const [loading, setLoading] = useState<boolean>(false);
    const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const resp = await fetch(url);
                const data = await resp.json();

                setCart(data);
            } catch (error) {
                console.error('error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const setQuantity = useCallback(async (productId: string, quantity: Number) => {
        try {
            console.log(`Product: ${productId}. Quantity: ${quantity}`);

            setLoading(true);

            const resp = await fetch(`${url}/${productId}/quantity/${quantity}`, {
                method: 'PUT',
            });
            const data = await resp.json();

            setCart(data);
        } catch (error) {
            console.log('error:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const setDelivery = useCallback(async (deliveryId: string) => {
        try {
            setLoading(true);

            const resp = await fetch(`${CART_SERVICE_URL}/${MOCK_CART_ID}/delivery/${deliveryId}`, {
                method: 'POST',
            });
            const data = await resp.json();

            setCart(data);
        } catch (error) {
            console.log('error:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (!postal || !cart?.id) return setDeliveryOptions(undefined);

            try {
                const resp = await fetch(`${CART_SERVICE_URL}/${cart.id}/delivery/${postal}`);
                const { cart: newCart, deliveryOptions: newDeliveryOptions } = await resp.json();

                setCart(newCart);
                setDeliveryOptions(newDeliveryOptions);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postal]);

    return {
        cart,
        setCart,
        loading,
        setDelivery,
        setQuantity,
        deliveryOptions,
    };
};
