import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CountriesTabView from "./components/CountriesTabView";

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [countries, setCountries] = useState([]);
  const [pageBtn, setPageBtn] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      await axios
        .get(
          "https://restcountries.com/v2/all?fields=name,capital,currencies,area,flag,languages,alpha3Code"
        )
        .then((res) => {
          setCountries(res.data);
        });
    };
    fetchCountries();
  }, [countries]);

  useEffect(() => {
    function pageButtons() {
      setPageBtn(Math.ceil(countries.length / pageSize));
    }
    pageButtons();
  }, [countries.length, pageSize]);

  const paginationHandler = (e) => {
    if (e.target.nodeName === "P") setPageNumber(e.target.outerText);
  };

  const pageSizeHandler = (e) => {
    if (e.target.nodeName === "BUTTON") {
      setPageSize(e.target.outerText);
    }
  };

  return (
    <div className="App">
      <h3>
        <a href="https://restcountries.com/#rest-countries">
          🚀 Countries API with Axios & Pagination
        </a>
      </h3>
      <section>
        <CountriesTabView
          countries={countries.slice(
            (pageNumber - 1) * pageSize,
            pageNumber * pageSize
          )}
        />
      </section>
      <div className="pageResults__selector not__selectable">
        <div>
          <h4>Page: {pageNumber}</h4>
        </div>
        <div onClick={pageSizeHandler} className="btn__container">
          <h4>Results per page:</h4>
          <button
            style={{
              backgroundColor: +pageSize === 7 ? "rgb(149, 119, 196)" : "",
              color: +pageSize === 7 ? "black" : "",
            }}
            className="pageSizeSelect__btn"
          >
            7
          </button>
          <button
            style={{
              backgroundColor: +pageSize === 10 ? "rgb(149, 119, 196)" : "",
              color: +pageSize === 10 ? "black" : "",
            }}
            className="pageSizeSelect__btn"
          >
            10
          </button>
          <button
            style={{
              backgroundColor: +pageSize === 15 ? "rgb(149, 119, 196)" : "",
              color: +pageSize === 15 ? "black" : "",
            }}
            className="pageSizeSelect__btn"
          >
            15
          </button>
        </div>
      </div>
      <nav onClick={paginationHandler} className="not__selectable">
        {Array(pageBtn)
          .fill("p")
          .map((m, i) => {
            if (pageNumber < 7) {
              if (i < 7)
                return (
                  <p
                    style={{
                      backgroundColor:
                        pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                      color: pageNumber - 1 === i ? "black" : "",
                      fontSize: pageNumber - 1 === i ? "1.25rem" : "1rem",
                    }}
                    key={i}
                  >
                    {i + 1}
                  </p>
                );

              if (i + 1 === pageBtn) {
                return (
                  <>
                    <span>• • •</span>
                    <div className="padding__block"> </div>
                    <p
                      style={{
                        backgroundColor:
                          pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                        color: pageNumber - 1 === i ? "black" : "",
                      }}
                      key={i}
                    >
                      {i + 1}
                    </p>
                  </>
                );
              }
            }
            if (pageNumber > pageBtn - 6) {
              if (i > pageBtn - 8)
                return (
                  <p
                    style={{
                      backgroundColor:
                        pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                      color: pageNumber - 1 === i ? "black" : "",
                    }}
                    key={i}
                  >
                    {i + 1}
                  </p>
                );

              if (i === 0) {
                return (
                  <>
                    <p
                      style={{
                        backgroundColor:
                          pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                        color: pageNumber - 1 === i ? "black" : "",
                      }}
                      key={i}
                    >
                      {i + 1}
                    </p>
                    <div className="padding__block"> </div>
                    <span>• • •</span>
                  </>
                );
              }
            }

            if (pageNumber >= 7 && pageNumber <= pageBtn - 6) {
              if (i === 0) {
                return (
                  <>
                    <p
                      style={{
                        backgroundColor:
                          pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                        color: pageNumber - 1 === i ? "black" : "",
                      }}
                      key={i}
                    >
                      {i + 1}
                    </p>
                    <div className="padding__block"> </div>
                    <span>• • •</span>
                  </>
                );
              }
              if (i > pageNumber - 4 && i < pageNumber) {
                return (
                  <p
                    style={{
                      backgroundColor:
                        pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                      color: pageNumber - 1 === i ? "black" : "",
                    }}
                    key={i}
                  >
                    {i + 1}
                  </p>
                );
              }
              if (i >= pageNumber && i - 1 <= pageNumber) {
                return (
                  <p
                    style={{
                      backgroundColor:
                        pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                      color: pageNumber - 1 === i ? "black" : "",
                    }}
                    key={i}
                  >
                    {i + 1}
                  </p>
                );
              }
              if (i + 1 === pageBtn) {
                return (
                  <>
                    <span>• • •</span>
                    <div className="padding__block"> </div>
                    <p
                      style={{
                        backgroundColor:
                          pageNumber - 1 === i ? "rgb(149, 119, 196)" : "",
                        color: pageNumber - 1 === i ? "black" : "",
                      }}
                      key={i}
                    >
                      {i + 1}
                    </p>
                  </>
                );
              }
            }
          })}
        <div></div>
      </nav>
    </div>
  );
}

export default App;
