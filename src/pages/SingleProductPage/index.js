import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import { single_product_url as url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  ReviewModal,
  UserReview,
} from '../../components';
import Wrapper from './styles';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    rating: stars,
    numberOfReviews,
    reviews = [],
    _id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={numberOfReviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && (
              <AddToCart className='cart-buttons' product={product} />
            )}
            <hr />
            <ReviewModal product={product} />
            <section className='reviews'>
              <h3>Reviews</h3>
              {reviews.length < 1 && (
                <p>No reviews yet, be the first one to review &#128512;</p>
              )}
              {reviews.map((review, index) => {
                return <UserReview key={index} {...review} />;
              })}
            </section>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;
