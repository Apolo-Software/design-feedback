import React from 'react';

/* Apolo Libraries, Modules & Components */
import './Tag.css'

/* External Libraries */
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import SellIcon from '@mui/icons-material/Sell';


/* Custom styles */

const MyTag = styled(Chip)`
font-weight: bold;
padding: 5px;
margin: 3px;
max-width: 180px;
height: 30px;
font-size: 10px;
color: #424CA8;
background-color: #cbe6ee;
`;
const Sell = styled(SellIcon)`
  width: 15px;
  color: #424CA8;
`;

const Tag = ({ tagsList }) => {
  return (
    <div className='tags-container'>
      {
        tagsList.map((t, i) => {
          return (
            <MyTag
              key={i}
              label={t.name}
              icon={<Sell />}
            />
          )
        })
      }

    </div>
  );
};

export default Tag;