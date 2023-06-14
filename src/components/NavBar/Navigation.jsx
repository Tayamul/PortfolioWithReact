import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
