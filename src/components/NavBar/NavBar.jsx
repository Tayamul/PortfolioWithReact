import React from 'react'
import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <header className={classes.NavBar}>
        <p>Tayamul Rai</p>
        <Navigation/>
        <MobileNavigation/>
    </header>
  )
}

export default NavBar 