import React from 'react';

function InputField({ id, label, type = 'text', value, onChange, onBlur, placeholder, error, className = '', children, labelClassName = '' }) {
  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
      />
      {children}
      {error && <div className="text-sm text-red-500 mt-2">{error}</div>}
    </div>
  );
}

export default InputField;
