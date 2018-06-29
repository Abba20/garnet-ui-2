import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button ({color, size, onClick, children}) {
  const styles = {
    color,
    fontSize: Button.sizes[size],
  };

  return(
    <button className="button" style={styles} onClick= {onClick}> 
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '#333',
  size: 'normal',
  onClick: event=> {alert('You clicked me!')},
};

Button.sizes = {
  small: '16px',
  normal: '18px',
  large: '20px',
};
