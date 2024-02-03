import React from 'react';
import { useAppContext } from '../Context';
import StyledContainer from '../StyledComponents/StyledContainer.styled';

const CheckoutButton: React.FC = () => {
    const { cart, postal } = useAppContext();

    return (
        <StyledContainer>
            <button disabled={!postal || !cart?.delivery}>Fortsätt</button>
        </StyledContainer>
    );
};

export default CheckoutButton;
