import React, { useEffect, useState } from 'react';
import { AboutUs, Banner, PopularProducts, Reviews, SpecialOffer } from '@components';

const MainPage = () => {
  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
      setTablet(window.innerWidth < 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="paw-shop__main-page main-page page">
      <Banner />
      <SpecialOffer isMobile={mobile} isTablet={tablet} />
      <PopularProducts />
      <Reviews />
      <AboutUs />
    </div>
  );
};

export default MainPage;
