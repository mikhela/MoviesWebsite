import React, { useState } from 'react';
import "../styles/header.css";
import HeaderAbMovieInfo from './HeaderAbMovieInfo';
import HeaderAbMovieCarousel from './HeaderAbMovieCarousel';
import HeaderCard from './HeaderCard';


const Header = () => {


  return (
    <div className="header">
      <HeaderCard />
    </div>
  );
};

export default Header;
