import React from 'react';
import styled from 'styled-components';
import { ReviewStars } from '.';

function UserReview({ name, email, rating, comment }) {
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

const Wrapper = styled.article`
  margin-bottom: 1.5rem;
  .comment {
    margin-bottom: 0.25rem;
  }
  .user-info {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--clr-grey-7);
    text-transform: none;
    span {
      display: inline-inline-block;
    }
    .dot {
      margin: 0 0.5rem;
      width: 5px;
      height: 5px;
      background: var(--clr-grey-7);
      border-radius: 50%;
    }
  }
`;

export default UserReview;
