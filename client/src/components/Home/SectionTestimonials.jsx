import React from "react";
import Testimonials from "./Testimonials";

const SectionTestimonials = () => {
  return (
    <>
      <section className="bg-stone-200 py-[6rem] flex items-center px-[4.5rem]">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-primary-800 dark:text-white">
            We are trusted by forward thinking customers
          </h2>
        </div>

        {/* testimonials rows */}
        <div className="flex flex-col">
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default SectionTestimonials;
