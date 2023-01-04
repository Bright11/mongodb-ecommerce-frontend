import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';

function ScrollTotop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default ScrollTotop