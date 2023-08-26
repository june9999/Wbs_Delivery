import React from 'react';
import Hero from './Hero';
import SectionTeam from './blocks/SectionTeam';
import SectionFeature from './blocks/SectionFeature';
import SectionContent from './blocks/SectionContent';
import SectionRead from './blocks/SectionRead';
import SectionTestimonials from './blocks/SectionTestimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <SectionContent />
      <SectionFeature />
      <SectionTestimonials />
      <SectionTeam />
    </>
  );
};

export default Home;
