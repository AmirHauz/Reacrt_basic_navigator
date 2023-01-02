import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Praditors = () => {
  return (
    <div style={{padding:"20px"}}>
      <h1> if you knew them....</h1>
      <Link to="/praditors/dog">dogas</Link>| {" "}
      <Link to="/praditors/cat">cat</Link>| {" "}
      <Outlet></Outlet>
    </div>
  )
}

export default Praditors