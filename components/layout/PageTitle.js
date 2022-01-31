import React from "react";

export const PageTitle = ({ title, descr }) => {
  return (
    <div className="font-light w-full text-lightGrayCyan">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-2">
        {title}
      </h1>
      <p className="text-2xl font-thin sm:text-3xl lg:text-4xl w-11/12 sm:w-5/6 md:w-11/12 lg:w-4/5 xl:w-4/5">
        {descr}
      </p>
    </div>
  );
};
