import React from 'react';
import runningCat from '../../assets/runningCat.jpg';
import { BiTimer } from 'react-icons/bi';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const SectionFeature = () => {
  return (
    <section className="bg-gradient-to-t from-primary-50 to-primary-100 dark:bg-gray-900 pt-8">
      <div className="py-2 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
        <div className="gap-4 mb-16">
          <div className="mx-auto max-w-screen-md mb-8 lg:mb-16">
            <div>
              <h2 className="text-primary-800 text-center mb-8 text-4xl tracking-tight font-extrabold  dark:text-white">
                Instant delivery across Berlin
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Get urgent parcels delivered from door to door within less than
                1 hour. Our 24/7 express courier delivery service provides you with exceptional convenience, reliability, and peace of mind. At RapidCats, we understand the importance of a seamless and worry-free delivery experience.
              </p>
            </div>
          </div>
          {/* <img
            className=" rounded-lg"
            src={runningCat}
            alt="cat in bike basket"
          /> */}
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <BiTimer />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              lightning-fast
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We guarantee fast and timely delivery of your packages. Our
              express courier service is designed to prioritize speed and
              efficiency, ensuring that your shipments reach their destinations
              promptly. Whether it's a time-sensitive document, a last-minute
              gift, or urgent business materials, you can rely on us to deliver
              with utmost speed and precision.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <MdOutlineNotificationsActive />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Real-time Updates
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              With our advanced tracking capabilities, you can easily monitor
              the progress of your shipment in real-time. Our user-friendly
              online tracking system or mobile app allows you to know the exact
              location of your package and provides estimated delivery times.
              You can rest assured knowing that you have full visibility and
              control over your shipment from pickup to delivery.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <AiFillSafetyCertificate />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Secure and Safe Handling
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Your package's safety is our top priority. We guarantee secure and
              safe handling throughout the delivery process. Our experienced and
              trained professionals follow strict protocols to ensure that your
              items are packaged securely and protected during transit. In the
              unlikely event of any damages or losses, we offer insurance
              options to provide you with added financial protection and peace
              of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeature;
