import React, { useContext } from 'react'
import ContextApi from '../ContextApi'
import Navbar from './Navbar'
import Banner from './Banner'
import Candidate from './Candidate'
import Card from './Card'
import Pagination from './Pagination'
import Leftside from './Leftside'

function Home() {
    const {user} = useContext(ContextApi)

    if (!user) {
      return (
        <h1 className="flex justify-center items-center w-full h-screen">
          Please Login Again!!
        </h1>
      );
    }
    
  return (
    <>    
     <div>
        <Navbar/>
        <Banner/>

        <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
          <div className="bg-white p-4 rounded">
              <Leftside/>
          </div>
          <div className="col-span-2 bg-white p-4 rounded">
          <Card/>
          </div>
          <div  className="bg-white p-4 rounded">
              <Pagination />
          </div>
        </div>
       
    </div>

</>

  )
}

export default Home