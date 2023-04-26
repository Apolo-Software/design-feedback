import React from 'react';

/* Apolo Libraries, Modules & Components */
import './Categories.css'

/* External Libraries */
import { Link } from "react-router-dom";

const Categories = () => {

  const categories = [
    {
      title: "Peluquería",
      img: 'images/categories/peluquerias.png',
      route: "peluquerias"
    },
    {
      title: "Uñas",
      img: 'images/categories/nails.png',
      route: "nails"
    },
    {
      title: "Aparatología",
      img: 'images/categories/aparatologia.png',
      route: "aparatologia"
    },
    {
      title: "Depilación",
      img: 'images/categories/depilacion.png',
      route: "depilacion"
    },
    {
      title: "Masajes",
      img: 'images/categories/masajes.png',
      route: "masajes"
    },
    {
      title: "Barberías",
      img: 'images/categories/barbas.png',
      route: "barberias"
    }
  ]

  return (
    <div className='box-container'>
      <div className='categories-title'>
        <h3>Categorías populares</h3>
      </div>
      <div className='categories-container'>
        {
          categories.map((c, i) => {
            return (
              <div key={i} className='categorie-box'>
                <Link to={`/partner-list/${c.route}`} style={{ textDecoration: 'none' }}>
                  <div className='categorie-image-box'>
                    <img className='categorie-image' src={c.img} alt={`imagen ${i + 1}`} width='100px' />
                  </div>
                  <div className='categorie-title-box'>
                    <h3 className='categorie-title'>{c.title}</h3>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Categories;