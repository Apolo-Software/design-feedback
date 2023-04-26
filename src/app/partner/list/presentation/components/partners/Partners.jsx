import React from 'react';


/* Apolo Libraries, Modules & Components */
import partners from '../../../../../api-information/partners';
import './Partners.css'

/* External Libraries */
import { Link } from "react-router-dom";

const Partners = ({ categorieSelected }) => {

  return (
    <div>
      <div className='partners-container'>
        {
          partners.filter((p) => p.categorie === categorieSelected).map((p, i) => {
            return (
              <Link to={`/partner-detail/${p.route}`} style={{ textDecoration: 'none', marginBottom: '5px' }}>
                <div key={i} className='partner-box'>
                  <div className='partner-image-box'>
                    <img className='partner-image' src={`${p.img}`} alt={`imagen ${i + 1}`} width='100px' />
                  </div>
                  <div className='partner-info-box'>
                    <div>
                      <div className='partner-title-box'>
                        <h3 className='partner-title'>{p.title}</h3>
                      </div>
                      <div className='partner-direction-box'>
                        <h3 className='partner-direction'>{p.direction}</h3>
                      </div>
                      <div className='partner-status-box'>
                        <h3 className='partner-status'>{p.status.text}</h3>
                      </div>
                    </div>
                    <div className='partner-payments-box'>
                      {
                        p.payments.map((mp) => {
                          return (
                            <img className='partner-payment' src={mp.logo} alt={`${mp.name}`} />
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default Partners;