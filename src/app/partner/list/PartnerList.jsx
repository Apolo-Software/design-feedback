import React from 'react';

/* Apolo Libraries, Modules & Components */
import './PartnerList.css';

import { PartnerListTags, Partners, PromotionsPartner, PartnerListHeader } from './presentation/components/index'

const PartnerList = ({ categorieSelected }) => {
  return (
    <div className='partnerList-container'>
      <PartnerListHeader />
      <PromotionsPartner />
      <PartnerListTags />
      <Partners categorieSelected={categorieSelected} />
    </div>
  );
};

export default PartnerList;