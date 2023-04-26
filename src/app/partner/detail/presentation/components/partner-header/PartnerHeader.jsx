import React from 'react';

/* Apolo Libraries, Modules & Components */
import './PartnerHeader.css';

/* External Libraries */
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Star from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


/* Custom styles */

const MyStar = styled(Star)`

  color: #424CA8;
  
`;


const PartnerHeader = ({ partner }) => {
  const navigate = useNavigate();
  const p = partner[0];
  return (
    <div className='header-container' style={{
      backgroundImage: `url("${p.img}")`,
      borderRadius: '25px',
      height: '310px',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      backgroundSize: 'cover'
    }}>
      <div >
        <button className='back-button' onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </button>
      </div>
      <div className='store-container'>
        <div className='store-box'>
          <div className='store-info-box'>
            <div className='store-calification-box'>
              <div>
                <Rating className='store-calification' icon={<MyStar />} name="half-rating-read" defaultValue={p.calification} precision={0.5} />
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



    </div>

  );
};

export default PartnerHeader;