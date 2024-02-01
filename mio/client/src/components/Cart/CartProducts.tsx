import React, { useCallback, useEffect } from 'react';
import { Product } from '../../types/Product';
import { useAppContext } from '../Context';

interface CartProducts {
    // cart: { products: Product[] };
    // setQuantity: (id: string, quantity: number) => void;
}

// const CartProducts: React.FC<CartProducts> = ({ cart, setQuantity }) => {
const CartProducts: React.FC<CartProducts> = () => {
    const { cart } = useAppContext();
    if (!cart) return null;

    return (
        <div>
            {cart.products.map((product: Product) => (
                <CartProduct
                    {...product}
                    // setQuantity={setQuantity}
                    key={product.id}
                />
            ))}
        </div>
    );
};

export default CartProducts;

const CartProduct = ({
    id,
    name,
    price,
    originalPrice,
    imageUrl,
    quantity,
    // setQuantity,
}) => {
    const { setNewQuantity } = useAppContext();

    // const handleQuantity = useCallback(
    //     (newQuantity: number) => {
    //         // setQuantity(id, newQuantity);
    //         console.log(`Render ${name}`, newQuantity);
    //     },
    //     [id, quantity, setQuantity]
    // );

    const handleQuantity = (newQuantity: number) => {
        // Only call setQuantity if the quantity has changed
        if (newQuantity !== quantity) {
            setNewQuantity(id, newQuantity);
            // console.log(`Render ${name}`, newQuantity);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <div style={{ width: '78px', height: '78px' }}>
                <img src={imageUrl} style={{ width: '100%', maxHeight: '100%' }} />
            </div>
            <div
                style={{
                    marginLeft: '48px',
                    display: 'flex',
                    flex: '1 1 auto',
                }}
            >
                <div style={{ flex: '1 1 auto', marginRight: '16px' }}>{name}</div>
                <div style={{ flex: '0 0 144px' }}>
                    <button onClick={() => handleQuantity(quantity - 1)}>-</button>
                    <span style={{ margin: '16px' }}>{`${quantity} st`}</span>
                    <button onClick={() => handleQuantity(quantity + 1)}>+</button>
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        flexBasis: '100px',
                        alignItems: 'flex-end',
                    }}
                >
                    {originalPrice !== price && <span style={{ textDecoration: 'line-through' }}>{`${originalPrice}:-`}</span>}
                    {`${price}:-`}
                </div>
            </div>
        </div>
    );
};
