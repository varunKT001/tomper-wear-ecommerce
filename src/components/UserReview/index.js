import React from 'react';
import Wrapper from './styles';
import { ReviewStars } from '..';

function UserReview({ name, rating, comment }) {
  return (
    <Wrapper>
      <ReviewStars stars={rating} />
      <p className='comment'>{comment}</p>
      <div className='user-info'>
        <span>{name}</span>
        <span className='dot'></span>
        <span>Certified Buyer</span>
      </div>
    </Wrapper>
  );
}

export default UserReview;
