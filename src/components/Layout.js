import React from 'react'
import '../styles/global.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ pageTitle, children }) {
  return (
    <main>
      <title>{pageTitle}</title>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}
