import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper className='page-100'>
          <h1>Something went wrong</h1>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    color: var(--clr-red-dark);
  }
`;

export default ErrorBoundary;
