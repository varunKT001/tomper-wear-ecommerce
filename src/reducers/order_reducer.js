import { UPDATE_SHIPPING_DETAILS } from '../actions';

const order_reducer = (state, action) => {
  if (action.type === UPDATE_SHIPPING_DETAILS) {
    const { name, value } = action.payload;
    // address
    if (name === 'name') {
      return { ...state, shipping: { ...state.shipping, [name]: value } };
    }
    return {
      ...state,
      shipping: {
        ...state.shipping,
        address: { ...state.shipping.address, [name]: value },
      },
    };

    throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default order_reducer;
