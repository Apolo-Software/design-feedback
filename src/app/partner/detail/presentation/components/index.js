/* File for export all components in one file */

/*
######### TS EXAMPLE ##########

export * from './categories/Categories.jsx';
export * from './footer/Footer.jsx';
export * from './header/Header.jsx';
export * from './promotions/Promotions.jsx';

###########################

*/

import PartnerHeader from "./partner-header/PartnerHeader";
import PartnerDetailTags from "./partner-detail-tags/PartnerDetailTags";
import StoreDetail from "./store-detail/StoreDetail";
import PartnerServices from "./partner-services/PartnerServices";

export { PartnerHeader, PartnerDetailTags, StoreDetail, PartnerServices }
