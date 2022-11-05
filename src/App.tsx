import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>
          css
        </li>
        <li>
          html
        </li>
        <li>
          js
        </li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <ul>
        <li><a href="#">News</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Home</a></li>
      </ul>
    </div>
  )
}


export default App;
