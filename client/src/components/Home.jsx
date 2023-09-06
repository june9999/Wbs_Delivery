import React from 'react';
import Hero from './Hero';
import SectionTeam from './blocks/SectionTeam';
import SectionFeature from './blocks/SectionFeature';
import SectionContent from './blocks/SectionContent';
import SectionTestimonials from './blocks/SectionTestimonials';
import CookieInfoBanner from '../components/blocks/CookieInfoBanner';
import Comments from '../pages/Comments';
import Layout from "../pages/Layout";

const Home = () => {
  return (
    <>
    <Layout>
      <Hero />
      <SectionFeature />
      <SectionTestimonials />
      <SectionTeam />
      {/* <SectionContent /> */}
      {/* <CookieInfoBanner /> */}
      </Layout>
    </>
  );
};

export default Home;
