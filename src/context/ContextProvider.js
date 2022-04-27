import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByname, setFilterName] = useState({ name: '' });
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => {
        setPlanets(result.results);
      });
  }, []);

  useEffect(() => {
    const filter = planets.filter((planet) => (
      planet.name.includes(filterByname.name)
    ));
    setPlanets(filter);
  }, [filterByname]);

  const contextValue = { planets, setFilterName };

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
