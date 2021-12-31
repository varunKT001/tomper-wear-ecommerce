import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Register</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* email */}
          <div className='form-control'>
            <input
              type='email'
              className='input'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* end email */}
          {/* email */}
          <div className='form-control'>
            <input
              type='password'
              className='input'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* end email */}
          <button type='submit' className='btn register-btn'>
            register
          </button>
          {/* links */}
          <div className='links'>
            <Link to='/login' className='link'>
              login
            </Link>
          </div>
          {/* end links */}
          <div className='seperator'>
            <hr />
            <span>or</span>
          </div>
          <button type='submit' className='btn google-btn'>
            sign in with google
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  div {
    min-width: 300px;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-control {
      margin-bottom: 1.25rem;
      h5 {
        margin-bottom: 0.5rem;
      }
    }
    .input {
      width: 100%;
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
    }
    .input::placeholder {
      text-transform: capitalize;
    }
    .links {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .link {
      font-size: 1rem;
      color: var(--clr-primary-1);
      text-transform: capitalize;
    }
    .seperator {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 1.25rem;
      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.25rem;
        background: white;
      }
      hr {
        width: 100%;
      }
    }
    .register-btn {
      margin-bottom: 0.5rem;
      width: 100%;
    }
    .google-btn {
      margin-top: 1.25rem;
      width: 100%;
      color: var(--clr-primary-5);
      background: transparent;
      border: 2px solid var(--clr-primary-5);
    }
  }
`;

export default RegisterPage;
