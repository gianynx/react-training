import { useState } from 'react';
import useAppHook from './hooks/appHook';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './assets/css/App.css';

function App() {

  const [count, setCount] = useState(0);
  const { h1Title, h1Style, boxPosition, img, technologies, addTechnology, handleSubmit, handleChange } = useAppHook();

  return (
    <>
      <header>
        <Header />
      </header>

      <div id="content-app">
        <main>
          <div className="container">
            <section id="box-section">
              <div className="d-flex justify-content-evenly align-items-center mt-5 p-3">
                <div className={`box rounded-5 p-4 ${boxPosition > 1 ? "rotated" : ""}`}>
                  <div className="d-flex align-items-center">
                    <div>
                      <h1 style={h1Style}>{h1Title}</h1>
                      <h2 className="h2-style">Full-time Course</h2>
                    </div>
                    <img src={`/${img}.svg`} alt="React logo" className="mx-3" style={{ height: "100px" }} />
                  </div>
                </div>
                <div>
                  <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="vite logo" alt="Vite logo" style={{ height: "10rem" }} />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" style={{ height: "10rem" }} />
                  </a>
                </div>
                <div>
                  <h2 className="text-center">Vite + React</h2>
                  <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
                  </div>
                </div>
              </div>
            </section>

            <section id="technologies-section">
              <div className="p-4">
                <hr />
                <h2 className="text-center mt-5">Technologies</h2>
                <div className="d-flex justify-content-center gap-3 mt-5 mb-2">
                  <button type="button" className="btn btn-outline-success px-5" onClick={addTechnology}>Add</button>
                  <button type="button" className="btn btn-outline-danger px-5">Delete</button>
                </div>
                <div className="d-flex justify-content-center gap-5 mt-5 mb-2">
                  {technologies.map((tech) => (
                    <Card key={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular}>
                      {tech.description}
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section id="popular-technologies-section">
              <div className="p-2">
                <hr />
                <h2 className="text-center mt-5">Popular Technologies</h2>
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
            </section>

            <section id="popular-js-frameworks-section">
              <div className="p-2">
                <hr />
                <h2 className="text-center mt-5">Popular Technologies & JavaScript Frameworks</h2>
                <div className="d-flex justify-content-center gap-5 mt-5 mb-2">
                  {technologies
                    .filter((tech) => tech.isPopular && tech.isJsFramework)
                    .map((tech) => (
                      <Card key={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular} isJsFramework={tech.isJsFramework}>
                        {tech.description}
                      </Card>
                    ))}
                </div>
              </div>
            </section>

            <section id="form-section">
              <div className='p-2'>
                <hr />
                <div className="d-flex justify-content-center gap-5 mt-5 mb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputName" className="form-label text-white">Name</label>
                      <input type="text" id="exampleInputName" name="exampleInputName" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail" className="form-label text-white">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text text-white">We&apos;ll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword" className="form-label text-white">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword" />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck" />
                      <label className="form-check-label text-white" htmlFor="exampleCheck">Check me out</label>
                    </div>
                    <button type="submit">Click me!</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;