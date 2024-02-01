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

    const setQuantity = useCallback(
        async (productId: string, quantity: Number) => {
            try {
                console.log('setQuantity', productId, quantity);

                setLoading(true);

                const resp = await fetch(
                    `${url}/${productId}/quantity/${quantity}`,
                    {
                        // app.put('/api/cart/:cartId/:id/quantity/:quantity'
                        method: 'PUT',
                    }
                );
                const data = await resp.json();
                console.log(data);

                setCart(data);
            } catch (error) {
                console.log('error:', error);
            } finally {
                setLoading(false);
            }
        },
        []
    );

    const setDelivery = useCallback(async (deliveryId: string) => {
        try {
            setLoading(true);

            const resp = await fetch(
                `${CART_SERVICE_URL}/${MOCK_CART_ID}/delivery/${deliveryId}`,
                {
                    // app.post('/api/cart/:cartId/delivery/:deliveryId'
                    method: 'POST',
                }
            );
            const data = await resp.json();
            console.log(data);
            setCart(data);
        } catch (error) {
            console.log('error:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!postal || !cart?.id) {
            setDeliveryOptions(undefined);
        } else {
            fetch(`${CART_SERVICE_URL}/${cart.id}/delivery/${postal}`)
                .then((resp) => resp.json())
                .then(({ cart, deliveryOptions }) => {
                    setCart(cart);
                    setDeliveryOptions(deliveryOptions);
                })
                .catch(console.error)
                .finally(() => setLoading(false));
        }
    }, [postal]);

    return {
        cart,
        loading,
        setDelivery,
        setQuantity,
        deliveryOptions,
    };
};
