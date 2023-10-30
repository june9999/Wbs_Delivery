import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/Auth";
import runningCat from "../../assets/runningCat.jpg";
// import ChatbotStart from "../../ChatbotStart";
import cat2 from "../../assets/cat2.png";
import HeroVideo from "../../../public/HeroVideo.mp4";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const videoRef = useRef(null);
  // change the url when we click createOrder Button
  const handleClick = () => {
    if (context.user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <>
      <section className="bg-white shadow-lg">
        <div
          className="grid max-w-screen-xxl px-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 shadow-lg"
          style={{ opacity: 0.99, position: "relative" }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              opacity: 0.5,
              zIndex: -1,
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            ref={videoRef}
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* container for  */}
          <div className="backdrop-blur-lg rounded-2xl min-w-[50%] max-w-[70%] place-self-start lg:col-span-6 p-6 ml-10">
            <h1 className="text-gray-300  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Your Purrcel is our Purriority
            </h1>
            <p className="max-w-2xl mb-6 font-bold text-gray-300 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Berlin's Express Delivery Bike Couriers for Package and Document
              Shipping at cat-speed. Meow!
            </p>

            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-100 hover:bg-primary-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 shadow-2xl"
            >
              Create Order
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
