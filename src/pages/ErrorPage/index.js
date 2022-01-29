import React, { useEffect } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Tomper Wear | Error';
  }, []);

  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page doesn't exist</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

export default ErrorPage;
