import React from 'react';

/* Apolo Libraries, Modules & Components */
import './ProductHeader.css';

/* External Libraries */
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


/* Custom styles */

const ProductHeader = ({ productSelected }) => {
  const navigate = useNavigate();
  const p = productSelected[0];
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
    </div>
  );
};

export default ProductHeader;