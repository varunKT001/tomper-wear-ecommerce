import React, { useState } from 'react';
import Wrapper from './styles';
import { useUserContext } from '../../context/user_context';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useMounted from '../../hooks/useMounted';
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

export default LoginPage;
