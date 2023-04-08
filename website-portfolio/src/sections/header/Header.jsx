import React, { useEffect } from 'react';
import HeaderImage from '../../assets/header.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineDribbble} from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import './header.css';

function Header() {

  const data = [
    { id: 1, link: 'https"//instagram.com', icon: <AiOutlineInstagram /> },
    { id: 2, link: 'https"//twitter.com', icon: <AiOutlineTwitter /> },
    { id: 3, link: 'https"//dribbble.com', icon: <AiOutlineDribbble /> },
    { id: 4, link: 'https"//github.com', icon: <AiFillGithub /> },
  ];

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <header id='header'>
      <div className="container header__container">
        <div className="header__profile" data-aos='fade-in'>
          <img src={HeaderImage}  alt='Header Portait' />
        </div>
        <h3 data-aos='fade-up'>Aera White</h3>
        <p data-aos='fade-up'>
          You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>
        <div className="header__cta" data-aos='fade-up'>
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
        </div>
        <div className='header__socials'>
          {data.map(item => 
            <a 
              key={item.id} 
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >{item.icon}</a>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header