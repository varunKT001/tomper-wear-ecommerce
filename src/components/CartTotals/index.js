import React from 'react';
import Wrapper from './styles';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  const { currentUser } = useUserContext();
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {currentUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <Link to='/login' className='btn'>
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

export default CartTotals;
