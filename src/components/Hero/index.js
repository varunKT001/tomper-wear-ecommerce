import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import heroBcg from '../../assets/hero-bcg.jpeg';
import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          search less <br />
          wear more
        </h1>
        <p>
          TomperWear is an e-commerce platform which sells wide variety of
          clothing essentials. It is a one-stop destination for all your
          clothing needs.
        </p>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='' className='main-img' />
        <img src={heroBcg2} alt='' className='accent-img' />
      </article>
    </Wrapper>
  );
};

export default Hero;
