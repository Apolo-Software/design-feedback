import React from 'react';

/* Apolo Libraries, Modules & Components */
import './PartnerServices.css';


/* External Libraries */
import { Link } from "react-router-dom";


const PartnerServices = ({ partner }) => {
  const services = partner[0].services;
  return (
    <div className='services-container'>
      {
        services.map((s, i) => {
          return (
            <Link to={`/product-detail/${s.route}`} style={{ textDecoration: 'none', marginBottom: '2px' }}>
              <div key={i} className='service-box'>
                <div className='service-info-box'>
                  <div>
                    <div className='service-title-box'>
                      <h3 className='service-title'>{s.title}</h3>
                    </div>
                    <div className='service-subtitle-box'>
                      <h3 className='service-subtitle'>{s.subtitle}</h3>
                    </div>
                  </div>
                </div>
                <div className='service-prize-box'>
                  <h3 className='service-prize'>{s.prize}</h3>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>







  );
};

export default PartnerServices;