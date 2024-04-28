import { useState, useEffect, useRef } from "react";
import "../styles/HeaderBigBox.css";
import HeaderCarousel from "./HeaderCarousel";
import HeaderMoviesByGenres from "./HeaderMoviesByGenres";
const HeaderBigBox = ({ onBoxClick }) => {
    const [clicked, setClicked] = useState(false); // Typo is here

    const bigBoxRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
        onBoxClick(!clicked);
    };


    return (
        <div className="headerbigbox">
              <button className="btn"  onClick={handleClick}>M</button>
            <div ref={bigBoxRef} className={`HeaderBox ${clicked ? "big" : ""}`}>
                <HeaderMoviesByGenres /> 
            </div>
        </div>
    );
};
 
export default HeaderBigBox;
