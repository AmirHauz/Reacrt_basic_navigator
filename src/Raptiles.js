import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Raptiles = () => {
  return (
    <div style={{padding:"20px"}}>
        <h1>Raptiles</h1>
        <Link to="/raptiles/turtle">turtle</Link>| {" "}
        <Outlet></Outlet>
        </div>
  )
}

export default Raptiles