import React from 'react';
import { useAppContext } from '../Context';
import StyledCartTotal from './CartTotal.styled';

// const CartTotal = ({ cart, deliveryOptions }) => {
const CartTotal: React.FC = () => {
    const { cart, deliveryOptions } = useAppContext();
    const { delivery, products } = cart || {};

    const originalPrice = products?.reduce((acc, p) => acc + p.originalPrice * p.quantity, 0);
    const totalProductPrice = products?.reduce((acc, p) => acc + p.price * p.quantity, 0);
    const discount = totalProductPrice - originalPrice;

    const deliveryOption = deliveryOptions?.find(({ id }) => id === cart.delivery);
    const deliveryPrice = !deliveryOption ? -1 : deliveryOption.freeThreshold < totalProductPrice ? 0 : deliveryOption.price;

    const total = deliveryPrice < 0 ? totalProductPrice : totalProductPrice + deliveryPrice;

    if (!products) {
        return null;
    }

    return (
        <StyledCartTotal>
            {discount !== 0 && (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>Ordinarie pris</div>
                        <div>{originalPrice}</div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>Rabatt</div>
                        <div>{discount}</div>
                    </div>
                </>
            )}
            {deliveryPrice >= 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>Frakt</div>
                    <div>
                        {deliveryPrice > 0 && <span>{`${deliveryPrice}:-`}</span>}
                        {deliveryPrice === 0 && <span>Gratis</span>}
                    </div>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>Totalsumma</div>
                <div>{total}</div>
            </div>
        </StyledCartTotal>
    );
};

export default CartTotal;
