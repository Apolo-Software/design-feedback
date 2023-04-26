import React from 'react';

/* Apolo Libraries, Modules & Components */
import PromotionCard from '../promotion-card/presentation/PromotionCard';
import './PromotionsCarousel.css'

/* External Libraries */
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PromotionsCarousel(props) {
    var items = [
        {
            title: "Depilación",
            discount: "8%",
            img: "/images/promotions/depilacion.png",
            route: "depi"
        },
        {
            title: "Micro pigmentación",
            discount: "40%",
            img: "/images/promotions/tinta.jpg",
            route: "micro"
        }
        ,
        {
            title: "Uñas",
            discount: "25%",
            img: "/images/promotions/nails.png",
            route: "nails"
        }
    ]

    return (
        <Carousel 
        index={1} 
        NextIcon={<ArrowForwardIosIcon/>} 
        PrevIcon={<ArrowBackIosNewIcon/>} 
        stopAutoPlayOnHover={true} 
        autoPlay={true} 
        animation={'slide'}
        navButtonsAlwaysVisible={true}>
            {
                items.map((item, i) => <div className='card-box'><PromotionCard key={i} item={item} /></div>)
            }
        </Carousel>
    )
}