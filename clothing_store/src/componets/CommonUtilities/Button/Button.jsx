import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, className, onClick }) => (
  <button
    type="submit"
    className={className}
    onClick={onClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
