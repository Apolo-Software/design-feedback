import React from 'react';
import { Categories, HomeFooter, HomeHeader, Promotions } from './presentation/components/index'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <HomeHeader />
      <Promotions />
      <Categories />
      <HomeFooter />
    </div>
  );
};

export default Home;