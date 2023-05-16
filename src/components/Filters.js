import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [allowedFilters, setAllow] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      let newAllowed;
      filterByNumericValues.forEach((value) => {
        newAllowed = allowedFilters.filter((allow) => (
          value.column !== allow
        ));
      });
      setAllow(newAllowed);
    }
  }, [filterByNumericValues, allowedFilters]);

  function handleFilter(key, value) {
    setFilter({
      ...filter,
      [key]: value,
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="collum">
          <select
            name="collum"
            id="collum"
            data-testid="column-filter"
            value={ filter.column }
            onChange={ ({ target }) => handleFilter('column', target.value) }
          >
            {
              allowedFilters.length > 0
                && allowedFilters.map((allowFilter) => (
                  <option key={ allowFilter } value={ allowFilter }>{allowFilter}</option>
                ))
            }
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="operator">
          <select
            name="operator"
            id="operator"
            data-testid="comparison-filter"
            value={ filter.comparison }
            onChange={ ({ target }) => handleFilter('comparison', target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
      </div>
      <div>
        <input
          type="number"
          data-testid="value-filter"
          value={ filter.value }
          onChange={ ({ target }) => handleFilter('value', target.value) }
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            if (filterByNumericValues.length > 0) {
              setfilterByNumericValues([...filterByNumericValues, filter]);
            } else {
              setfilterByNumericValues([filter]);
            }
          } }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Filters;
