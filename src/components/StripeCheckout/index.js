import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { useOrderContext } from '../../context/order_context';
import { formatPrice } from '../../utils/helpers';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { payment_url as url } from '../../utils/constants';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { shipping, placeOrder } = useOrderContext();
  const { currentUser } = useUserContext();
  const history = useHistory();

  // STRIPE STUFF
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(url, {
        cart,
        shipping_fee,
        total_amount,
        shipping: {
          name: shipping.name,
          address: shipping.address,
        },
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      toast.error('Some error occured while connecting to the payment gateway');
    }
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      await placeOrder();
      setTimeout(() => {
        clearCart();
        history.push('/orders');
      }, 5000);
    }
  };

  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank You!</h4>
          <h4>Your payment was successfull</h4>
          <h4>Redirecting to Order page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>
            Hello,
            {currentUser &&
              (currentUser?.displayName
                ? currentUser.displayName
                : currentUser.email)}
          </h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form id='payment-form' onSubmit={handleSubmit}>
        <CardElement
          id='card-element'
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
          </span>
        </button>
        {/* show any errors that happens while processing the payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
        {/* show a success message on completion */}
        <p
          className={`${
            succeeded ? 'result-message' : 'result-message hidden'
          }`}
        >
          Payment succeeded, your items will arrive at your doorstep soon.
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

export default StripeCheckout;
