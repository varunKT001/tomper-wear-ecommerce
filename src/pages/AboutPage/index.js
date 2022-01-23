import React from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from '../../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <article>
          <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            facere blanditiis animi praesentium in earum nam rerum cupiditate,
            possimus, a neque sequi quia quis repellat nemo sapiente deserunt
            placeat aut? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Excepturi tenetur necessitatibus dolorem atque ipsam rem
            consectetur non dignissimos eaque recusandae. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Ipsam perspiciatis doloribus
            eaque, doloremque vitae odio fuga aut culpa perferendis! Ex vitae
            libero ipsam consequatur possimus?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
