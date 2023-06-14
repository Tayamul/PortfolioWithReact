import React from "react";
import classes from "./NavBar.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className={classes.NavBar}>
      <motion.p initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}>
        Tayamul Rai
      </motion.p>
      <Navigation />
      <MobileNavigation />
    </nav>
  );
};

export default NavBar;
