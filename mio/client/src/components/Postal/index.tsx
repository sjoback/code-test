import React, { useCallback, useState } from 'react';
import { useAppContext } from '../Context';
import usePostal from '../../hooks/usePostal';
import StyledContainer from '../StyledComponents/StyledContainer.styled';

const Postal: React.FC = () => {
    const { setPostal, postal } = usePostal();
    const { setContextPostal } = useAppContext();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPostal(e.target.value.replace(/[^0-9]/, '')), []);
    const handleSubmit = useCallback(() => setContextPostal(postal), [postal, setContextPostal]);
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && postal.length == 5) setContextPostal(postal), [postal, setContextPostal];
    };

    const formatPostalCode = (postal: string) => {
        const formattedPostal = postal.replace(/(\d{3})(\d{2})/, '$1 $2');
        return formattedPostal;
    };

    return (
        <StyledContainer>
            <label htmlFor="postal">
                Postnummer
                <br />
                <input
                    type="text"
                    value={formatPostalCode(postal)}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    id="postal"
                    name="postal"
                    maxLength={5}
                />
            </label>

            <button
                onClick={handleSubmit}
                disabled={postal.length == 5 ? false : true}
            >
                Uppdatera
            </button>
        </StyledContainer>
    );
};

export default Postal;
