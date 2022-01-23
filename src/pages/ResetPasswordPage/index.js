import React, { useState } from 'react';
import Wrapper from './styles';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../context/user_context';
import useQuery from '../../hooks/useQuery';
import { toast } from 'react-toastify';

function ResetPasswordPage() {
  const history = useHistory();
  const { resetPassword } = useUserContext();
  const query = useQuery();
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const oobCode = query.get('oobCode');

    if (!password) {
      return toast.error('Please enter a new password');
    }

    if (!oobCode) {
      return history.push('/');
    }

    resetPassword(oobCode, password)
      .then((res) => {
        toast.success('Password changed successfully, login to continue');
        history.push('/login');
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
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

export default ResetPasswordPage;
