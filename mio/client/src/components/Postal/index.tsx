import React, { useCallback, useState } from 'react';
import usePostal from '../../hooks/usePostal';

// const Postal = ({ defaultValue, updatePostal }) => {
const Postal: React.FC = () => {
    const { postal, setPostal } = usePostal();
    // const [postal, setPostal] = useState(postal || '');

    const handleChange = useCallback((e) => {
        setPostal(e.target.value.replace(/[^0-9]/, ''));
    }, []);

    const handleSubmit = useCallback(() => {
        setPostal(postal);
    }, [postal, setPostal]);

    return (
        <div>
            <label htmlFor="postal">
                Postnummer:
                <input type="text" value={postal} onChange={handleChange} id="postal" name="postal" />
            </label>
            <button onClick={handleSubmit}>Uppdatera</button>
        </div>
    );
};

export default Postal;
