import NavLinks from "./NavLinks";
import classes from './NavBar.module.css'
import {CgMenu} from 'react-icons/cg'

const MobileNavigation = () => {
  return (
    <nav className={classes.MobileNavigation}>
      <CgMenu className={classes.Hamburger} size="25px" color='#151513' />
      <NavLinks />
    </nav>
  );
};

export default MobileNavigation;
