import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/order_reducer';
import { UPDATE_SHIPPING_DETAILS } from '../actions';

const initialState = {
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

  const updateShipping = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SHIPPING_DETAILS, payload: { name, value } });
  };

  return (
    <OrderContext.Provider value={{ ...state, updateShipping }}>
      {children}
    </OrderContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrderContext);
};
