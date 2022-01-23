import React, { useState } from 'react';
import Wrapper from './styles';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img src={main.url} alt='main' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              className={`${image.url === main.url ? 'active' : null}`}
              key={index}
              onClick={() => {
                setMain(images[index]);
              }}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
