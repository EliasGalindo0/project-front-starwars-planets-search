import React from 'react';
import './App.css';
import FilterPlanet from './components/FilterPlanet';
import Filters from './components/Filters';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <>
        <FilterPlanet />
        <Filters />
        <Table />
      </>
    </ContextProvider>
  );
}

export default App;
