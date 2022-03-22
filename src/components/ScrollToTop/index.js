import React, { useState, useEffect } from 'react';
import { FaRegCaretSquareUp } from 'react-icons/fa';
import { Button } from './styles';

const ScrollToTop = () => {
  const [visible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button>
      <FaRegCaretSquareUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
};

export default ScrollToTop;
