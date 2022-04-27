import React from 'react';
import './App.css';
import FilterPlanet from './components/FilterPlanet';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <>
        <FilterPlanet />
        <Table />
      </>
    </ContextProvider>
  );
}

export default App;
