import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterByname, setFilterName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filter = planets.filter((planet) => (
      planet.name.includes(filterByname.name)
    ));
    setData(filter);
  }, [filterByname, planets]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => {
        setPlanets(result.results);
        setData(result.results);
      });
  }, []);

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((actualFilter, index) => {
        const { column, comparison, value } = actualFilter;
        const array = index === 0 ? planets : data;
        const filtro = array.filter((planet) => {
          if (comparison === 'menor que') {
            return Number(planet[column]) < Number(value);
          }
          if (comparison === 'maior que') {
            return Number(planet[column]) > Number(value);
          }
          return Number(planet[column]) === Number(value);
        });
        setData(filtro);
      });
    }
  }, [filterByNumericValues, data, planets]);

  const contextValue = {
    data,
    planets,
    setFilterName,
    filterByNumericValues,
    setfilterByNumericValues };

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
