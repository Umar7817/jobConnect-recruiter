import React, { useContext } from "react";
import ContextApi from "../ContextApi";
import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa6";
import { CiCalendar, CiLink } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";

function AppliedBy() {
  const { appliedBy, user } = useContext(ContextApi);

  // If user is not logged in, render a message to log in again
  if (!user) {
    return (
      <h1 className="flex justify-center items-center w-full h-screen">
        Please Login Again!!
      </h1>
    );
  }

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div>
        <h1 className="text-center font-bold text-black/50"> Applied By {appliedBy.length} Candidates</h1>
        {appliedBy && appliedBy.length > 0 ? (
          <div>
            {appliedBy.map((item, index) => (
              <section
                key={index}
                className="card w-1/2 container mx-auto px-2 md:py-5 py-14 bg-white rounded"
              >
                <div className="flex gap-4 flex-col sm:flex-row items-start">
                  <img className="h-24 w-24 aspect-auto" src="" alt="" />
                  <div>
                    <h2 className="text-black mb-1 text-lg font-bold">
                      {item.fullName}{" "}
                    </h2>
                    <h3 className="text-lg font-semibold mb-2">
                      {item.jobProfile}
                    </h3>
                    <span className="flex items-center gap-2">
                      {" "}
                      <FaPhone /> {item.mobileNumber}
                    </span>
                    <span className="flex items-center gap-2">
                      {" "}
                      <CiCalendar className="text-lg" /> {item.noticePeriod} Months
                    </span>
                    <a target="blank" href={item.resumeLink}>
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <CiLink className="text-lg" />
                        Resume Link
                      </span>
                    </a>
                    <span className="flex items-center gap-2">
                      {" "}
                      <TbFileDescription className="text-lg" /> {item.description}
                    </span>
                  </div>
                  <div></div>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <h1 className="flex justify-center items-center w-full h-screen">
            No applicants found.
          </h1>
        )}
      </div>
    </>
  );
}

export default AppliedBy;
