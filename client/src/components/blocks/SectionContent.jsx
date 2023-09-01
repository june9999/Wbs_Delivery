import React from 'react';
import catBox from '../../assets/cat-box.jpg';
import catBasket2 from '../../assets/cat-basket2.jpg';

const SectionContent = () => {
  return (
    <section className="from-primary-50 dark:bg-gray-900">
      {/* <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
        About the Company
      </h2> */}
      <div className="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn't reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        {/* <div className="grid grid-cols-2 gap-4 "> */}
        <div className=" gap-4 w-1/2">
          <img
            className="w-full rounded-lg"
            src={catBasket2}
            alt="office content 1"
          />
          {/* <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={catBasket1}
            alt="office content 2"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
