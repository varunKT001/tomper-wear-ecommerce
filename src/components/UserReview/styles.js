import styled from 'styled-components';

const Wrapper = styled.article`
  margin-bottom: 1.5rem;
  .comment {
    margin-bottom: 0.25rem;
  }
  .user-info {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--clr-grey-7);
    text-transform: none;
    span {
      display: inline-inline-block;
    }
    .dot {
      margin: 0 0.5rem;
      width: 5px;
      height: 5px;
      background: var(--clr-grey-7);
      border-radius: 50%;
    }
  }
`;

export default Wrapper;
