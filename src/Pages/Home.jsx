import React, { useState } from "react";
import "../styles/Home.css";
import HeaderInfo from "../components/HeaderInfo";
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
          <div className="header__container">
            <div className={`innerOneContainer ${boxClicked ? "blurred" : ""}`}>
              <HeaderInfo />
            </div>
          </div>
          <HeaderBigBox onBoxClick={handleBoxClick} />
      </div>
    </>
  );
};

export default Home;
