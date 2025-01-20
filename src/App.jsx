import { useState } from 'react';
import useAppHook from './hooks/appHook';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import cobolLogo from '/cobol.png';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './assets/css/App.css';

function App() {
  const [count, setCount] = useState(0);
  const { h1Title, h1Style, h2Title, boxPosition, img } = useAppHook();

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly align-items-center mt-5 p-3">
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
      <div className="p-4">
        <hr />
        <h2 className="text-center fw-semibold text-white mt-5">Some Technologies</h2>
        <div className="d-flex justify-content-center gap-5 mt-5 mb-2">
          <Card imgSrc={reactLogo} title="React logo" isPopular={true}>
            React is a JavaScript library for building user interfaces.
          </Card>
          <Card imgSrc={viteLogo} title="Vite logo" isPopular={true}>
            Vite is a build tool that manages the development and build process (&quot;engine&quot;) of a web application.
          </Card>
          <Card imgSrc={cobolLogo} title="Cobol logo" isPopular={false}>
            COBOL is a historical programming language, designed for commercial and administrative applications.
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
