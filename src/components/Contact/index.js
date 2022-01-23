import React from 'react';
import Wrapper from './styles';

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dicta
            similique iste reiciendis voluptates eius sit, repellendus beatae
            reprehenderit cum sequi vero officiis labore unde placeat dolores
            enim perferendis veritatis.
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter your email'
            />
            <button type='submit' className='submit-btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
