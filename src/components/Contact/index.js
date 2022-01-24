import React, { useEffect, useState } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { useUserContext } from '../../context/user_context';

const Contact = () => {
  const { currentUser } = useUserContext();
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE);
  const [feedbackText, setFeedbackText] = useState('');

  useEffect(() => {
    if (state.succeeded) {
      setFeedbackText('Thank you for your feedback');
    }
  }, [state]);

  return (
    <Wrapper>
      <div className='section-center'>
        <h3>What did you think of us?</h3>
        <div className='content'>
          <div className='feedback-info'>
            {feedbackText && <p className='success-text'>{feedbackText}</p>}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              dicta similique iste reiciendis voluptates eius sit, repellendus
              beatae reprehenderit cum sequi vero officiis labore unde placeat
              dolores enim perferendis veritatis.
            </p>
          </div>
          <form className='contact-form' onSubmit={handleSubmit}>
            {currentUser && (
              <input
                type='email'
                name='email'
                className='form-input form-input-muted'
                value={currentUser.email}
                readOnly
              />
            )}
            <textarea
              name='feedback'
              className='form-input'
              placeholder='Your feedback'
            />
            {currentUser ? (
              <button
                type='submit'
                className='btn submit-btn'
                disabled={state.submitting}
              >
                send feedback
              </button>
            ) : (
              <Link to='/login' className='btn submit-btn'>
                login
              </Link>
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
