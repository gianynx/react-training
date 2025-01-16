import { useState } from 'react';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './assets/css/App.css';

function App() {
  const [count, setCount] = useState(0);

  const h1Title = "React Training";
  const h1Style = {
    color: "black",
    fontSize: "3.3rem",
  };
  const h2Title = "Full-time Course";
  const boxPosition = 2;
  const img = 'react';

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center mt-5">
        <div className={`box rounded-5 p-4 ${boxPosition > 1 ? "rotated" : ""}`}>
          <div className="d-flex align-items-center">
            <div>
              <h1 style={h1Style}>{h1Title}</h1>
              <h2 className="h2-style">{h2Title}</h2>
            </div>
            <img src={`/${img}.svg`} alt="React logo" className="mx-3" style={{ height: "100px" }} />
          </div>
        </div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: "10rem" }} />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" style={{ height: "10rem" }} />
          </a>
        </div>
        <div>
          <h1 className="text-white">Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="mx-5">
          <Card imgSrc={reactLogo} title="React logo">
            <p>React is a JavaScript library for building user interfaces.</p>
          </Card>
        </div>
        <div className="mx-5">
          <Card imgSrc={viteLogo} title="Vite logo">
            <p>Vite is a build tool that manages the development and build process ("engine") of a web application.</p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
