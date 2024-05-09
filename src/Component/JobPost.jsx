import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import CreatableSelect from 'react-select'
import makeAnimated from 'react-select/animated';
import ContextApi from "../ContextApi";

function JobPost() {

  const {handleSubmit, user} = useContext(ContextApi)
  const [jobTitle, setJobTitle] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [salaryType, setSalaryType] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("")
  const [companyLogo, setCompanyLogo] = useState("")
  const [description, setdescription] = useState("")
  const [skills, setSkill] = useState("")
  // const [userId, setUserId] = useState("")



  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4 ">
        <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title </label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                className="create-job-input"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name </label>
              <input
                type="text"
                defaultValue={"Ex: Microsoft"}
                className="create-job-input"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>

          {/* 2nd row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Min Price </label>
              <input
                type="text"
                defaultValue={"20k"}
                className="create-job-input"
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Max Price </label>
              <input
                type="text"
                defaultValue={"30K"}
                className="create-job-input"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          {/* 3rd row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select
                onChange={(e) => setSalaryType(e.target.value)}
                className="create-job-input"
              >
                <option value="Hourly">Hourly</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location </label>
              <input
                type="text"
                defaultValue={"Ahmedabad"}
                className="create-job-input"
                onChange={(e) => setJobLocation(e.target.value)}
              />
            </div>
          </div>

          {/* 4th row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                name=""
                id=""
                className="create-job-input"
                onChange={(e) => setExperienceLevel(e.target.value)}
              >
                <option value="Intern">Intern</option>
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo </label>
              <input
                type="text"
                placeholder="Paste Link here..."
                className="create-job-input"
                onChange={(e) => setCompanyLogo(e.target.value)}
              />
            </div>
          </div>

          {/* 5th row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-full w-full">
              <label className="block mb-2 text-lg">Description</label>
              <textarea
                onChange={(e) => setdescription(e.target.value)}
                name=""
                className="create-job-input"
                id=""
              ></textarea>
            </div>
          </div>

          {/* 5th row  */}
          {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-full w-full">
              <label className="block mb-2 text-lg">User Id</label>
              <input
                type="text"
                placeholder="Please Enter Your User ID"
                onChange={(e) => setUserId(e.target.value)}
                className="create-job-input"
              />
            </div>
          </div> */}

          {/* 6th row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-full w-full">
              <label className="block mb-2 text-lg">Skills</label>
              <input
                type="text"
                onChange={(e) => setSkill(e.target.value)}
                className="create-job-input"
              />
            </div>
          </div>

          {/* submit Button */}
          <button
            className="block mt-12 bg-blue-800 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            onClick={() => handleSubmit(
              jobTitle,
              companyName,
              minPrice,
              maxPrice,
              salaryType,
              jobLocation,
              experienceLevel,
              companyLogo,
              description,
              skills
            )}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
