import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <div className='body'>
        <React.StrictMode>
          <Table />
        </React.StrictMode>
      </div>
    </ContextProvider>
  );
}

export default App;
