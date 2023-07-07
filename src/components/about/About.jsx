import React from 'react'
import './about.css';
import IM from '../../assets/img2.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IM} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Student</small>
            </article>
            <article className='about_card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Student</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>I'm very ambitious fullstak developer looking for a role in established IT company with the oppurtutnity to work with the latest technologies on challenging and diverse projects
            <br />
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time
          </p>
          
          <Link to="/contact" className='btn btn-primary'>Let's Talk</Link>
        </div>
      </div>
    </section>
  )
}

export default About