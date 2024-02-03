import React from 'react';
import StyledLogo from './Logo.styled';

const Logo: React.FC = () => {
    return (
        <StyledLogo>
            <img
                src="https://www.mcdn.net/resources/shipping/MIO_STORE_PICKUP_66363011-6e1b-4494-834e-b236e1dd45d7.svg"
                alt="Mio!"
                loading="eager"
            />
        </StyledLogo>
    );
};

export default Logo;
