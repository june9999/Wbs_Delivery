import React from 'react';

const SectionTestimonials = () => {
  return (
    <>
      <section className="bg-primary-50 dark:bg-gray-900">
        <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6" />
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-primary-800 dark:text-white">
            Testimonials
          </h2>
          {/* <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          
          </p> */}
        </div>
        {/* testimonial centered */}
        {/* 
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">
                  "abc"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section> */}

        {/* testimonials rows */}
        <div className="grid pb-8 lg:pb-12 lg:grid-cols-2 max-w-screen-xl mx-auto">
          {/* quote */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-primary-50">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <section className="bg-gradient-to-t from-primary-50 to-primary-100 dark:bg-gray-900 rounded-lg ">
                <div className="rounded-lg max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6 shadow-lg">
                  <figure className="text-left max-w-screen-md mx-auto">
                    {/* quotaion mark svg */}
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* end quotaion mark svg */}

                    <blockquote>
                      <p className="text-lg font-medium text-gray-500 dark:text-white">
                        "I needed an urgent document delivered to a client on the other side of the country, and I was worried about meeting the deadline. Thankfully, I chose RapidCats for their express courier service. Not only did they deliver the document on time, but the real-time tracking feature kept me updated throughout the entire process. Their professionalism and commitment to timely delivery truly impressed me. I highly recommend their services to anyone in need of fast and reliable courier service."
                      </p>
                    </blockquote>
                    {/* profile picture */}
                    
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src="https://i.pinimg.com/736x/5c/4e/28/5c4e28c8993be95ae616aaf6fb774cda.jpg"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Micheal Gough
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Meow.com
                        </div>
                      </div>
                    </figcaption>
                    {/* end profile picture */}
                  </figure>
                </div>
              </section>
            </blockquote>
          </figure>
          {/* quote */}

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-primary-50">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <section className="bg-gradient-to-t from-primary-50 to-primary-100 dark:bg-gray-900 rounded-lg">
                <div className="rounded-lg max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6 shadow-lg">
                  <figure className="text-left max-w-screen-md mx-auto">
                    {/* quotaion mark svg */}
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* end quotaion mark svg */}

                    <blockquote>
                      <p className="text-lg font-medium text-gray-500 dark:text-white">
                        "I used RapidCats' express courier service to send a fragile package. I was concerned about the safety of the item, but the team at RapidCats assured me that they would handle it with care. I was relieved to receive the package in perfect condition. Their attention to detail and secure handling exceeded my expectations. Their customer service was also exceptional, answering all my queries promptly. I am extremely satisfied with their service and will definitely use them for all my future courier needs."
                      </p>
                    </blockquote>
                    {/* profile picture */}
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src="https://i.redd.it/uhlci81csby41.png"
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Kitty Poo
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          Employee at Paw.com
                        </div>
                      </div>
                    </figcaption>
                    {/* end profile picture */}
                  </figure>
                </div>
              </section>
            </blockquote>
          </figure>
        </div>
      </section>
    </>
  );
};

export default SectionTestimonials;
