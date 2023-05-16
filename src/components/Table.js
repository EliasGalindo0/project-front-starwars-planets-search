import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <section>
      <table>
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
        <tbody>
          { data && data.length > 0
            && data.map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotationPeriod }</td>
                <td>{ planet.orbitalPeriod }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
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
