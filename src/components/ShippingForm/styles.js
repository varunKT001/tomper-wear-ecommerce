import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  div {
    min-width: 300px;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-control {
      margin-bottom: 1.25rem;
      h5 {
        margin-bottom: 0.5rem;
      }
    }
    .input {
      width: 100%;
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
    }
    .input::placeholder {
      text-transform: capitalize;
    }
    .sort-input {
      max-width: 300px;
      border-color: transparent;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0.25rem 0.5rem;
    }
    .links {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .link {
      font-size: smaller;
      color: var(--clr-primary-1);
      text-transform: capitalize;
    }
    .shipping-btn {
      margin-top: 1.25rem;
      width: 100%;
    }
  }
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .empty {
    text-align: center;
  }
`;

export { Wrapper, WrapperDiv };
