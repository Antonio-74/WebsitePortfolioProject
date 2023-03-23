import React from 'react';
import { SiAdobexd } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import Card from '../../components/Card';
import './services.css';

function Services() {

  const data = [
    {id: 1, icon: <SiAdobexd />, title: 'UI/UX Design', desc: 'My designs are modern and intuitive, I use industry-standard rules to make sure your users have fun using your product.'},
    {id: 2, icon: <RiReactjsLine />, title: 'Frontend Development', desc: 'Your product will be accessible on all devices, including mobile phones, tablets, ans desktop.'},
    {id: 3, icon: <FaServer />, title: 'Backend Development', desc: 'The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.'},
    {id: 4, icon: <AiFillAppstore />, title: 'App Development', desc: 'Unlike other developers in the market, I will building an app that runs on both IOS and Android devices widthout any extra cost to you.'},
  ];

  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className='container services__container'>
        {data.map(item => (
          <Card key={item.id} className='service light'>
            <div className="service__icon">
              {item.icon}
            </div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services