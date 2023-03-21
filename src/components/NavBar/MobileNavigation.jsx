import NavLinks from "./NavLinks";
import classes from './navBar.css'

const MobileNavigation = () => {
  return (
    <nav className={classes.MobileNavigation}>
      <NavLinks />
    </nav>
  );
};

export default MobileNavigation;
