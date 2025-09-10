
import { useState } from "react";
import img1 from "../assets/images/background.webp";
import Cards from './Cards';

export default function SampleProjects () {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const cards = [
    {
      id: 1,
      image: img1,
      title: "Project 1",
      description: "This is my first project built with React. It showcases my learning journey with modern web development techniques and responsive design principles."
    },
    {
      id: 2,
      image: img1,
      title: "Project 2",
      description: "A full-stack application using Rails backend and React frontend. This project demonstrates my understanding of API integration and database management."
    },
    {
      id: 3,
      image: img1,
      title: "Project 3",
      description: "A creative web application built with JavaScript and modern CSS. This project highlights my skills in DOM manipulation and interactive user interfaces."
    }
  ];

  return (
    <section>
      <div className="home-description">
        <h2>Hi, my name is Rosa. Welcome to my portfolio !</h2>
        <p>Few months ago, I have started learning web-developement with The Hacking Projet. I am learning Ruby, Rails, Javascript and React.</p>
        <p>You will find below a few sample of my projects. Some of them created during my training and others are my own projects</p>
      </div>
      <Cards flippedCards={ flippedCards } toggleCard={ toggleCard } cards={ cards } />
    </section>
  );
}
