import React from 'react';
import BrandingSite from '../../components/BrandingSite/BrandingSite';
import FirstSection from '../../components/FirstSection/FirstSection';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navibar from '../../components/Navibar/Navibar';
import NewsSlider from '../../components/NewsSlider/NewsSlider';
import SecondSection from '../../components/SecondSection/SecondSection';

const HomePage = (props) => {
  return (
    <>
      <Navibar />
      <Header />
      <FirstSection />
      <SecondSection />
      <BrandingSite />
      <NewsSlider />
      <Footer />
    </>
  );
};

export default HomePage;