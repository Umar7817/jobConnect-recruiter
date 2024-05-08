import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import ContextApi from "../ContextApi";

function Navbar() {
    const {user, getPostedJobs} = useContext(ContextApi)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <header className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="" className="text-2xl">
          JobConnect
        </a>

        <ul className="hidden md:flex gap-12">
          <Link to={"/home"}>Home</Link>
          <Link to={"/post-job"}>Post a Job</Link>
          <Link to={"/posted-jobs"}>Posted Jobs</Link>
        </ul>

        <h1>Hi, {user.name}</h1>

       

        

        <div className="md:hidden block">
          <button onClick={handleToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-black" />
            ) : (
              <GiHamburgerMenu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      <ul className={`px-4 bg-black rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/post-job"}>Post a Job</Link>
      </ul>

      
    </header>
  );
}

export default Navbar;
