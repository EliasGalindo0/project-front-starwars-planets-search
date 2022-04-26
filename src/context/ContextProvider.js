import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => {
        setPlanets(result.results);
      });
  }, []);

  const contextValue = { planets };

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
