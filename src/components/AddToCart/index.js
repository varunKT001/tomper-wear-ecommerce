import React, { useState } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
import AmountButtons from '../AmountButtons/';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { _id: id, stock, colors, sizes } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [mainSize, setMainSize] = useState(sizes[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                style={{ background: color }}
                onClick={() => {
                  setMainColor(colors[index]);
                }}
              >
                {mainColor === color && <FaCheck />}
              </button>
            );
          })}
        </div>
        <span>size : </span>
        <div>
          <select
            className='input sort-input'
            onChange={(e) => setMainSize(e.target.value)}
          >
            {sizes.map((size, index) => {
              return (
                <option key={index} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, mainColor, mainSize, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
