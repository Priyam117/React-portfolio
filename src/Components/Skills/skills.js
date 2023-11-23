import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">Motivated B.Tech graduate with a solid academic background in Computer Science. Skilled in Java and JavaScript and eager to apply theoretical knowledge to practical situations. Seeking an entry-level position to apply technical skills, contribute to organizational success, and further develop professional growth.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Developer</h2>
            <p>A skilled and creative front-end developer with a passion for crafting visually appealing and user-friendly interfaces. Proficient in web technologies such as HTML, CSS, and JavaScript, with a strong understanding of modern front-end frameworks like React.js</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>I am a full-stack web developer with expertise in both front-end and back-end technologies. Skilled in HTML, CSS, and JavaScript for creating user interfaces, I also have experience with server-side scripting using Node.js  Familier in working with databases, including SQL and MongoDB, and implementing RESTful APIs for seamless communication between front-end and back-end components. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Designer</h2>
            <p>As a UI designer, I leverage my creativity and technical skills to transform concepts into visually stunning and user-centric interfaces. Proficient in design tools like Figma, I bring a meticulous approach to crafting intuitive and aesthetically pleasing user experiences. I excel in creating wireframes, prototypes, and high-fidelity designs, ensuring a seamless translation of design concepts into interactive web applications.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Skills