import React from 'react'
import './navBar.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <header className='container nav__container'>
        <p>Tayamul Rai</p>
        <Navigation/>
        <MobileNavigation/>
    </header>
  )
}

export default NavBar 