import React from 'react';
import './App.css';

function App() {
  const tasks = [
    { title: 'Buy Groceries', desc: 'Milk, Bread, Eggs, and Fruits' },
    { title: 'Study React', desc: 'Complete the React hooks chapter' },
    { title: 'Workout', desc: '30 minutes of cardio and stretching' },
    
  ];

  return (
    <div className="App">
      <h1>Task Cards</h1>
      <div className="grid">
        {tasks.map((task, index) => (
          <div className="card" key={index}>
            <h3>{task.title}</h3>
            <p>{task.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
