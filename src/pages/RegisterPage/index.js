import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { useUserContext } from '../../context/user_context';
import { Link, useHistory } from 'react-router-dom';
import useMounted from '../../hooks/useMounted';
import { toast } from 'react-toastify';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import Button from '../../components/Button';

function RegisterPage() {
  const history = useHistory();
  const mounted = useMounted();
  const { registerUser, signInWithGoogle } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);

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

  function togglePasswordVisibility() {
    setIsVisiblePassword(!isVisiblePassword);
  }

  function toggleConfirmPasswordVisibility() {
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
  }

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
          <div className='form-control password'>
            <input
              type={!isVisiblePassword ? 'password' : 'text'}
              name='password'
              className='input'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div onClick={togglePasswordVisibility} className='togglebtn'>
              {!isVisiblePassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </div>
          </div>
          <div className='form-control password'>
            <input
              type={!isVisibleConfirmPassword ? 'password' : 'text'}
              name='confirmPassword'
              className='input'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div
              onClick={toggleConfirmPasswordVisibility}
              className='togglebtn'
            >
              {!isVisibleConfirmPassword ? (
                <BsFillEyeSlashFill />
              ) : (
                <BsFillEyeFill />
              )}
            </div>
          </div>
          {/* end pass */}
          <Button
            type='submit'
            className='btn register-btn'
            disabled={isSubmitting}
          >
            register
          </Button>
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

export default RegisterPage;
