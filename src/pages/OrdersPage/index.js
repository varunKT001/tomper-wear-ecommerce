import React, { useEffect } from 'react';
import Wrapper from './styles';
import { useOrderContext } from '../../context/order_context';
import { Link } from 'react-router-dom';
import { OrderContent, PageHero, Loading, Error } from '../../components';

const OrdersPage = () => {
  const {
    orders,
    orders_loading: loading,
    orders_error: error,
  } = useOrderContext();

  useEffect(() => {
    document.title = 'Tomper Wear | Orders';
  }, []);

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

export default OrdersPage;
