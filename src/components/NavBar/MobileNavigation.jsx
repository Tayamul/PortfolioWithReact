import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={classes.MobileNavigation}>
      <CgMenu
        className={classes.Hamburger}
        size="25px"
        color="#151513"
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
