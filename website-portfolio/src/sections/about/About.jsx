import React from 'react';
import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import { FaAward } from 'react-icons/fa';
import { TbBooks } from 'react-icons/tb';
import { BiHappyHeartEyes } from 'react-icons/bi';
import Card from '../../components/Card';
import './about.css';

function About() {

  const data = [
    { id: 1, icon: <FaAward />, title: 'Experience', desc: '3+ Years Working' },
    { id: 2, icon: <TbBooks />, title: 'Projects', desc: '180+ Completed' },
    { id: 3, icon: <BiHappyHeartEyes />, title: 'Clients', desc: '70+ happy clients' }
  ];

  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt='About Image' />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className='about__cards'>
            {data.map(item => (
              <Card key={item.id} className='about__card'>
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Aera White from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About