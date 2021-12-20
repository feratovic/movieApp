import React from 'react';

export const CustomBtn = ({name, title, onClick, id, className}) => {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      name={name || ''}
      title={title || ''}
    >
      {title || ''}
    </button>
  );
};
