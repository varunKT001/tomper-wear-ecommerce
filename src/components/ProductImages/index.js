import React, { useState } from 'react';
import Wrapper from './styles';
import ReactImageMagnify from 'react-image-magnify';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'main',
            src: main.url,
            height: 500,
            width: 600,
            imageClassName: 'main',
          },
          largeImage: {
            src: main.url,
            width: 1200,
            height: 1800,
          },
          enlargedImageContainerDimensions: {
            width: '100%',
            height: '100%',
          },
        }}
      />

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
