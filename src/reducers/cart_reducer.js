import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, size, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color + size);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color + size) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color + size,
        name: product.name,
        color,
        size,
        amount,
        image: product.images[0].url,
        price: product.price,
        shipping: product.shipping,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        //increase
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        //decrease
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount, shipping_fee } = state.cart.reduce(
      (total, cartItem) => {
        const { price, amount, shipping } = cartItem;
        total.total_items += amount;
        total.total_amount += price * amount;
        total.shipping_fee += shipping ? 5000 : 0;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
        shipping_fee: 0,
      }
    );
    return { ...state, total_items, total_amount, shipping_fee };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
