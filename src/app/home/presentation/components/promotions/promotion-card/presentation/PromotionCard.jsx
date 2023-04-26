import * as React from 'react';

/* External Libraries */
import { Link } from "react-router-dom";

/* Talika's Libraries */

import './PromotionCard.css';

export default function PromotionCard({ item }) {
  return (
    <div className='promotion-container' style={{
      backgroundImage: `url("${item.img}")`,
      borderRadius: '25px',
      height: '310px',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      backgroundSize: 'cover'
    }}>
      <Link to={`/product-detail/${item.route}`} style={{ textDecoration: 'none' }}>
        <div className='promotion-box'>
          <div className='discount-box'>
            <div className='discount-percentage'>{item.discount} off</div>
          </div>
          <div className='info-box'>
            <div className='title'>{item.title}</div>
            <div className='button'>Ver</div>
          </div>
        </div>
      </Link>
    </div>
  );
}