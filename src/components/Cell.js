import React from 'react';

const Cell = ({ value, isEditable, onChange, className }) => {
  return (
    <input
      type="text"
      value={value || ''}
      onChange={(e) => isEditable && onChange(e.target.value)}
      className={`w-10 h-10 text-center border ${isEditable ? 'bg-white' : 'bg-gray-200'} ${className}`}
      maxLength="1"
    />
  );
};

export default Cell;
