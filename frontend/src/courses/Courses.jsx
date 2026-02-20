import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
      <Navbar />
      {/* We use min-h-screen to ensure the footer stays at the bottom 
          even if the book list is short. 
      */}
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  )
}

export default Courses