import React from "react";

const Footer = () => {
  return (
    <footer className="py-[2rem] mx-[1rem]">
      <div className="grid grid-cols-1 sm:mx-20 sm:py-8 md:grid-cols-3 my-[5em]">
        <div>
          <h2 className="grid-span-1 mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Office
          </h2>
          <p>WBS CODING SCHOOL</p>
          <p>Weiskopffstraße 16, 12459 Berlin</p>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Contact
          </h2>
          <p>We are nice and friendly :） </p>
          <a
            href="mailto:wenjunxue0@gmail.com"
            className="hover:bg-light hover:text-dark"
          >
            Email us{" "}
          </a>
        </div>
      </div>
      <div className="flex flex-col md:px-20 py-6 md:flex-row md:items-center md:justify-between">
        <span className="text-lg text-black sm:text-center">
          © 2023 <a href="">RapidCats</a> All Rights Reserved.
        </span>

        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
          {/* github */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/june9999"
            className="text-gray-900 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="www.linkedin.com/in/wenjunxue"
          >
            <svg
              fill="#000000"
              height="40px"
              width="40px"
              version="1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 310 310"
              xml:space="preserve"
            >
              <g id="XMLID_801_">
                <path
                  id="XMLID_802_"
                  d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                />
                <path
                  id="XMLID_803_"
                  d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                />
                <path
                  id="XMLID_804_"
                  d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
