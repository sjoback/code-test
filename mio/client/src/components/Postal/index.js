import React, { useCallback, useState } from 'react';

const Postal = ({ defaultValue, updatePostal }) => {
  const [postal, setPostal] = useState(defaultValue || '');

  const handleChange = useCallback((e) => {
    setPostal(e.target.value.replace(/[^0-9]/, ''));
  }, []);

  const handleSubmit = useCallback(() => {
    updatePostal(postal);
  }, [postal, updatePostal]);

  return (
    <div>
      <label htmlFor="postal">
        Postnummer:
        <input
          type="text"
          value={postal}
          onChange={handleChange}
          id="postal"
          name="postal"
        />
      </label>
      <button onClick={handleSubmit}>
        Uppdatera
      </button>
    </div>
  );
};

export default Postal;
