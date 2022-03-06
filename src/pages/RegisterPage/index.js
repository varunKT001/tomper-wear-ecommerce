import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { useUserContext } from '../../context/user_context';
import { Link, useHistory } from 'react-router-dom';
import useMounted from '../../hooks/useMounted';
import { toast } from 'react-toastify';
import LoadingButton from '../../components/LoadingButton';

function RegisterPage() {
  const history = useHistory();
  const mounted = useMounted();
  const { registerUser, signInWithGoogle } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter e-mail');
    }

    if (!password) {
      return toast.error('Please enter password');
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords didn't match");
    }

    setIsSubmitting(true);
    registerUser(email, password)
      .then((res) => {
        history.push('/');
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      })
      .finally(() => mounted.current && setIsSubmitting(false));
  };

  useEffect(() => {
    document.title = 'Tomper Wear | Register';
  }, []);

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Register</h2>
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
          <div className='form-control'>
            <input
              type='password'
              name='confirmPassword'
              className='input'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* end pass */}
          {isSubmitting && <LoadingButton />}
          {!isSubmitting && (
            <button type='submit' className='btn register-btn'>
              register
            </button>
          )}
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
          {isSubmitting && <LoadingButton />}
          {!isSubmitting && (
            <button
              type='button'
              className='btn google-btn'
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
          )}
        </form>
      </div>
    </Wrapper>
  );
}

export default RegisterPage;
