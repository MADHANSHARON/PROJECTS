import React from 'react'
import './Background.css'
import darkarrow from '../../assets/dark-arrow.png'

export const hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h2>We Ensure better education for a better world</h2>
        <p>jcnirfncirncuirnvirnvindmcdejdnur3jnfnhfjdjnshd dedh dhb eud eddn4d  eid in2jendujeifjijfiojkcmknbcdybrgfrygihcbhbgvsdtcunfjrnf </p>
       <button className='btn'>Explore more <img src={darkarrow} alt="" /> </button>
       </div>

    </div>
  )
}
export default hero