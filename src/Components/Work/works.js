import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">I take pride in paying ateention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/Crypto-Search-Application/', '_blank')}  />
        <img src={Portfolio3} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/News-Corner/', '_blank')} />
        <img src={Portfolio2} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/Weather-app/', '_blank')} />
        <img src={Portfolio4} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/GitHub-finder/', '_blank')} />
        <img src={Portfolio5} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/Home-Assignment/Day-15/index.html', '_blank')} />
        <img src={Portfolio6} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/Home-Assignment/Day-12/index.html', '_blank')} />
        <img src={Portfolio2} alt="" className="worksImg" onClick={() => window.open('https://shubham242001.github.io/project02/asas.html', '_blank')} />
        <img src={Portfolio3} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/Project-MCT/', '_blank')} />
        <img src={Portfolio4} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/Drum-kit/', '_blank')} />
        <img src={Portfolio5} alt="" className="worksImg" onClick={() => window.open('https://priyam117.github.io/holiday-tour-business/', '_blank')} />
        <img src={Portfolio6} alt="" className="worksImg" onClick={() => window.open('https://cwr-day8-46n4hbmz9-priyam-gautams-projects.vercel.app/', '_blank')} />
      </div>
    </section>
  )
}

export default Works;