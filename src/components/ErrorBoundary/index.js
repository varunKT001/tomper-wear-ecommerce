import React from 'react';
import Wrapper from './styles';

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

export default ErrorBoundary;
