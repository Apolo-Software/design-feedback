import React from 'react';
import { CheckoutHeader, CheckoutFooter, CheckoutServiceDetail, CheckoutPaymentsMethod, BookingDetail, BookingReminder } from './presentation/components/index'
const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutHeader />
      <CheckoutServiceDetail />
      <BookingDetail />
      <BookingReminder />
      <CheckoutPaymentsMethod />
      <CheckoutFooter />
    </div>
  );
};

export default Checkout;