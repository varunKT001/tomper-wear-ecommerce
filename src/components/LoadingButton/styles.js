import styled from 'styled-components';

const LoadingButtonWrapper = styled.button`
  margin-top: 1.25rem !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: var(--radius);
  border-color: transparent;

  &:disabled{
    background: var(--clr-primary-8) ;
  }

`;

export default LoadingButtonWrapper;
