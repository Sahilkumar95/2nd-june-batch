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
      image: "https://media.istockphoto.com/id/1358545569/photo/busy-black-man-drawing-lines-on-a-big-canvas-with-painting-on-a-table.jpg?s=612x612&w=0&k=20&c=Onxij6IgLkMMkOFBO7lvmUMWOjolve-W2M6iD8RTnCA=",
      hobby: "Painting",
      quote: "Art is life.",
      contact: "sahil@example.com"
    },
    {
      name: "Krishna",
      image: "https://t4.ftcdn.net/jpg/03/26/90/45/240_F_326904574_HcDsA8iCrwJyO8aUzBDD3uQBJOmPNY2U.jpg",
      hobby: "Singing",
      quote: "Music heals the soul.",
      contact: "krishnaa@example.com"
    },
    {
      name: "Aman",
      image: "https://media.istockphoto.com/id/1125707375/photo/businessman-going-to-office-on-bicycle.jpg?s=612x612&w=0&k=20&c=gnUglrbu8j0g7oDNsmSKMzoY1_Ho7sGZ0xSboVXkS_8=",
      hobby: "Cycling",
      quote: "Keep moving forward.",
      contact: "aman@example.com"
    },
    {
      name: "Harsham",
      image: "https://media.istockphoto.com/id/467844284/photo/beautiful-latin-woman-reading-a-book-at-home.jpg?s=612x612&w=0&k=20&c=9bGRFURBuvAOXQEWITEEkCzVCgSKW-znMvscvcrex-g=",
      hobby: "Reading",
      quote: "Books are magic.",
      contact: "harsham@example.com"
    },
    {
      name: "Rohan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gFy37qurHs04eTnFQOE33z5GC6tW5yIEKg&s",
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