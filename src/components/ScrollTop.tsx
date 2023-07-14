import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ScrollTopProps {
  window: Window & typeof globalThis;
}

const ScrollTop: React.FC<ScrollTopProps> = ({ window }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fab
      size="small"
      aria-label="scroll back to top"
      onClick={handleClick}
      role="presentation"
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 999,
        opacity: isTop ? 0 : 1,
        pointerEvents: isTop ? 'none' : 'auto',
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollTop;
