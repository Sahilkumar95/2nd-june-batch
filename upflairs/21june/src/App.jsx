import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FriendCard({ name, image, hobby, quote, contact }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Hobby:</strong> {hobby}</p>
      <p><em>"{quote}"</em></p>
      <p><strong>Contact:</strong> {contact}</p>
    </div>
  );
}



function App() {
  const friends = [
    {
      name: "Sahil",
      image: "https://images.app.goo.gl/fdhZAhqAVytha716A",
      hobby: "Painting",
      quote: "Art is life.",
      contact: "aarav@example.com"
    },
    {
      name: "Krishna",
      image: "https://images.app.goo.gl/zWECzKpDjSQgY7Bm8",
      hobby: "Singing",
      quote: "Music heals the soul.",
      contact: "meera@example.com"
    },
    {
      name: "Amanr",
      image: "https://images.app.goo.gl/57LPev4UFMWQJxJbA",
      hobby: "Cycling",
      quote: "Keep moving forward.",
      contact: "kabir@example.com"
    },
    {
      name: "Harsham",
      image: "https://images.app.goo.gl/E3yRTAaSVD4voaWb9",
      hobby: "Reading",
      quote: "Books are magic.",
      contact: "simran@example.com"
    },
    {
      name: "Rohan",
      image: "https://images.app.goo.gl/6fPCvZyHndrtWhGN9",
      hobby: "Photography",
      quote: "Capture the moment.",
      contact: "rohan@example.com"
    }
  ];

  

  return (
    <div className="App">
      <h1> Friends</h1>
      <div className="grid">
        {friends.map((friend, index) => (
          <FriendCard key={index} {...friend} />
        ))}
      </div>
      </div>
  )
  
}

export default App;