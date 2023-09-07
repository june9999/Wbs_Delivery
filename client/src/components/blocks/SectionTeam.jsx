import React from 'react';
import cat01 from '../../assets/cat01.gif';
import catA from '../../assets/cat-fish.png';
import catB from '../../assets/cat-heart.png';
import catC from '../../assets/cat-box.png';
import cat03 from '../../assets/cat03.gif';
import cat1 from '../../assets/cat1.png';
import cat2 from '../../assets/cat2.png';
import catLaptop from '../../assets/catLaptop.png';

const SectionTeam = ({}) => {
  return (
    <section className="bg-primary-50 dark:bg-gray-900 pb-10">
      <div className="py-2 px-4 mx-auto max-w-screen-xl  lg:py-8 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-primary-800 dark:text-white">
            Team
          </h2>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
          {/* grid */}

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src={catA}
              alt="Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary-800 dark:text-white">
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
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary-800 dark:text-white">
              <a href="#">Wenjun</a>
            </h3>
            <p>CTO</p>
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <img
              className="mx-auto mb-4 w-30 h-36"
              src={catLaptop}
              alt="Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary-800 dark:text-white">
              <a href="#">Jay</a>
            </h3>
            <p>Marketing</p>
          </div>
        </div>
        <section className="bg-gradient-to-b from-primary-50 to-primary-100 dark:bg-gray-900 rounded-lg">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6 shadow-lg rounded-lg">
            <div className="mx-auto mt-12 mb-8 max-w-screen-sm lg:mb-16">
              <p className="text-justify font-dark text-gray-500 sm:text-lg dark:text-gray-400">
                At RapidCats, we've also mastered the coding game to relauch our
                website. Our talented team of Full-Stack Web Developers has
                created a seamless, user-friendly experience prioritizing
                efficiency and an exceptional customer experience supported by
                the <b>Flowbite Tailwind Component Library</b> and the
                interactive
                <b>React Simple Chatbot</b>. We also implemented the{' '}
                <b>Google Maps Matrix API</b> to show delivery routes on a map
                and we used a sophisticated{' '}
                <b>Uber Price Calculation Algorithm</b> that takes various
                variables into account. Using the <b>Socket.io Library</b> we
                were also able to add <b>Real-Time Notifications</b> for the
                employees to see and claim new customer orders immediately. We
                take pride in our collaboration and commitment to excellence,
                continuously improving to deliver the best online experience for
                our cat-loving customers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SectionTeam;
