import React from 'react'
import { Link } from 'react-router-dom'


export default function PollHomePage() {
  return (
    <>
      <div className='pollContainer'>
        <div className='pollStart'>
            <p className='headLineFirst'>PollMe - Get Started!</p>
            <p className='quoteLine'>Your Voice Matters!!</p>
            <Link to="/login">
            <button className='getStart'>Get Started!</button>
            </Link>
        </div>
      </div>
    </>
  )
}
