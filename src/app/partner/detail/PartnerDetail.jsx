import React from 'react';

/* Apolo Libraries, Modules & Components */
import { PartnerHeader, PartnerDetailTags, StoreDetail, PartnerServices } from './presentation/components/index';
import partners from '../../api-information/partners';


const PartnerDetail = ({ partnerSelected }) => {
  const partner = partners.filter(p => p.route === partnerSelected);
  return (
    <div>
      <PartnerHeader partner={partner} />
      <StoreDetail partner={partner} />
      <PartnerDetailTags />
      <PartnerServices partner={partner} />
    </div>
  );
};

export default PartnerDetail;