import React from 'react'
import {Outlet, Link} from "react-router-dom"
import Ads from './Ads'

const App = () => {
  return (
    <div style={{padding:"20px"}}>
    <h1>The Zoo</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom:"1rem"}}>
        <Link to="/praditors"> praditors</Link>|{" "}
        <Link to="/birds"> birds</Link>|{" "}
        <Link to="/mammals"> mammals</Link>|{" "}
        <Link to="/raptiles"> raptiles</Link>|{" "}
      </nav>
      <Outlet style={{padding:"2px"}}/>
      <Ads></Ads>


    </div>

  )
}

export default App