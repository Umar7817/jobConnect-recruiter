import React, { useContext } from "react";
import Navbar from "./Navbar";
// import { FaPhone, CiCalendar, CiLink, TbFileDescription } from 'react-icons/.all'; // Import your icon components
import ContextApi from "../ContextApi";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";

function PostedJobs() {
  const { postedJobs, user, deletePostedJob, appliedByCandidate } =
    useContext(ContextApi);

  // If user is not available, render a message to log in first
  if (!user) {
    return (
      <h1 className="flex justify-center items-center w-full h-screen">
        Please Login Again!!
      </h1>
    );
  }

  // If user is available, render the component
  return (
    <>
      <Navbar />
      <div>
      <h1 className="text-center font-bold text-black/50"> Total Posted Jobs : {postedJobs.length}</h1>
        {postedJobs.map((item, index) => (
          <section
            key={index}
            className="card w-1/2 container mx-auto px-2 md:py-2 py-14 rounded "
          >
            <div className="flex gap-4 flex-col sm:flex-row justify-between items-center">
              <div>
                <h2 className="text-black mb-1 text-lg font-bold">
                  Job Title : {item.jobTitle}{" "}
                </h2>

                <h3 className="text-black  mb-1">
                  Compony Name : {item.companyName}{" "}
                </h3>
                <h3 className="text-black  mb-1">
                  Job Location : {item.jobLocation}{" "}
                </h3>
              </div>
              <div className="flex w-1/2  md:flex-row sm:flex-col small gap-4 justify-between ">
                <Link
                  to={"/applied-by/:id"}
                  className="mt-12 bg-blue-800 text-white font-semibold px-4 py-2 rounded-sm cursor-pointer"
                  onClick={() => appliedByCandidate(item._id)}
                >
                  Applied By
                </Link>

                <Link
                  to={`/update-job/${item._id}/${item.companyName}/${
                    item.jobTitle
                  }/${encodeURIComponent(item.description)}`}
                  className="mt-12 bg-green-800 text-white font-semibold px-4 py-2 rounded-sm cursor-pointer"
                >
                  {" "}
                  Update{" "}
                </Link>

                <button
                  className="mt-12 bg-red-800 text-white font-semibold px-4 py-2 rounded-sm cursor-pointer"
                  onClick={() => deletePostedJob(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default PostedJobs;
