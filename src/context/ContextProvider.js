import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';


function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = 'https://parseapi.back4app.com/classes/SWAPI_Planet?count=1&limit=10';
    const headers = {
      'X-Parse-Application-Id': 'tsdFx2c3X5N2StrarHgbrWM1d0OgsBSvupJrubvT',
      'X-Parse-REST-API-Key': 'qbQ8mA70vg4XUJDhF8zZerqJSQs4Ol4rGlOagIy9'
    };
    fetch(url, {headers})
      .then((response) => response.json())
      .then((result) => {
        setPlanets(result.results);
        setData(result.results);
      });
  }, []);
    
  // useEffect(() => {
  //   if (filterByNumericValues.length > 0) {
  //     filterByNumericValues.forEach((actualFilter, index) => {
  //       const { column, comparison, value } = actualFilter;
  //       const array = index === 0 ? planets : data;
  //       const filtro = array.filter((planet) => {
  //         if (comparison === 'menor que') {
  //           return Number(planet[column]) < Number(value);
  //         }
  //         if (comparison === 'maior que') {
  //           return Number(planet[column]) > Number(value);
  //         }
  //         return Number(planet[column]) === Number(value);
  //       });
  //       setData(filtro);
  //     });
  //   }
  // }, [filterByNumericValues, data, planets]);

  const contextValue = {
    data,
    planets,
    setData,
    };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;
