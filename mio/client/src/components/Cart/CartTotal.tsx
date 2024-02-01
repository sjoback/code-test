import React from 'react';

const CartTotal = ({ cart, deliveryOptions }) => {
    const { delivery, products } = cart || {};

    const originalPrice = products?.reduce(
        (acc, p) => acc + p.originalPrice * p.quantity,
        0
    );
    const totalProductPrice = products?.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
    );
    const discount = totalProductPrice - originalPrice;

    const deliveryOption = deliveryOptions?.find(
        ({ id }) => id === cart.delivery
    );
    const deliveryPrice = !deliveryOption
        ? -1
        : deliveryOption.freeThreshold < totalProductPrice
          ? 0
          : deliveryOption.price;

    const total =
        deliveryPrice < 0
            ? totalProductPrice
            : totalProductPrice + deliveryPrice;

    if (!products) {
        return null;
    }

    return (
        <div style={{ maxWidth: '400px' }}>
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
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div>Frakt</div>
                    <div>
                        {deliveryPrice > 0 && (
                            <span>{`${deliveryPrice}:-`}</span>
                        )}
                        {deliveryPrice === 0 && <span>Gratis</span>}
                    </div>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>Totalsumma</div>
                <div>{total}</div>
            </div>
        </div>
    );
};

export default CartTotal;
