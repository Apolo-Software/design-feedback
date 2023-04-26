import React from 'react';
import { ProductHeader, ProductFooter, ServiceDetail, Calendar, StorePaymentsMethods } from './presentation/components/index'
const ProductDetail = () => {
  return (
    <div>
      <h2>Produt Detail</h2>
      <ProductHeader />
      <ServiceDetail />
      <Calendar />
      <StorePaymentsMethods />
      <ProductFooter />
    </div>
  );
};

export default ProductDetail;