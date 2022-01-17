import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
];

const domain = 'https://tomper-wear-server.herokuapp.com';
export const products_url = `${domain}/api/products`;
export const single_product_url = `${domain}/api/products/`;
export const create_order_url = `${domain}/api/orders/new`;
export const get_order_url = `${domain}/api/orders`;
export const payment_url = `${domain}/api/payment/create-payment-intent`;
export const upload_url = `${domain}/api/upload/`;
export const default_profile_image =
  'https://res.cloudinary.com/varuntiwari/image/upload/v1642434014/profile-images/l60Hf_ccgon2.png';
