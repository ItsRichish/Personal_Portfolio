import React from 'react'
import { Link } from 'react-router-dom'

import './project.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
// import IMG5 from '../../assets/portfolio5.png'

const Project = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Trap - Music App",
      github: "https://github.com/ItsRichish/Trap",
      demo: "https://richi19.netlify.app/"
    },
    {
      id: 2,
      image: IMG2,
      title: "Text Analyz",
      github: "https://github.com/ItsRichish/textanlys",
      demo: "https://itsrichish.github.io/textanlys/"
    },
    {
      id: 3,
      image: IMG3,
      title: "HeyNotes - Notes on cloud",
      github: "https://github.com/ItsRichish/Trap",
      demo: "https://google.com"
    },
    {
      id: 4,
      image: IMG4,
      title: "NewsVerse",
      github: "https://github.com/ItsRichish/NewsVerse",
      demo: "https://google.com"
    },
  ]
  return (
    <section id='projects'>
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="project__item">
                <div className="project__image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="project__CTA">
                  <Link to={github} className='btn' target='_blank'>Gitub</Link>
                  <Link to={demo} className='btn btn-primary' target='_blank'>Live Demo</Link>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project