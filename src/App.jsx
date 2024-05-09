import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import JobPost from "./Component/JobPost";
import PostedJobs from "./Component/PostedJobs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContextApi from "./ContextApi";
import UpdateJob from "./Component/UpdateJob";
import AppliedBy from "./Component/AppliedBy";


function App() {
  const nevigate = useNavigate();
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const [candidate, setCandidate] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [postedJobs, setPostedJobs] = useState([]);
  const [updatedJob, setUpdatedJob] = useState([])
  const [deleteJob, setDeleteJob] = useState([])
  const [appliedBy, setAppliedBy] = useState([])
  const [jobPost, setJobPost] = useState("")

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const register = (name, email, password) => {
    if(!name || !email || !password) {
      return toast.error("Please Fill Details")
    }
    // Register function
    fetch("https://jobconnect-server.onrender.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success("Successfully created account! please Login");
          nevigate("/");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const login = (email, password) => {

    if(!email || !password) {
      return toast.error("Please Fill Details")
    }
    // Login function
    fetch("https://jobconnect-server.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success("Login Successful!");
          setUser(data);
          nevigate("/home")
          localStorage.setItem("userData", JSON.stringify(data));
        }
        
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    // Fetch candidate data
    fetch("https://jobconnect-server.onrender.com/job/get-candidates")
      .then((res) => res.json())
      .then((data) => {
        setCandidate(data);
      });
  }, []);

  useEffect(() => {
    if ( user && user.token) {
      getPostedJobs();
    }
  }, [user, updatedJob, deleteJob, jobPost]);

  

  const filterData = candidate.filter(
    (candidat) =>
      candidat.jobProfile.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  

  const handleSubmit = (
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
  ) => {
    if(!jobTitle || !companyName || !minPrice || !maxPrice || !salaryType || !jobLocation || !experienceLevel || !companyLogo || !description ||  !skills ) {
      return toast.error("please fill all information")
    }
     JSON.stringify({
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
    })
    
    fetch("https://jobconnect-server.onrender.com/job/post-job", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": user.token
      },
      body: JSON.stringify({
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
      
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success == false) {
        toast.error(data.message);
      } else {
        toast.success("Job Posted Successfully");
        setJobPost(data);
        nevigate("posted-jobs")
      }
    
    })
    .catch((err) => console.log(err.message));
  };

  const handleUpdate = (
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    experienceLevel,
    companyLogo,
    description,
    userId,
    skills
  ) => {
    if(!jobTitle || !companyName || !minPrice || !maxPrice || !salaryType || !jobLocation || !experienceLevel || !companyLogo || !description || !userId || !skills ) {
      return toast.error("please fill all information")
    }
    JSON.stringify({
      _id,
      jobTitle,
      companyName,
      minPrice,
      maxPrice,
      salaryType,
      jobLocation,
      experienceLevel,
      companyLogo,
      description,
      userId,
      skills
    })
    
    fetch(`https://jobconnect-server.onrender.com/job/edit-jobs/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Authorization": user.token
      },
      body: JSON.stringify({
        jobTitle,
        companyName,
        minPrice,
        maxPrice,
        salaryType,
        jobLocation,
        experienceLevel,
        companyLogo,
        description,
        userId,
        skills
      
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success == false) {
        toast.error(data.message);
      } else {
        toast.success("Job Updated Successfully");
        setUpdatedJob(data);
       
      }
      
    })
    .catch((err) => console.log(err.message));
  };

 const deletePostedJob = (_id) => {
  fetch(`https://jobconnect-server.onrender.com/job/delete-jobs/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "Authorization": user.token
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === false) {
        toast.error(data.message);
      } else {
        toast.success("Jobs Deleted Successfully");
        setDeleteJob(data);
      }
      
    })
    .catch((err) => console.log(err.message));
 }

 const appliedByCandidate =  async (_id) => {
  await fetch(`https://jobconnect-server.onrender.com/job/applied-by/${_id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": user.token
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === false) {
        toast.error(data.message);
      } else {
        toast.success("Applications Found Successfully");
        setAppliedBy(data);
      }
      
    })
    .catch((err) => console.log(err.message));
 }
    
    
  

  const getPostedJobs =  () => {
    fetch("https://jobconnect-server.onrender.com/job/get-jobs", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": user.token
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          toast.error(data.message);
        } else {
          toast.success("Jobs Fetched Successfully");
          setPostedJobs(data);
        }
        
      })
      .catch((err) => console.log(err.message));


  };

  // c
  

 

  return (
    <>
      <ToastContainer />
      <ContextApi.Provider
        value={{
          register,
          login,
          user,
          query,
          handleInput,
          candidate,
          filterData,
          handleSubmit,
          getPostedJobs,
          postedJobs,
          handleUpdate,
          deletePostedJob,
          appliedByCandidate,
          appliedBy
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post-job" element={<JobPost />} />
          <Route path="/posted-jobs" element={<PostedJobs />} />
          <Route path="/update-job/:_id/:companyName/:jobTitle/:description" element={<UpdateJob/>} />
          <Route path="/applied-by/:id" element={<AppliedBy/>} />
        </Routes>
      </ContextApi.Provider>
    </>
  );
}

export default App;
