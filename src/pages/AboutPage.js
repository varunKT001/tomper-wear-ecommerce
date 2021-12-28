import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos facere blanditiis animi
            praesentium in earum nam rerum cupiditate, possimus, a neque sequi quia quis repellat
            nemo sapiente deserunt placeat aut? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Excepturi tenetur necessitatibus dolorem atque ipsam rem consectetur non
            dignissimos eaque recusandae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsam perspiciatis doloribus eaque, doloremque vitae odio fuga aut culpa perferendis! Ex
            vitae libero ipsam consequatur possimus?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
