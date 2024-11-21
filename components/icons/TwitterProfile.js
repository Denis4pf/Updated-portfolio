import React from "react";

const TwitterProfile = ({ marginBottom }) => {
  return (
    <div className={`w-8 h-8 ${marginBottom}`}>
      <a
        href="https://x.com/Onwonga_"
        target="_blank"
        rel="noreferrer"
      >
       <svg
  className="dark:text-white text-dark transition-all duration-300 ease-in-out transform translate-y-0 dark:opacity-50 fill-current dark:hover:opacity-100 hover:-translate-y-1"
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
>
  <path d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z" />
</svg>

      </a>
    </div>
  );
};

export default TwitterProfile;
