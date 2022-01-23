import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 2rem 0;
  .colors {
    display: grid;
    grid-template-columns: 75px 0.5fr 75px 0.5fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  .input {
    width: 100%;
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .sort-input {
    max-width: 300px;
    border-color: transparent;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    option {
      text-transform: uppercase;
    }
  }
`;

export default Wrapper;
