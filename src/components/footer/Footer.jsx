import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Link to='/' className='footer__logo' >Richi</Link>

      <ul className="permalinks">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </footer>
  )
}

export default Footer