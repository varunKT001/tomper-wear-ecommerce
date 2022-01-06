import React from 'react';
import styled from 'styled-components';
import { useOrderContext } from '../context/order_context';
import { Link } from 'react-router-dom';
import { OrderContent, PageHero, Loading, Error } from '../components';

const OrdersPage = () => {
  const {
    orders,
    orders_loading: loading,
    orders_error: error,
  } = useOrderContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (orders.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>You have no orders</h2>
          <Link to='/products' className='btn'>
            buy
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title='orders' />
      <Wrapper className='page'>
        {orders.map((order) => {
          return <OrderContent key={order._id} {...order} />;
        })}
        <div className='link-container'>
          <Link to='/products' className='link-btn'>
            shop more
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .link-container {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
`;

export default OrdersPage;
