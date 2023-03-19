import React from 'react'
import './navBar.css'

const NavBar = () => {
  return (
    <header className='container nav__container'>
        <p>Tayamul Rai</p>
        <ul className='nav-list'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </header>
  )
}

export default NavBar