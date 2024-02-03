import Postal from '../Postal/index.tsx';
import CartProducts from '../Cart/CartProducts';
import CartTotal from '../Cart/CartTotal';
import Delivery from '../Delivery/index.tsx';
import React from 'react';
import Logo from '../Logo/Logo.tsx';
import { AppProvider } from '../Context/index.tsx';
import StyledContainer from '../StyledComponents/StyledContainer.styled.tsx';
import CheckoutButton from '../CheckoutButton/index.tsx';

const App: React.FC = () => {
    return (
        <AppProvider>
            <>
                <Logo />

                <CartProducts />

                <Postal />

                <Delivery />

                <StyledContainer>
                    <CartTotal />
                </StyledContainer>

                <CheckoutButton />
            </>
        </AppProvider>
    );
};

export default App;
