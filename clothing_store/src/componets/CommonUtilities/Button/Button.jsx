import React from 'react';

function Button({ label, className, onClick }) {
  return (
    <button
      type="submit"
      className = {className}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
