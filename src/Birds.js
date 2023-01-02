import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Birds = () => {
  return (
    <div style={{padding:"20px"}}>
        <h1>Birds</h1>
        <Link to="/birds/parrot">parrot</Link>| {" "}
        <Outlet></Outlet>
    </div>
  )
}

export default Birds