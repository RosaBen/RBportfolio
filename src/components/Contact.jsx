import { useState, useRef } from 'react';
import Form from './Form';
import { useEffect } from 'react';
export default function Contact () {
  const [formIsActive, setFormIsActive] = useState(false);

  const handleClick = () => setFormIsActive(prev => !prev);
  const formSection = useRef(null);
  const displayForm = formIsActive ? <Form ref={ formSection } /> : "";

  useEffect(() => {
    formIsActive ? formSection.current.scrollIntoView({ behavior: "smooth" }) : "";
  }, [formIsActive]);


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