import React, { useContext } from "react";
import ContextApi from "../ContextApi";
import { ImProfile } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { CiCalendar, CiLink } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";

function Card() {
  const { candidate, filterData } = useContext(ContextApi);

  return (
    <div>
      {filterData.map((can, index) => {
        return (
          <section key={index} className="card max-w-screen-2/1 container mx-auto  px-2 md:py-5 py-14 bg-white rounded ">
            <div className="flex gap-4 flex-col sm:flex-row items-start">
              <img className="h-24 w-24 aspect-auto" src="" alt="" />
              <div>
                <h2 className="text-black mb-1 text-lg font-bold">
                  {can.fullName}{" "}
                </h2>
                <h3 className="text-lg font-semibold mb-2">{can.jobProfile}</h3>
                <span className="flex items-center gap-2">
                  {" "}
                  <FaPhone /> {can.mobileNumber}
                </span>
                <span className="flex items-center gap-2">
                  {" "}
                  <CiCalendar className="text-lg" /> {can.noticePeriod} Months
                </span>
                <a target="blank" href={can.resumeLink}>
                  {" "}
                  <span className="flex items-center gap-2">
                    {" "}
                    <CiLink className="text-lg" />Resume Link
                  </span>
                </a>
                <span className="flex items-center gap-2">
                    {" "}
                    < TbFileDescription  className="text-lg" /> {can.description}
                  </span>
              </div>
              <div></div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Card;
