import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

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

const Wrapper = styled.section`
  margin: 2rem 0;
  .colors {
    display: grid;
    grid-template-columns: 75px 0.5fr 75px 0.5fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  .input {
    width: 100%;
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .sort-input {
    max-width: 300px;
    border-color: transparent;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    option {
      text-transform: uppercase;
    }
  }
`;
export default AddToCart;
