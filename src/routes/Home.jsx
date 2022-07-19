import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <NavLink to='novia'>Novias</NavLink>
    </div>
  )
}

export default Home