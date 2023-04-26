import React from 'react';

/* External Libraries */
import { Link } from "react-router-dom";

const ProductFooter = () => {
  return (
    <div>
      <h3>ProductFooter</h3>
      <button>
        <Link to="/checkout">Checkout</Link>
      </button>
    </div>
  );
};

export default ProductFooter; 