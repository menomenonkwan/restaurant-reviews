import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { social } from '../styles/nav.module.css'
import { Link } from 'gatsby'

export default function Social() {
  return (
    <div className={social}>
      <Link to="">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link to="">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
    </div>
  )
}
