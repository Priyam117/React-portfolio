import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import downloadImg from '../../assets/download-img.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const resumeLink = 'https://drive.google.com/file/d/1Gj8VVfXVMBEv0wENeATiFr-l8_GgRgNC/view?usp=drive_link';
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-85} duration={500} className='desktopMenuListItem'>Contact Me</Link>
      </div>
      <a href={resumeLink} download="Your_Resume.pdf" className='desktopMenuBtn' target='_blank' rel="noreferrer">
        <img src={downloadImg} alt="" className="desktopMenuImg" />Resume
      </a>
      <img src={menu} alt="menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Home</Link>
       <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>About</Link>
       <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Portfolio</Link>
       <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Contact</Link>
       {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Contact</Link> */}
      </div>
    </nav>
  )
}

export default Navbar