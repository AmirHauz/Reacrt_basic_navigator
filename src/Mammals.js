import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Mammals = () => {
  return (
    <div style={{padding:"20px"}}>
       <h1> Mammals</h1>
       
        <Link to="/mammals/horse">horse</Link>| {" "}
        <Outlet ></Outlet>
        
        </div>
  )
}

export default Mammals