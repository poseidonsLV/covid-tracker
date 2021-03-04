import React, { useState } from "react";
import "../styles/Circle.css";
import CountryInfo from "./CountryInfo";

function Circle({ lat, lng, countryData, countryName }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [country, setCountry] = useState([]);
  function moreInfoHandler() {
    if (!showMoreInfo) {
      setShowMoreInfo(!showMoreInfo);
      setCountry(countryData.filter((item) => item.country === countryName));
    } else {
      setShowMoreInfo(!showMoreInfo);
    }
  }

  return (
    <div onClick={moreInfoHandler} className="circle">
      {showMoreInfo && <CountryInfo countryData={country} />}
    </div>
  );
}

export default Circle;
