import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () =>
   (
   <div className="pageNotFound container centered">
    <h2>Oops this page doesn't exist!</h2>
    <Link to="/">Go back home</Link><br />
    <Link to="/clothing">View our clothes</Link>
   </div>
   )

export default PageNotFound
