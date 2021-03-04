import React from "react";
import "../styles/CountryInfo.css";
import close from "../images/close.png";
import NumberFormat from "react-number-format";

function CountryInfo({ countryData }) {
  return (
    <div className="country">
      {countryData.map((dataset) => (
        <div className="countryInfo">
          <p>
            <strong>Country:</strong> {dataset.country}
          </p>
          <p>
            <strong>Cases:</strong>{" "}
            <NumberFormat
              value={dataset.cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            <strong>Deaths:</strong>{" "}
            <NumberFormat
              value={dataset.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          <p>
            <strong>Recovered:</strong>{" "}
            <NumberFormat
              value={dataset.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>
          {countryData.some((item) => item) === true && (
            <div className="close">
              <img src={close} alt="X" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CountryInfo;
