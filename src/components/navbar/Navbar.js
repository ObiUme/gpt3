import React from 'react'
import {RiMneu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
//BEM -> Block Element Modifier

const Navbar = () => {
    return (
        <div className='gpt3_navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gtp3__navbar-links_logo'>
                    <img src={logo} alt='logo'/>
                </div>
            </div>
            Navbar
        </div>
    )
}

export default Navbar
