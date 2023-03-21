const NavLinks = ({isMobile, closeMobileMenu}) => {
    return (
        <ul className='nav-list'>
        <li onClick={() => isMobile && closeMobileMenu()}><a href='#home'>Home</a></li>
        <li onClick={() => isMobile && closeMobileMenu()}><a href='#about'>About</a></li>
        <li onClick={() => isMobile && closeMobileMenu()}><a href='#projects'>Projects</a></li>
        <li onClick={() => isMobile && closeMobileMenu()}><a href='#contact'>Contact</a></li>
    </ul>
    );
}

export default NavLinks;