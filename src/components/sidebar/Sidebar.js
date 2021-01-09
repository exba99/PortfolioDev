import React from 'react';
import './Sidebar.css';
import Logo from '../logo/Logo'
import Navbar from '../nav/Navbar'
import Social from '../social/Social';

function SideBar() {
    return (
        <div className='Sidebar'>
            <Logo />
            <Navbar />
            <Social />
        </div>
    )
}

export default SideBar
