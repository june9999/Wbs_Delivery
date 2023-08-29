import React from 'react';
import Hero from './Hero';
import SectionTeam from './blocks/SectionTeam';
import SectionFeature from './blocks/SectionFeature';
import SectionContent from './blocks/SectionContent';
import SectionTestimonials from './blocks/SectionTestimonials';
import CookieInfoBanner from '../components/blocks/CookieInfoBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <SectionFeature />
      <SectionContent />
      <SectionTestimonials />
      <SectionTeam />
      {/* <CookieInfoBanner /> */}

    </>
  );
};

export default Home;
