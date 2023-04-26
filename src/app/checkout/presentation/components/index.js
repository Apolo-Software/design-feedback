/* File for export all components in one file */

/*
######### TS EXAMPLE ##########

export * from './categories/Categories.jsx';
export * from './footer/Footer.jsx';
export * from './header/Header.jsx';
export * from './promotions/Promotions.jsx';

###########################

*/


import CheckoutFooter from './chekout-footer/CheckoutFooter';
import CheckoutHeader from './checkout-header/CheckoutHeader';
import CheckoutServiceDetail from './checkout-service-detail/CheckoutServiceDetail';
import CheckoutPaymentsMethod from './checkout-payments-method/CheckoutPaymentsMethod';
import BookingDetail from './booking-detail/BookingDetail';
import BookingReminder from './booking-reminder/BookingReminder';


export { CheckoutFooter, CheckoutHeader, CheckoutServiceDetail, CheckoutPaymentsMethod, BookingDetail, BookingReminder }
