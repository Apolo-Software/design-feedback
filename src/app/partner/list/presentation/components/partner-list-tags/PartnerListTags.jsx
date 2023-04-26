import React from 'react';

/* Apolo Libraries, Modules & Components */
import './PartnerListTags.css'
import Tag from '../../../../../general-components/Tags/Tag';

/* External Libraries */


const PartnerListTags = () => {

  const tagsList = [
    {
      name: 'corte'
    },
    {
      name: 'peinado'
    },
    {
      name: 'coloracion'
    },
    {
      name: 'lavado'
    },
    {
      name: 'decoloracion'
    },
    {
      name: 'tratamientos'
    },
    {
      name: 'mercadopago'
    }
  ]

  return (
    <div className='tags-container'>
      <Tag tagsList={tagsList} />
    </div>
  );
};

export default PartnerListTags;