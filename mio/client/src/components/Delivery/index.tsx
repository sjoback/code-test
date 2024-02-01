import React, { useCallback, useMemo } from 'react';

const Delivery = ({
  cart,
  onSelectDelivery,
  options,
}) => {
  if (!options){
    return null;
  }

  const cartValue = cart?.products?.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <>
      Välj leveranssätt
      <div style={{ maxWidth: '400px'}}>
        {options.map((option) => (
          <Deliveryoption
            {...option}
            key={option.id}
            onSelect={onSelectDelivery}
            selected={cart.delivery === option.id}
            cartValue={cartValue}
          />
        ))}
      </div>
    </>
  )
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

const Deliveryoption = ({
  cartValue,
  freeThreshold,
  id,
  name,
  onSelect,
  price,
  selected,
}) => {
  const handleClick = useCallback(() => {
    onSelect(id);
  }, [id, onSelect]);

  const style = useMemo(() => optionStyle(selected), [selected]);

  return (
    <div style={style} onClick={handleClick}>
      <div>
        {name}
      </div>
      <div>
        {cartValue > freeThreshold && (
          <span>Gratis</span>
        )}

        {cartValue <= freeThreshold && (
          <span>{`${price}:-`}</span>
        )}
      </div>
    </div>
  );
}