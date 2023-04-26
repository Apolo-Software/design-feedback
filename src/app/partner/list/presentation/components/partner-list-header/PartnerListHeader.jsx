import React from 'react';

/* Apolo Libraries, Modules & Components */
import './PartnerListHeader.css';

import logo from '../../../../../../images/logo.png'

/* External Libraries */
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


/* Custom styles */

const Search = styled('div')`
position: relative;
border-radius: 8px;
width: 320px;
margin-left:0;
padding: 8px;
background-color: #cbe6ee;
color: #272727;
display: flex;
align-items: center;
justify-content: center;
`;

const Text = styled(InputBase)`
width: 85%;
margin-left: 12px;
font-size: 16px;
display: flex;
justify-content: flex-start;
`;

const Near = styled(Button)`
width: 50px;
height: 50px;
border-radius: 12px;
font-size: 14px;
color: #424CA8;
background-color: #cbe6ee;
text-transform: capitalize;
margin-left: 10px;

:hover{
  background-color: #cbe6ee;
  }

`;

const PartnerListHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='partner-list-logo'>
        <img className='partner-list-logo-img' src={logo} alt='logo-talika' />
        <div className='back-button-box'>
          <button className='partner-list-back-button' onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon />
          </button>
        </div>
      </div>
      <div className='partnerList-header-container'>
        <Search>
          <Text
            placeholder="Buscar local o tratamiento ..."
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIcon className='partner-list-lens' />
        </Search>
        <Near><LocationOnIcon /></Near>
      </div>
    </div>
  );
};

export default PartnerListHeader;