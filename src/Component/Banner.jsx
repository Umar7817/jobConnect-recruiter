import React, { useContext, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FiMapPin, FiSearch } from "react-icons/fi";
import ContextApi from "../ContextApi";

function Banner() {
    const {query, handleInput} = useContext(ContextApi)   
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "Python Developer",
      "Java Developer",
      "Graphic Designer",
    ],
    loop: {},
    typeSpeed: 120,
  });

  return (
    // max-w-screen-2x1 container mx-auto xl:px-24 px-4
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4  md:py-20 py-14 ">
      <h1 className="text-5xl font-bold text-black mb-4 ">
        {" "}
        Find Your Desired Candidate {" "}
        <span className="font-bold text-blue-800"> {text} </span>{" "}
        <span>
          {" "}
          <Cursor />{" "}
        </span>{" "}
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousand of Job Seekers are Waiting To Work In their Dream Compony.
      </p>

      <form action="">
        <div className="flex justify-start md:flex-row flex-col md:gap-1 gap-4">
          <div className="flex md:rounded-md rounded shadow-sm ring-1 ring-insert  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What postion are you looking for"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInput}
              value={query}
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          {/* <div className="flex md:rounded-none rounded shadow-sm ring-1 ring-insert  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-blue-800 py-2 px-8 text-white md:rounded-s-none rounded"
          >
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default Banner;
