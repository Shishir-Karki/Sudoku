import { getSudoku } from 'sudoku-gen';

export const generateSudoku = () => {
  const { puzzle, solution } = getSudoku();

  // Convert puzzle and solution strings into arrays of numbers
  const puzzleArray = puzzle.split('').map(v => v === '-' ? null : parseInt(v));
  const solutionArray = solution.split('').map(v => parseInt(v));

  return {
    puzzle: puzzleArray,
    solution: solutionArray,
  };
};
