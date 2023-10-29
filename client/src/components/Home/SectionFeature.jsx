import React from "react";
import { BiTimer } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import HomeLesstime from "./HomeLesstime";
const SectionFeature = () => {
  return (
    <section className="relative bg-white py-32">
      <p className="text-primary-500 tracking-widest leading-[3.5rem] px-[4.5rem] mb-8 text-5xl tracking-tight   dark:text-white  ">
        We are <strong>Instant </strong>
        delivery across Berlin. Get urgent parcels delivered{" "}
        <strong>from door to door </strong>
        within less than 1 hour. Our 24/7 express courier delivery service
        provides you with exceptional convenience, reliability, and peace of
        mind.
      </p>
      <div className="absolute right-[2rem] bottom-[4rem] rotate-[-10deg]">
        <HomeLesstime />
      </div>
    </section>
  );
};

export default SectionFeature;
