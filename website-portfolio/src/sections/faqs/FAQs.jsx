import React from 'react';
import faqs from './data';
import FAQ from './FAQ';
import './faqs.css';

function FAQs() {
  return (
    <section id='faqs'>
      <h2>Frequenly Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer, and if you still
        heve some moe questions, shoot me a message from the contact section!
      </p>
      <div className="container faqs__container">
        {faqs.map(faq => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  )
}

export default FAQs