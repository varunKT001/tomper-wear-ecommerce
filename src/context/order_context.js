import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/order_reducer';
import {
  UPDATE_SHIPPING_DETAILS,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
} from '../actions';
import { useUserContext } from './user_context';
import { useCartContext } from './cart_context';
import { toast } from 'react-toastify';
import axios from 'axios';
import { get_order_url, create_order_url } from '../utils/constants';

const initialState = {
  orders_loading: false,
  orders_error: false,
  orders: [],
  shipping: {
    name: '',
    address: {
      line1: '',
      postal_code: '',
      city: '',
      state: '',
      country: '',
    },
  },
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useUserContext();
  const { cart, total_amount, shipping_fee } = useCartContext();

  const fetchOrders = async (url) => {
    dispatch({ type: GET_ORDERS_BEGIN });
    try {
      const response = await axios.post(url, {
        email: currentUser.email,
      });
      const orders = response.data;
      dispatch({ type: GET_ORDERS_SUCCESS, payload: orders.data });
    } catch (error) {
      dispatch({ type: GET_ORDERS_ERROR });
    }
  };

  const placeOrder = async () => {
    const shippingInfo = {
      address: state.shipping.address.line1,
      city: state.shipping.address.city,
      state: state.shipping.address.state,
      country: state.shipping.address.country,
      pinCode: state.shipping.address.postal_code,
      phoneNumber: state.shipping.phone_number,
    };
    const orderItems = cart.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.amount,
        image: item.image,
        color: item.color,
        size: item.size,
        product: item.id.replace(item.color + item.size, ''),
      };
    });
    const paymentInfo = {
      id: 'dummy_id_12345',
      status: 'paid',
    };
    const body = {
      name: state.shipping.name,
      email: currentUser.email,
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice: total_amount,
      shippingPrice: shipping_fee,
      totalPrice: total_amount + shipping_fee,
    };
    try {
      await axios.post(create_order_url, body);
      toast.success('Order placed');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateShipping = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SHIPPING_DETAILS, payload: { name, value } });
  };

  useEffect(() => {
    fetchOrders(get_order_url);
    // eslint-disable-next-line
  }, [currentUser, cart]);

  return (
    <OrderContext.Provider value={{ ...state, updateShipping, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrderContext);
};
