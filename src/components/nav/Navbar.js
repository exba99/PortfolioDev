import React from 'react';
import ItemNavbar from '../itemNav/ItemNavbar';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import BrightnessHighRoundedIcon from '@material-ui/icons/BrightnessHighRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <Link to='/home'>
                <ItemNavbar classe="block-home" Icon={HomeRoundedIcon} Text="HOME"/>
            </Link>
            <Link to='/about'>
                <ItemNavbar classe="block-about" Icon={PersonRoundedIcon} Text="ABOUT"/>
            </Link>
            <ItemNavbar classe="block-skills" Icon={BrightnessHighRoundedIcon} Text="SKILLS"/>
            <ItemNavbar classe="block-contact" Icon={EmailRoundedIcon} Text="CONTACT"/>
        </div>
    )
}

export default Navbar
