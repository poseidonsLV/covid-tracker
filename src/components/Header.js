import "../styles/Header.css";
import { useLocation, useHistory } from "react-router-dom";

function Header() {
  const location = useLocation();
  const history = useHistory();
  const pathname = location.pathname;

  function handleButton() {
    if (pathname === "/") {
      history.push("/compare");
    } else {
      history.push("/");
    }
  }

  return (
    <div className="Header">
      <h1>
        COVID-19 Code by Poseidons Design Idea by{" "}
        <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">
          arcgis.com
        </a>
      </h1>
      {pathname === "/compare" ? (
        <button onClick={handleButton} className="header-btn">
          Back
        </button>
      ) : (
        <button className="header-btn" onClick={handleButton}>
          Compare
        </button>
      )}
    </div>
  );
}

export default Header;
