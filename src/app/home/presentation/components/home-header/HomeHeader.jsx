/* Native Libraries of React */
import React from 'react';

/* Apolo Libraries, Modules & Components */
import './HomeHeader.css';

/* External Libraries */
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
width: 130px;
height: 50px;
border-radius: 12px;
font-size: 14px;
color: #424CA8;
background-color: #cbe6ee;
text-transform: capitalize;
margin-right: 20px;

:hover{
  background-color: #cbe6ee;
  }

`;


/* Principal component */

const HomeHeader = () => {
  return (
    <div>

      <div className='logo-and-near'>
        <img className='logo' src='images/logo.png' alt='logo-talika' />
        <Near startIcon={<LocationOnIcon />}>
          Montevideo
        </Near>
      </div>
      <div className='home-header-container'>
        <Search>
          <Text
            placeholder="Buscar local o tratamiento ..."
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchIcon className='lens' />
        </Search>
      </div>
    </div>
  );
};

export default HomeHeader;