import Postal from '../Postal/index.tsx';
import CartProducts from '../Cart/CartProducts';
import CartTotal from '../Cart/CartTotal';
import Delivery from '../Delivery/index.tsx';
import React from 'react';
import Logo from '../Logo/Logo.tsx';
import { AppProvider } from '../Context/index.tsx';
import StyledContainer from '../StyledComponents/StyledContainer.styled.tsx';
import CheckoutButton from '../CheckoutButton/index.tsx';

const App: React.FC = (serverResponse) => {
    console.log(serverResponse);

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

export async function getServerSideProps() {
    // Fetch initial data from an API, database, or any other source.
    const response = await fetch('/api/');
    const data = await response.json();

    // Return the initial data as props
    return {
        props: {
            initialData: data,
        },
    };
}

export default App;
