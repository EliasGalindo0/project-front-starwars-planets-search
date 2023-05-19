import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Filters from './Filters';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <section className='table-sec'>
      <img className='logo-sw' src='https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png' alt='star-wars-logo' />
      <Filters />
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          { data && data.length > 0
            && data.map((planet) => (
              <tr key={ planet.name }>
                <td id={planet.name}>{ planet.name }</td>
                <td>{ planet.rotationPeriod }</td>
                <td>{ planet.orbitalPeriod }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate.join(', ').toUpperCase() }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain.join(', ').toUpperCase() }</td>
                <td>{ planet.surfaceWater }</td>
                <td>{ planet.population }</td>
                <td>{ planet.createdAt }</td>
                <td>{ planet.updatedAt }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
