import React from 'react';
import { Product } from '../../types/Product';
import { useAppContext } from '../Context';
import StyledCartProduct from './CartProduct.styled';
import StyledContainer from '../StyledComponents/StyledContainer.styled';
import { Cart } from '../../types/Cart';

const CartProducts: React.FC = () => {
    const { cart } = useAppContext();

    if (!cart) return null;

    return (
        <StyledContainer>
            {cart.products.map((product: Product) => (
                <CartProduct
                    {...product}
                    key={product.id}
                />
            ))}
        </StyledContainer>
    );
};

export default CartProducts;

const CartProduct = ({ id, name, price, originalPrice, imageUrl, quantity }) => {
    const { cart, setCart, setQuantity } = useAppContext();

    const handleQuantity = (newQuantity: number) => {
        if (newQuantity !== quantity) setQuantity(id, newQuantity);
    };

    const removeProduct = (productId: string) => {
        const newCart: Cart = {
            ...cart,
        };
        newCart.products = cart?.products.filter((product: Product) => product.id !== productId);
        setCart(newCart);
    };

    return (
        <StyledCartProduct>
            <div className="productImage">
                <img src={imageUrl} />
            </div>

            <div className="productInfo">
                <div className="name">{name}</div>

                <div className="quantity">
                    <button onClick={() => handleQuantity(quantity - 1)}>-</button>
                    <span>{`${quantity} st`}</span>
                    <button onClick={() => handleQuantity(quantity + 1)}>+</button>
                </div>

                <div className="price">
                    {originalPrice !== price && (
                        <span
                            className="price-old"
                            style={{}}
                        >{`${originalPrice}:-`}</span>
                    )}
                    <b>{`${price}:-`}</b>
                </div>

                <button onClick={() => removeProduct(id)}>
                    x<div className="tooltip">Remove product</div>
                </button>
            </div>
        </StyledCartProduct>
    );
};
