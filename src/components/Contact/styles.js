import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .feedback-info {
    margin-bottom: 2.5rem;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }
  .form-input {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    border-radius: var(--radius);
    color: var(--clr-grey-3);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .form-input-muted {
    color: var(--clr-grey-5);
  }
  .success-text {
    margin-bottom: 0.25rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--clr-green-dark);
  }
  a.submit-btn {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 992px) {
    .submit-btn {
      width: 35%;
    }
    a.submit-btn {
      width: fit-content;
    }
    .feedback-info {
      margin-bottom: 0;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
    .feedback-info {
      margin-bottom: 0;
    }
    .submit-btn {
      width: 35%;
    }
  }
`;

export default Wrapper;
