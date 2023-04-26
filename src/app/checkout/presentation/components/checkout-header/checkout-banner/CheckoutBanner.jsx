import React from 'react';

/* External Libraries */
import { useNavigate } from "react-router-dom";


const CheckoutBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Checkout Banner</h3>
      <button onClick={() => navigate(-1)}>
        {/* <Link to="/product-detail">{'<-- Go Back to Product Detail'}</Link> */}
        Volver atras
      </button>
    </div>
  );
};

export default CheckoutBanner;