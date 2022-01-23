import React from 'react';
import Wrapper from './styles';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function ReviewStars({ stars, updateStars = () => {} }) {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} onClick={() => updateStars(index + 1)}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
    </Wrapper>
  );
}

export default ReviewStars;
