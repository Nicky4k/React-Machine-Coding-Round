import React from "react";

const CountriesTabView = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <figure
          key={country.alpha3Code}
          className="CountriesTabView__figure not__selectable"
        >
          <figure>
            <img
              className="CountriesTabView__imageFlag"
              src={country.flag}
              alt={country.name}
            />
          </figure>
          <div className="CountriesTabView__body">
            <div>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
            </div>
            <article>
              <h4>
                {country.area} km
                <sup className="superscript__text">2</sup>
              </h4>
              <h4>{country.languages[0].nativeName}</h4>
            </article>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default CountriesTabView;
