import React from 'react';
import Logo from '../../assets/logo.jpg';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/mdoal-context';
import './navbar.css';

function Navbar() {

  const { showModalHandler } = useModalContext();
  
  const data = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#services', title: 'Services' },
    { id: 4, link: '#portfolio', title: 'Portfolio' },
    { id: 5, link: '#contact', title: 'Contact' }
  ];

  return (
    <nav>
      <div className="container nav__container">
        <a href='index.html'>
          <img src={Logo} className='nav__logo' alt='Logo' />
        </a>
        <ul className='nav__menu'>
          {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
        </ul>
        <button id='theme__icon' onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  )
}

export default Navbar