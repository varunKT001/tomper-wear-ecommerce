import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: var(--radius);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .order-info {
    margin-bottom: 1rem;
    h5 {
      margin: 0.25rem 0;
    }
    .payment-status {
      span {
        color: var(--clr-green-dark);
      }
    }
    .shipping-fee,
    .order-total {
      span {
        color: var(--clr-grey-5);
      }
    }
  }
  .delivery-info {
    margin-bottom: 2rem;
    h5 {
      margin: 0.25rem 0;
    }
    p {
      margin: 0.25rem 0;
    }
  }
`;

export default Wrapper;
