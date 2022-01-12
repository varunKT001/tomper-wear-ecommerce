import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout, ShippingForm } from '../components';
import { checkObjectProperties } from '../utils/helpers';
// extra imports
import { useCartContext } from '../context/cart_context';
import { useOrderContext } from '../context/order_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const {
    shipping: {
      name,
      address: { line1, postal_code, city, state, country },
    },
  } = useOrderContext();
  const { cart } = useCartContext();
  const [editingShipping, setEditingShipping] = useState(true);

  const confirmShipping = () => {
    setEditingShipping(false);
  };

  useEffect(() => {
    if (
      checkObjectProperties({ name, line1, postal_code, city, state, country })
    ) {
      return setEditingShipping(true);
    }
    setEditingShipping(false);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <PageHero title='checkout' />
      {editingShipping ? (
        <ShippingForm confirmShipping={confirmShipping} />
      ) : (
        <Wrapper className='page'>
          {cart.length < 1 ? (
            <div className='empty'>
              <h2>Your cart is empty</h2>
              <Link to='/products' className='btn'>
                fill it
              </Link>
            </div>
          ) : (
            <StripeCheckout />
          )}
        </Wrapper>
      )}
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
