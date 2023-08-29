import React from 'react';
import runningCat from '../assets/runningCat.jpg';
import fastKitten from '../assets/fast-kitten.gif';
import ChatbotStart from './ChatbotStart';
import MapHome from './MapHome';
// import catBox from '../assets/cat-box.jpg';

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        {/* Background image --- parent style: opacity 0.99 relative --- child: img opacity absolute z-index w h cover --- */}
        <div
          className="grid max-w-screen-xxl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
          style={{ opacity: 0.99, position: 'relative' }}
        >
          <img
            src={runningCat}
            alt="Transparent Image"
            style={{
              opacity: 0.6,
              zIndex: -1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <div className="place-self-center lg:col-span-7 p-10">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Your Purrcel <br />
              is our Purriority
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              RapidCats is an on-demand local delivery service that promises
              lightning-fast pickup and dropoff of packages and documents within
              your city, meow!
            </p>
            <MapHome />

            {/* CTA button 1 */}
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a> */}

            {/* CTA button 2 */}
            {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Customer Support
            </a> */}
          </div>
          {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src={runningCat} alt="running cat" />
            <div
              style={{
                borderRadius: '10%',
                overflow: 'hidden',
                display: 'inline-block',
                border: '4px solid black',
                zIndex: -1,
              }}
            >
              <img
                src={runningCat}
                alt="running cat"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div> 
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
