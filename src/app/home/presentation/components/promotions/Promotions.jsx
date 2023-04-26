import React from 'react';

/* Apolo Libraries, Modules & Components */
import './Promotions.css'
import PromotionsCarousel from './promotion-carousel/PromotionsCarousel'

/* External Libraries */


const Promotions = () => {
  return (
    <div>
      <div className='promotions-title'>
        <h3>Promociones</h3>
      </div>
      <PromotionsCarousel />
      
    </div>
  );
};

export default Promotions;