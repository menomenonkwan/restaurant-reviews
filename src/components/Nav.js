import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { navbar } from '../styles/nav.module.css'

export default function Nav() {
  return (
    <div className={navbar}>
      <Link to="/">
        <StaticImage src="../images/logo.png" 
          width={40}
          height={40}
        />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/journal">Journal</Link>
    </div>      
  )
}
