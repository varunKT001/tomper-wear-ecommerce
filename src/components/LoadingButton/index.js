import React from 'react';
import Icon from './LoadingIcon';

const Button = ({ disabled, children, ...rest }) => {
  return (
    <button disabled={disabled} {...rest}>
      {disabled ? <Icon /> : children}
    </button>
  );
};

export default Button;
