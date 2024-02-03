import React, { useCallback, useMemo } from 'react';
import { useAppContext } from '../Context/index.tsx';
import StyledContainer from '../StyledComponents/StyledContainer.styled.tsx';

const Delivery: React.FC = () => {
    const { cart, setDelivery, deliveryOptions } = useAppContext();

    if (!deliveryOptions || !cart) return null;

    const cartValue = cart.products.reduce((acc, p) => acc + p.price * p.quantity, 0);

    return (
        <>
            <StyledContainer>
                Välj leveranssätt
                <div style={{ maxWidth: '400px' }}>
                    {deliveryOptions.map((option) => (
                        <Deliveryoption
                            {...option}
                            key={option.id}
                            onSelect={setDelivery}
                            selected={cart.delivery === option.id}
                            cartValue={cartValue}
                        />
                    ))}
                </div>
            </StyledContainer>
        </>
    );
};

export default Delivery;

const optionStyle = (selected) => ({
    border: '1px solid gray',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    padding: '8px',
    backgroundColor: selected ? '#f0f0f0' : 'inherit',
});
// TODO: Model
const Deliveryoption: React.FC<any> = ({ cartValue, freeThreshold, id, name, onSelect, price, selected }) => {
    const handleClick = useCallback(() => {
        onSelect(id);
    }, [id, onSelect]);

    const style = useMemo(() => optionStyle(selected), [selected]);

    return (
        <div
            style={style}
            onClick={handleClick}
        >
            <div>{name}</div>
            <div>
                {cartValue > freeThreshold && <span>Gratis</span>}

                {cartValue <= freeThreshold && <span>{`${price}:-`}</span>}
            </div>
        </div>
    );
};
