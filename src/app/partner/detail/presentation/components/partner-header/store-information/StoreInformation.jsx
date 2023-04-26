import React from 'react';

/* Apolo Libraries, Modules & Components */
import './StoreInformation.css';

/* External libraries */
import Rating from '@mui/material/Rating';

const StoreInformation = ({ partner }) => {
  const p = partner[0];
  return (
    <div className='store-container'>
      <div className='store-box'>
        <div className='store-info-box'>
          <div className='store-calification-box'>
            <div>
              <Rating className='store-calification' name="half-rating-read" defaultValue={p.calification} precision={0.5} />
            </div>
          </div>
          <div>
            <div className='store-title-box'>
              <h3 className='store-title'>{p.title}</h3>
            </div>
            <div className='store-direction-box'>
              <h3 className='store-direction'>{p.direction}</h3>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default StoreInformation;