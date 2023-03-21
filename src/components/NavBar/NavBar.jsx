import React from 'react'
import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <nav className={classes.NavBar}>
        <p>Tayamul Rai</p>
        <Navigation/>
        <MobileNavigation/>
    </nav>
  )
}

export default NavBar 