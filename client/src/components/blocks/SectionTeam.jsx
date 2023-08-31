import React from 'react';
import cat01 from '../../assets/cat01.gif';
import catA from '../../assets/cat-fish.jpg';
import catB from '../../assets/cat-heart.png';
import catC from '../../assets/cat-box.png';
import cat03 from '../../assets/cat03.gif';
import cat1 from '../../assets/cat1.png';
import cat2 from '../../assets/cat2.png';

const SectionTeam = ({}) => {
  return (
    <section className="bg-white dark:bg-gray-900 mb-10">
      <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {/* grid */}

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src={catA}
              alt="Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Anusha</a>
            </h3>
            <p>CEO</p>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src={catB}
              alt="Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Wenjun</a>
            </h3>
            <p>CTO</p>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src={catC}
              alt="Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Jay</a>
            </h3>
            <p>Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
