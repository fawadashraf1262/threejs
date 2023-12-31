import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'
const Jumbotron = () => {
  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className="logo" src={Iphone} alt="" />
        <p className='text'>Big and bigger.</p>
        <span className='description'>
            From $41.62/mo. for 24 mo. or $299 before trade-in
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className='link' href="/">Learn more</a>
            </li>
        </ul>
        <img className='iphone-img' src={HoldingIphone} alt="holding iphone" />
    </div>
  )
}

export default Jumbotron