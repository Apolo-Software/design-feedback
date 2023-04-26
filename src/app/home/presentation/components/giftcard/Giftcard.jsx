import React from 'react';

/* External Libraries */
import { useNavigate } from "react-router-dom";


const Giftcard = () => {
  const navigate = useNavigate();
  return (
    <div>
       <button onClick={() => navigate(-1)}>
          Volver atras
        </button>
      Giftcard
    </div>
  );
};

export default Giftcard;