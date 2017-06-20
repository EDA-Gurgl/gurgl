import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () =>
   (
   <div className="pageNotFound">
      This page does not exist!<br />
    <Link to="/">Go back home</Link>
    <Link to="/clothing">View our clothes</Link>
   </div>
   )

export default Footer
