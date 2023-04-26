/* Apolo Libraries, Modules & Components */
import './App.css';

import { categoriesRoutes, partnersRoutes, productsRoutes } from './api-information/routes';

import Home from './home/Home';
import PartnerList from './partner/list/PartnerList';
import PartnerDetail from './partner/detail/PartnerDetail';
import ProductDetail from './product-detail/ProductDetail';
import Checkout from './checkout/Checkout';
import Agenda from './home/presentation/components/agenda/Agenda';
import Giftcard from './home/presentation/components/giftcard/Giftcard';

/* External Libraries */
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <div className="App App-header">
      <Routes>
        <Route index element={<Home />} />
        {
          categoriesRoutes.map((cr, i) => {
            console.log(cr)
            return (
              <Route key={i} path={`partner-list/${cr.id}`} element={<PartnerList categorieSelected={cr.id} />} />
            )
          })
        }
        {
          partnersRoutes.map((pr, i) => {
            return (
              <Route key={i} path={`partner-detail/${pr.id}`} element={<PartnerDetail partnerSelected={pr.id} />} />
            )
          })
        }
        {
          productsRoutes.map((p, i) => {
            return (
              <Route key={i} path={`product-detail/${p.id}`} element={<ProductDetail productSelected={p.id} />} />
            )
          })
        }
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="view-agenda" element={<Agenda />} />
        <Route path="view-giftcard" element={<Giftcard />} />
      </Routes>
    </div>
  );
}



