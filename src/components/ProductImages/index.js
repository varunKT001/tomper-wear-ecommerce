import React, { useState } from 'react';
import Wrapper from './styles';
import ReactImageMagnify from 'react-image-magnify';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <ReactImageMagnify
        {...{
          className: 'main',
          imageClassName: 'main',
          smallImage: {
            sizes: '(max-width: 576px) 300px, (min-width: 992px) 500px,',
            isFluidWidth: true,
            alt: 'main',
            src: main.url,
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
