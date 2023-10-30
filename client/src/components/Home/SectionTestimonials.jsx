import React from "react";
import Testimonials from "./Testimonials";

const SectionTestimonials = () => {
  return (
    <>
      <section className="bg-stone-200 py-[6rem] flex flex-col md:flex-row px-[2rem] md:px-[4rem]">
        <div className="md:max-w-[45%] ">
          <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl text-start md:tracking-wide md:leading-[3.5rem] ">
            We are trusted by <strong>forward thinking </strong>
            customers
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
