import React from 'react';
import Wrapper from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>Tomper Wear</span>
      </h5>
      <h5>All Rights Reserved</h5>
    </Wrapper>
  );
};

export default Footer;
