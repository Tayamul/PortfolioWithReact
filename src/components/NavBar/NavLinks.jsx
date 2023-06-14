import { motion } from "framer-motion";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="nav-list">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#home">Home</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#about">About</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#projects">Projects</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a href="#contact">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
