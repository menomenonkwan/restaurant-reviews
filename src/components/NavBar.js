import React from 'react'
import Nav from './Nav'
import Social from './Social'
import { header } from '../styles/nav.module.css'


export default function NavBar() {
  return (
    <nav className={header}>
      <Nav />
      <Social />
    </nav>
  )
}
