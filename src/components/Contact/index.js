import React, { useEffect, useState } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { useUserContext } from '../../context/user_context';
import Button from '../Button';

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
              Customer satisfaction is our top-most priorty. Today were are here
              only due to your trust and support, and our constant efforts to
              make the platform better everyday. Please provide your valuable
              feedback, and help the platform grow.
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
              required
            />
            {currentUser ? (
              <Button
                type='submit'
                className='btn submit-btn'
                disabled={state.submitting}
              >
                send feedback
              </Button>
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
