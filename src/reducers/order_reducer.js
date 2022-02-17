import {
  UPDATE_SHIPPING_DETAILS,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
} from '../actions';

const order_reducer = (state, action) => {
  if (action.type === UPDATE_SHIPPING_DETAILS) {
    const { name, value } = action.payload;
    if (name === 'name' || name === 'phone_number') {
      return { ...state, shipping: { ...state.shipping, [name]: value } };
    }
    return {
      ...state,
      shipping: {
        ...state.shipping,
        address: { ...state.shipping.address, [name]: value },
      },
    };
  }
  if (action.type === GET_ORDERS_BEGIN) {
    return { ...state, orders_loading: true, orders_error: false };
  }
  if (action.type === GET_ORDERS_ERROR) {
    return { ...state, orders_loading: false, orders_error: true };
  }
  if (action.type === GET_ORDERS_SUCCESS) {
    return {
      ...state,
      orders_loading: false,
      orders: action.payload.reverse(),
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default order_reducer;
