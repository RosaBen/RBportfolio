import { useState } from 'react';
import Form from './Form';
export default function Contact () {
  const [formIsActive, setFormIsActive] = useState(false);

  const handleClick = () => setFormIsActive(prev => !prev);
  const displayForm = formIsActive ? <Form /> : "";


  return (
    <>
      <section>
        <div className="contact-container">
          <div className="message-to-contact">
            <p>Would you like to contact me to discuss about my projects? Please, click on "Leave a message" and fill out the form, I will contact you as soon as possible</p>
            <button
              onClick={ handleClick }
            >Leave a Message</button>
          </div>
          { displayForm }
        </div>

      </section>
    </>
  );
};