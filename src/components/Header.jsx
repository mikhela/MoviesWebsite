import React, { useState } from 'react';
import "../styles/header.css";
import nowayVideo from "../assets/noway.mp4";
import migrationVideo from "../assets/migration.mp4";

const Header = () => {
  const [videoSrc, setVideoSrc] = useState(nowayVideo);

  const handleVideoEnded = () => {
    setVideoSrc(migrationVideo);
  };

  return (
    <div className="header">
      <video src={videoSrc} className="innerHeader" autoPlay muted loop onEnded={handleVideoEnded} />
    </div>
  );
};

export default Header;
