import React from 'react';
import Grid from './components/Grid';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">Sudoku Game</h1>
      <Grid />
    </div>
  );
};

export default App;
