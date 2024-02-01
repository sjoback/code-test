import { useState } from "react";

export default () => {
  const [postal, setPostal] = useState('');

  return {
    postal,
    setPostal,
  };
};
