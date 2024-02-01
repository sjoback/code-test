import { useEffect, useState } from "react";

const CART_SERVICE_URL = 'http://localhost:8081/api/cart';

export default (cart, postal) => {
  const [response, setresponse] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!postal || !cart?.id) {
      setresponse(undefined);
    } else {
      fetch(`${CART_SERVICE_URL}/${cart.id}/delivery/${postal}`)
        .then((resp) => resp.json())
        .then(setOptions)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [cart?.id, postal]);

  return {
    options,
    loading,
  };
};
