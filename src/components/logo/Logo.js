import React from 'react'
import './Logo.css';
import logo from '../../assets/logo-rogner.jpeg'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="logo">
            <Link to='/'>
                <img src={logo} alt="Logo"/>
            </Link>
        </div>
    )
}

export default Logo
