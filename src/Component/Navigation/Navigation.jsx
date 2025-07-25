import React from 'react'
import './Navigation.scss'
import { FaBars, FaTimes, FaCartPlus } from 'react-icons/fa'
import logo from '../../Image/Logo.png'
import { CgProfile } from "react-icons/cg";

export default function Navigation() {
  return (
    <div className='navigation-container'>
      <nav>
        <input type="checkbox" id='check' className='check' />
        <label htmlFor='check'>
          <FaBars className='btn' />
          <FaTimes className='cancel' />
        </label>
        <div className='name'>
          <img src={logo} alt="Logo"/>
        </div>
        <ul className='center'>
          <li><a href="/">Home</a></li>
          <li><a href="/#category">Category</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact Us</a></li>
        </ul>
        <ul className='right'>
          <li>
            <a href="/booking">
              <span className="border-anim">
                GET IN TOUCH
                <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                  <rect x="0" y="0" width="100" height="40" rx="5" ry="5"></rect>
                </svg>
              </span>
            </a>
          </li>
          {/* <li>
            <a href="#profile">
              <span className="border-anim">
                Profile
                <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                  <rect x="0" y="0" width="100" height="40" rx="5" ry="5"></rect>
                </svg>
              </span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
