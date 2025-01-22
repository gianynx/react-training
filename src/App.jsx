import { useState } from 'react';
import useAppHook from './hooks/appHook';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './assets/css/App.css';

function App() {
  const [count, setCount] = useState(0);
  const { h1Title, h1Style, h2Title, boxPosition, img, technologies } = useAppHook();

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
        <div className="d-flex justify-content-center gap-5 mt-5 mb-2">
          {technologies.map((tech) => (
            <Card key={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular}>
              {tech.description}
            </Card>
          ))}
        </div>
      </div>

      <div className="p-2">
        <hr />
        <div className="d-flex justify-content-center gap-5 mt-5 mb-2">
          {technologies
            .filter((tech) => tech.isPopular)
            .map((tech) => (
              <Card key={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular}>
                {tech.description}
              </Card>
            ))}
        </div>
      </div>

      <div className="p-2">
        <hr />
        <div className="d-flex justify-content-center gap-5 mt-5 mb-2">
          {technologies
            .filter((tech) => tech.isJsFramework)
            .map((tech) => (
              <Card key={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular} isJsFramework={tech.isJsFramework}>
                {tech.description}
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
