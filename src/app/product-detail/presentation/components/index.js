/* File for export all components in one file */

/*
######### TS EXAMPLE ##########

export * from './categories/Categories.jsx';
export * from './footer/Footer.jsx';
export * from './header/Header.jsx';
export * from './promotions/Promotions.jsx';

###########################

*/


import ProductFooter from './product-footer/ProductFooter';
import ProductHeader from './product-header/ProductHeader';
import Calendar from './calendar/Calendar';
import ServiceDetail from './service-detail/ServiceDetail';
import StorePaymentsMethods from './store-payments-methods/StorePaymentsMethods';


export { ProductFooter, ProductHeader, Calendar, ServiceDetail, StorePaymentsMethods }
