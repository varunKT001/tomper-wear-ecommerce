import React from 'react';
import Wrapper from './styles';
import { services } from '../../utils/constants';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            Your wish
            <br />
            Our command
          </h3>
          <p>
            Customer satisfaction is the top-most priorty for TomperWear. It is
            the only the trust and support of our customers that we are now
            reaching greater heights.
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
