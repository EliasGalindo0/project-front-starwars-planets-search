import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterPlanet() {
  const { setFilterName } = useContext(StarWarsContext);
  return (
    <div className="search-container">
      <p>Search Planet</p>
      <input
        type="text"
        name="filter-name"
        id="filter"
        onChange={ ({ target }) => setFilterName({ name: target.value }) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default FilterPlanet;
