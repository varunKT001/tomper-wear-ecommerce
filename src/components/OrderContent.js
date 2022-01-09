import React from 'react';
import styled from 'styled-components';
import { useOrderContext } from '../context/order_context';
import { Link } from 'react-router-dom';
import OrderItem from './OrderItems';
import {
  getOrderStatusColor,
  formatAddress,
  formatPrice,
} from '../utils/helpers';

const OrderContent = ({
  paymentInfo,
  orderItems,
  totalPrice,
  orderStatus,
  user: { name },
  shippingInfo,
  shippingPrice,
}) => {
  const statusColor = getOrderStatusColor(orderStatus);
  return (
    <Wrapper className='section section-center'>
      <div className='order-info'>
        <h5 className='order-status'>
          Status: <span style={{ color: statusColor }}>{orderStatus}</span>
        </h5>
        <h5 className='payment-status'>
          Payment: <span>{paymentInfo.status}</span>
        </h5>
        <h5 className='shipping-fee'>
          Shipping: <span>{formatPrice(shippingPrice)}</span>
        </h5>
        <h5 className='order-total'>
          Order Total: <span>{formatPrice(totalPrice)}</span>
        </h5>
      </div>
      <div className='delivery-info'>
        <h5>Delivery: </h5>
        <p>
          {name}, {shippingInfo.phoneNumber}
        </p>
        <p>{formatAddress({ shippingInfo })}</p>
      </div>
      {orderItems.map((item) => {
        return <OrderItem key={item._id + item.color} {...item} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: var(--radius);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .order-info {
    margin-bottom: 1rem;
    h5 {
      margin: 0.25rem 0;
    }
    .payment-status {
      span {
        color: var(--clr-green-dark);
      }
    }
    .shipping-fee,
    .order-total {
      span {
        color: var(--clr-grey-5);
      }
    }
  }
  .delivery-info {
    margin-bottom: 2rem;
    h5 {
      margin: 0.25rem 0;
    }
    p {
      margin: 0.25rem 0;
    }
  }
`;
export default OrderContent;
