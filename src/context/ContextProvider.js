import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';


function ContextProvider({ children }) {
  const [data, setData] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);

  // const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
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
