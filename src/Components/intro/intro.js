import React from 'react';
import './intro.css';
// import bg from '../../assets/image.png';
// import pimg from '../../assets/IMG_20211221_204115_216.jpg';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Priyam</span> <br /> Frontend Developer</span>
        <p className="introPara">Motivated B.Tech graduate with a solid academic background
         in Computer Science. <br />Skilled in React.js and JavaScript and eager to apply
          theoretical knowledge to practical situations.</p>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-85} duration={500}><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
      </div>
      {/* <img src={bg} alt="" className="bg" /> */}
    </section>
  )
}

export default Intro