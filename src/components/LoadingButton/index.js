import React from 'react';
import Icon from './LoadingIcon';
import LoadingButtonWrapper from './styles';
const LoadingButton = () => {
  return (
    <LoadingButtonWrapper type='button' className='loader' disabled="true">
      <Icon />
    </LoadingButtonWrapper>
  );
};

export default LoadingButton;
