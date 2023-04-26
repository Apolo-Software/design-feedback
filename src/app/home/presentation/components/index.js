/* File for export all components in one file */

/*
######### TS EXAMPLE ##########

export * from './categories/Categories.jsx';
export * from './footer/Footer.jsx';
export * from './header/Header.jsx';
export * from './promotions/Promotions.jsx';

###########################

*/

import Categories from './categories/Categories';
import HomeFooter from './home-footer/HomeFooter';
import HomeHeader from './home-header/HomeHeader';
import Promotions from './promotions/Promotions';

export { Categories, HomeFooter, HomeHeader, Promotions }
