import React from 'react'
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <Link to="https://www.linkedin.com/in/richish-mandal-b2a245252/" target='_blank'><BsLinkedin /></Link>
            <Link to="https://github.com/ItsRichish" target='_blank'><FaGithub /></Link>
            <Link to="https://stackoverflow.com/users/21967287/richish-mandal" target='_blank'><BsStackOverflow /></Link>
        </div>
    )
}

export default HeaderSocial