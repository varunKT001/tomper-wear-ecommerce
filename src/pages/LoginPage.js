import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../context/user_context';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useMounted from '../hooks/useMounted';
import { toast } from 'react-toastify';

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const mounted = useMounted();
  const { loginUser, signInWithGoogle } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter e-mail');
    }

    if (!password) {
      return toast.error('Please enter password');
    }

    setIsSubmitting(true);
    loginUser(email, password)
      .then((res) => {
        history.push(location.state?.from ?? '/');
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => mounted.current && setIsSubmitting(false));
  };

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control'>
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* end email */}
          {/* pass */}
          <div className='form-control'>
            <input
              type='password'
              name='password'
              className='input'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* end pass */}
          {/* links */}
          <div className='links'>
            <Link to='/forgot-password' className='link'>
              forgot password?
            </Link>
            <Link to='/register' className='link'>
              register
            </Link>
          </div>
          {/* end links */}
          <button
            type='submit'
            className='btn login-btn'
            disabled={isSubmitting}
          >
            login
          </button>
          <div className='seperator'>
            <hr />
            <span>or</span>
          </div>
          <button
            type='button'
            className='btn google-btn'
            disabled={isSubmitting}
            onClick={() => {
              signInWithGoogle()
                .then((user) => {
                  history.push('/');
                })
                .catch((err) => {
                  toast.error(`Error: ${err.message}`);
                });
            }}
          >
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
      justify-content: space-between;
    }
    .link {
      font-size: smaller;
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
    .login-btn {
      margin-top: 1.25rem;
      width: 100%;
    }
    .google-btn {
      margin-top: 1.25rem;
      width: 100%;
      color: var(--clr-primary-5);
      background: transparent;
      border: 2px solid var(--clr-primary-5);
      &:disabled {
        border: 2px solid var(--clr-primary-8);
        color: var(--clr-primary-8);
      }
      &:disabled:hover {
        color: var(--clr-primary-10);
      }
    }
  }
`;

export default LoginPage;
