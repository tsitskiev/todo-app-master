import React from 'react';
import PropTypes from 'prop-types';

function Button({ classes, children }) {
  return <button className={`${classes}`}>{children}</button>;
}

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
