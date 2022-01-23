import React from 'react';
import Wrapper from './styles';
import OrderItem from '../OrderItems/';
import {
  getOrderStatusColor,
  formatAddress,
  formatPrice,
} from '../../utils/helpers';

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

export default OrderContent;
