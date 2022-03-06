import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from './styles';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';
import ReviewStars from '../ReviewStars/';
import Button from '../Button';

function ReviewModal({ product }) {
  const { _id: id, reviews } = product;
  const { reviewProduct } = useProductsContext();
  const { currentUser } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const { success, message } = await reviewProduct(id, stars, comment);
    setLoading(false);
    if (success) {
      return toast.success(message);
    } else {
      return toast.error(message);
    }
  };

  const updateStars = (number) => {
    setStars(number);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (reviews && currentUser) {
      const userReview = reviews.find((rev) => rev.email === currentUser.email);
      if (userReview) {
        setStars(userReview.rating);
        setComment(userReview.comment);
      }
    }
    // eslint-disable-next-line
  }, [product, currentUser]);

  return (
    <Wrapper>
      <button className='btn' onClick={onOpen}>
        review product
      </button>
      <div className={`${isOpen ? 'modal' : 'modal hide'}`}>
        <div className='form'>
          <ReviewStars stars={stars} updateStars={updateStars} />
          <textarea
            className='input'
            placeholder='your comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {currentUser ? (
            <div className='btn-container'>
              <Button disabled={loading} className='btn' onClick={handleSubmit}>
                review
              </Button>
              <button className='btn btn-outline' onClick={onClose}>
                cancel
              </button>
            </div>
          ) : (
            <div className='btn-container'>
              <Link to='/login' className='btn'>
                login
              </Link>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default ReviewModal;
