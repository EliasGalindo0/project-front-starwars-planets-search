import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {data, setData, planets} = React.useContext(StarWarsContext);
  const [filterName, setFilterName] = React.useState([]);
  const [filterByNumericValues, setfilterByNumericValues] = React.useState([]);
  const [filter, setFilter] = React.useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [allowedFilters, setAllow] = React.useState([
    'population',
    'orbitalPeriod',
    'diameter',
    'rotationPeriod',
    'surfaceWater',
  ]);

  React.useEffect(() => {
      const results = data.filter((planet) => (
        planet.name.toLowerCase().includes(filterName) || planet.name.includes(filterName)
      ));
    setData(results);
  }, []);

  const filterByName = (event) => {;
  setFilterName(event.target.value);
  };

  // React.useEffect(() => {
  //   if (filterByNumericValues.length > 0) {
  //     let newAllowed;
  //     filterByNumericValues.forEach((value) => {
  //       newAllowed = allowedFilters.filter((allow) => (
  //         value.column !== allow
  //       ));
  //     });
  //     setAllow(newAllowed);
  //   }
  // }, [filterByNumericValues, allowedFilters]);

  const handleFilter = (column, value) => {
    setFilter({
      ...filter,
      [column]: value,
    });
  }

  const filterByValues = () => {
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
  }

  return (
    <section className='filters'>
      <input
        type="text"
        name="filter-name"
        placeholder='Search Planet...'
        id="filter"
        onChange={filterByName}
        data-testid="name-filter"
      />
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
        <label htmlFor="operator">
          <select
            name="operator"
            id="operator"
            data-testid="comparison-filter"
            value={ filter.comparison }
            onChange={ ({ target }) => handleFilter('comparison', target.value) }
          >
            <option value="maior que">Greater than</option>
            <option value="maior que">Less than</option>
            <option value="igual a">Equal to</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          value={ filter.value }
          onChange={ ({ target }) => handleFilter('value', target.value) }
        />
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
    </section>
  );
}

export default Filters;
