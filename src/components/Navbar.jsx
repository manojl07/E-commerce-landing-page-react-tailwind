import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="navbar hidden md:flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <a href="#">TECH</a>
          <a href="#">bags & wallets</a>
          <a href="#">Work essentials</a>
          <a href="#">collections</a>
          <a href="#">new arrival</a>
        </div>
        <div className="account">
          <i className="ri-search-line cursor-pointer"></i>
          <i className="ri-user-line cursor-pointer"></i>
          <i className="ri-shopping-bag-line cursor-pointer"></i>
        </div>
      </div>

      {/* Mobile version */}
      <div className="mob md:hidden">
        <div className="left">
          <i 
            className="ri-menu-3-fill"
            onClick={() => setMenuOpen(true)}
          ></i>
        </div>

        {/* Mobile Menu */}
        <div className={`full ${menuOpen ? 'active' : ''}`}>
          <i 
            className="ri-close-line text-2xl"
            onClick={() => setMenuOpen(false)}
          ></i>
          <a href="#" className='text-[clamp(0.6rem,1vw,0.9rem)]'>TECH</a>
          <a href="#" className='text-[clamp(0.6rem,1vw,0.9rem)]'>bags & wallets</a>
          <a href="#" className='text-[clamp(0.6rem,1vw,0.9rem)]'>Work essentials</a>
          <a href="#" className='text-[clamp(0.6rem,1vw,0.9rem)]'>collections</a>
          <a href="#" className='text-[clamp(0.6rem,1vw,0.9rem)]'>new arrival</a>
        </div>

        <div className="center">
          <img src={logo} alt="" />
        </div>

        <div className="right">
          <i className="ri-search-line"></i>
          <i className="ri-user-line"></i>
          <i className="ri-shopping-bag-line"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar