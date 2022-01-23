import styled from 'styled-components';

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .reviews-loading {
    color: var(--clr-grey-5);
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default Wrapper;
