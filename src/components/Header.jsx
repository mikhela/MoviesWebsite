import React from 'react';
import "../styles/header.css";
import HeaderCard from './HeaderCard';
import HeaderFetch from './HeaderFetch';
import HeaderCarousel from './HeaderCarousel';
import HeaderInfo from './HeaderInfo';

const Header = () => {
  return (
    <div className="header">
     <HeaderFetch>
      {movies => <HeaderCarousel movies={movies} />} {/* Make sure you pass movies as a prop */}
    </HeaderFetch>
    </div>
  );
};

export default Header;
