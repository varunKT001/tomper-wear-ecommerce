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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum,
          molestiae voluptatem molestias dolorum dolore natus ducimus explicabo
          vel, rerum illo dolorem a quod officiis, assumenda doloribus.
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
