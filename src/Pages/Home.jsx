import React, { useState } from "react";
import "../styles/Home.css";
import ErrorBoundary from "../components/ErrorBoundary";
import HeaderInfo from "../components/HeaderInfo";
import HeaderCarousel from "../components/HeaderCarousel";
import HeaderBigBox from "../components/HeaderBigBox";
import "../styles/HeaderResponsive.css";

const Home = () => {
  const [boxClicked, setBoxClicked] = useState(false);

  const handleBoxClick = (clicked) => {
    setBoxClicked(clicked);
  };
  return (
    <>
      <div className="header">
        <ErrorBoundary>
          <div className="header__container">
            <div className={`innerOneContainer ${boxClicked ? "blurred" : ""}`}>
              <HeaderInfo />
            </div>
          </div>
          <HeaderBigBox onBoxClick={handleBoxClick} />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Home;
