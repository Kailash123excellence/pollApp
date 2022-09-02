import React from 'react'
import PollNavbar from './common/Navbar/navbar'
export default function PollHomePage() {
  return (
    <>
      <div className='pollContainer'>
        {/* <PollNavbar/> */}
        <div className='pollStart'>
            <p className='headLineFirst'>PollMe - Get Started!</p>
            <p className='quoteLine'>Your Voice Matters!!</p>
            <button className='getStart' onClick={""}>Get Started!</button>
        </div>
      </div>
    </>
  )
}
