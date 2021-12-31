import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import useQuery from '../hooks/useQuery';

function ResetPasswordPage() {
  const history = useHistory();
  const { resetPassword } = useUserContext();
  const query = useQuery();
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const oobCode = query.get('oobCode');

    if (!password) {
      alert('enter password');
    }

    if (!oobCode) {
      history.push('/');
    }

    resetPassword(oobCode, password)
      .then((res) => {
        console.log(res);
        alert('password change');
        history.push('/login');
      })
      .catch((err) => {
        console.log(err.message);
        alert(`Error: ${err.message}`);
      });
  };

  return (
    <Wrapper className='page-100'>
      <div>
        <div className='title'>
          <h2>Reset</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className='form-control'>
            <input
              type='password'
              className='input'
              placeholder='new password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* end email */}
          <button type='submit' className='btn reset-btn'>
            reset
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
    .reset-btn {
      margin-bottom: 0.5rem;
      width: 100%;
    }
  }
`;

export default ResetPasswordPage;
