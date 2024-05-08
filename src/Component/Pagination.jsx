import React from "react";
import { FaRocket } from "react-icons/fa6";

function Pagination() {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Candidates Fast
        </h3>
        <p className="text-black/70 text-base mb-4 ">Upgrade to Premium</p>
        <div>
          <button className="w-full block py-2 pl-3 border focus:outline-none bg-blue-800 rounded rounded-sm text-white cursor-pointer font-semibold">
            {" "}
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
