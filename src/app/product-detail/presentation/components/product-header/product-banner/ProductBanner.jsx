import React from 'react';

/* External Libraries */
import { useNavigate } from "react-router-dom";


const ProductBanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Product Banner</h3>
      <button onClick={() => navigate(-1)}>
        {/* <Link to="/partner-detail">{'<-- Go Back to Partner Detail'}</Link> */}
        Volver atras
      </button>
    </div>
  );
};

export default ProductBanner;