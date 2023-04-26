/* File for export all components in one file */

/*
######### TS EXAMPLE ##########

export * from './categories/Categories.jsx';
export * from './footer/Footer.jsx';
export * from './header/Header.jsx';
export * from './promotions/Promotions.jsx';

###########################

*/

import PartnerListHeader from "./partner-list-header/PartnerListHeader"
import PartnerListTags from "./partner-list-tags/PartnerListTags"
import Partners from "./partners/Partners"
import PromotionsPartner from "./promotions-partner/PromotionsPartner"

export { Partners, PromotionsPartner, PartnerListHeader, PartnerListTags }
