import React from 'react';
import Hero from '../components/Hero';
import FormUpdate from '../components/blocks/FormUpdate';
import ModalMessage from '../components/blocks/ModalMessage';
// import ModalDelete from '../components/blocks/ModalDelete';
import CookieInfoBanner from '../components/blocks/CookieInfoBanner';

// Based on wireframe, we need to add a form (to calcuate delivery quickly) + successful stories inside  +   trusted companies

const Home = () => {
  return (
    <>
      <Hero />
      <CookieInfoBanner />
      {/* <ModalMessage /> */}
      {/* <ModalDelete/> */}
      {/* <FormUpdate/> */}

      <p>Form to submit quickly</p>
      <p>Successful stories</p>
      <p>Trusted companies</p>
    </>
  );
};

export default Home;
