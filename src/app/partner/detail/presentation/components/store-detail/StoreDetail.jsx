import React from 'react';

/* Apolo Libraries, Modules & Components */
import './StoreDetail.css';

/* External Libraries */
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MapIcon from '@mui/icons-material/Map';
import Popover from '@mui/material/Popover';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

/* Custom styles */

const MyButton = styled(Button)`
  width: 55px;
  height: 55px;
  color: #424CA8;
  margin: 4px;
  border-radius: 15px;
  background-color: #cbe6ee;
  :hover{
    background-color: #addbe8;
  }
`;


const Person = styled(DirectionsWalkIcon)` 
  width: 100%;
  font-size: 45px;
  color: #424CA8;
`;

const Clock = styled(AccessTimeIcon)` 
  width: 100%;
  font-size: 45px;
  color: #424CA8;
`;

const Map = styled(MapIcon)` 
  width: 100%;
  font-size: 45px;
  color: #424CA8;
`;


const StoreDetail = ({ partner }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <div>
        {partner.length > 0
          ? <div className='detail-container'>
            <MyButton variant="contained" onClick={handleClick}>
              <Map />
            </MyButton>
            <div className='distance'>
              <MyButton variant="contained">
                <Person />
              </MyButton>
              <div className='distance-text'>
                {/* Llamar a una función que calcule la distancia entre la ubicación actual y la del local, hay que guardar coordenadas del local que sean comparables con las coordenadas que devuelva el navegador */}
                <div className='mins'>
                  10 min
                </div>
                <div className='meters'>
                  1200 mts
                </div>
              </div>
            </div>
            <div className='schedule'>
              <MyButton variant="contained">
                <Clock />
              </MyButton>
              <div className='schedule-text'>
                {/* Llamar a una función que calcule la distancia entre la ubicación actual y la del local, hay que guardar coordenadas del local que sean comparables con las coordenadas que devuelva el navegador */}
                <div className='schedule-first-line'>
                  lunes a viernes: 11:30 a 18:00
                </div>
                <div className='schedule-second-line'>
                  sábado: 08:00 a 20:00
                </div>
              </div>
            </div>


            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <>{partner[0].direction}</>
            </Popover>
          </div>
          : <>No se seleccionó ningun partner</>
        }
      </div>
    </div>
  );
};

export default StoreDetail;