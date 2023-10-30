import React from "react";
import { motion } from "framer-motion"; // framer motion library
import HomeLesstime from "./HomeLesstime";
const SectionFeature = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-48 ">
      <p className="text-primary-500 tracking-widest px-[2rem] md:leading-[3.5rem] md:px-[4.5rem] md:mb-8 text-2xl md:text-6xl     ">
        We are <strong>Instant </strong>
        delivery across Berlin. Get urgent parcels delivered{" "}
        <strong>from door to door </strong>
        within less than 1 hour. Our 24/7 express courier delivery service
        provides you with exceptional convenience, reliability, and peace of
        mind.
      </p>
      <motion.div
        initial={{ rotate: 60 }}
        whileInView={{ rotate: -10 }}
        transition={{
          type: "spring",
        }}
        className="hidden md:flex md:absolute md:right-10 md:bottom-20"
      >
        <HomeLesstime />
      </motion.div>
    </section>
  );
};

export default SectionFeature;
