import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import { generateSudoku } from '../sudoku';

const Grid = () => {
  const [sudoku, setSudoku] = useState([]);
  const [solution, setSolution] = useState([]);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const { puzzle, solution } = generateSudoku();
    setSudoku(puzzle); 
    setSolution(solution); 
    setGrid(puzzle); 
  }, []);

  const handleChange = (value, row, col) => {
    const newGrid = [...grid];
    if (/^[1-9]?$/.test(value)) { 
      newGrid[row * 9 + col] = value ?parseInt(value) : null;
      setGrid(newGrid);
    }
  };

  const checkSolution = () => {
    const isSolved = grid.every((value, idx) => value === solution[idx]);
    alert(isSolved ? "YOu did it!": "Try again!");
  };

  const resetGame = () => {
    setGrid(sudoku); 
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-9 gap-[1px] bg-gray-400 p-1 my-8 w-fit">
        {grid.map((value, idx) => {
          const row = Math.floor(idx / 9);
          const col = idx % 9;
          const isEditable = sudoku[idx] === null; 

          return (
            <Cell
              key={idx}
              value={value}
              isEditable={isEditable}
              onChange={(val) => handleChange(val, row, col)}
              className={`${(col + 1)% 3=== 0? 'border-r-2': ''} ${(row + 1) % 3=== 0? 'border-b-2': ''} border-gray-500`}
            />
          );})}
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={checkSolution}className="px-4 py-2 bg-green-500 text-white rounded">
          Check Solution</button>
        <button onClick={resetGame} className="px-4 py-2 bg-red-500 text-white rounded">
          Reset</button>
      </div>
    </div>
  );
};

export default Grid;
