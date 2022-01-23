import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from './styles';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { default_profile_image } from '../../utils/constants';

const CartButtons = () => {
  const { currentUser } = useUserContext();
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {!currentUser ? (
        <Link to='/login' className='auth-btn' onClick={closeSidebar}>
          Login <FaUserPlus />
        </Link>
      ) : (
        <Link to='/profile' className='profile-btn' onClick={closeSidebar}>
          <img
            src={currentUser.photoURL || default_profile_image}
            alt='profile'
          />
        </Link>
      )}
    </Wrapper>
  );
};

export default CartButtons;
