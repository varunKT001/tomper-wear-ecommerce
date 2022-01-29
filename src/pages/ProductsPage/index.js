import React, { useEffect } from 'react';
import Wrapper from './styles';
import { Filters, ProductList, Sort, PageHero } from '../../components';

const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Tomper Wear | Products';
  }, []);

  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default ProductsPage;
