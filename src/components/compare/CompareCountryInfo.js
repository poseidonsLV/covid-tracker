import React from "react";
import NumberFormat from "react-number-format";

function CompareCountryInfo(props) {
  const {
    country,
    population,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    tests,
    testsPerOneMillion,
    flag,
  } = props;
  return (
    <div className="compareCountryInfo">
      {(flag && (
        <img style={{ object: "contain", height: "100px" }} src={flag} />
      )) ||
        "Flag Undefined"}
      <p>
        <strong>Country: </strong> {country || "Undefined"}
      </p>
      <p>
        <strong>Population: </strong>{" "}
        {(population && (
          <NumberFormat
            value={population}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Cases: </strong>{" "}
        {(cases && (
          <NumberFormat
            value={cases}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Today Cases: </strong>{" "}
        {(todayCases && (
          <NumberFormat
            value={todayCases}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Deaths: </strong>{" "}
        {(deaths && (
          <NumberFormat
            value={deaths}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Today Deaths: </strong>{" "}
        {(todayDeaths && (
          <NumberFormat
            value={todayDeaths}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Recovered: </strong>{" "}
        {(recovered && (
          <NumberFormat
            value={recovered}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Today Recovered: </strong>{" "}
        {(todayRecovered && (
          <NumberFormat
            value={todayRecovered}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Tests: </strong>{" "}
        {(tests && (
          <NumberFormat
            value={tests}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
      <p>
        <strong>Tests Per One Million: </strong>
        {(testsPerOneMillion && (
          <NumberFormat
            value={testsPerOneMillion}
            displayType={"text"}
            thousandSeparator={true}
          />
        )) ||
          "Undefined"}
      </p>
    </div>
  );
}

export default CompareCountryInfo;
