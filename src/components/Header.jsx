import React from 'react';
import "../styles/header.css";
import HeaderCard from './HeaderCard';
import HeaderCarousel from './HeaderCarousel';
import HeaderInfo from './HeaderInfo';
import ErrorBoundary from './ErrorBoundary';
import '../styles/headerResponsive.css';

const Header = () => {
  return (
    <ErrorBoundary>
      <HeaderInfo />
      <HeaderCarousel />
    </ErrorBoundary>
  );
};

export default Header;
