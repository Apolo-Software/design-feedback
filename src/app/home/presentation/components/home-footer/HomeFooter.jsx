import React from 'react';

/* Apolo Libraries, Modules & Components */
import './HomeFooter.css'

/* External Libraries */
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Link } from "react-router-dom";

/* Custom styles */

const Agenda = styled(Chip)`
font-weight: bold;
padding: 5px;
margin: 3px;
width: 180px;
height: 40px;
font-size: 17px;
border-radius: 10px;
color: #424CA8;
background-color: #cbe6ee;
`;

const Gift = styled(Chip)`
font-weight: bold;
padding: 5px;
margin: 3px;
width: 180px;
height: 40px;
font-size: 17px;
border-radius: 10px;
color: #424CA8;
background-color: #cbe6ee;
`;

const HomeFooter = () => {
  return (
    <div className='footer-container'>
      <div>
      <Link to={`/view-agenda`} style={{ textDecoration: 'none' }}>
        <Agenda
          label={'Ver agenda'}
          icon={<DateRangeIcon />}
        />
        </Link>
      </div>
      <div>
      <Link to={`/view-giftcard`} style={{ textDecoration: 'none' }}>
        <Gift
          label={'Giftcard'}
          icon={<CardGiftcardIcon />}
        />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter; 