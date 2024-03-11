import React from 'react';
import "../styles/header.css";
import HeaderCard from './HeaderCard';
import HeaderFetch from './HeaderFetch';
import HeaderCarousel from './HeaderCarousel';
import HeaderInfo from './HeaderInfo';
import ErrorBoundary from './ErrorBoundary';

const Header = () => {
  return (
    <ErrorBoundary>
    <HeaderFetch>
      {movies => <HeaderCarousel movies={movies} />}
    </HeaderFetch>
  </ErrorBoundary>
  );
};

export default Header;
