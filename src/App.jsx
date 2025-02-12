import useAppHook from './hooks/AppHook';
import Header from './components/Header';
import Card from './components/Card';
import CardForm from './components/CardForm';
import Footer from './components/Footer';
import './assets/css/App.css';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

function App() {

  const { h1Title, h1Style, boxPosition, img, technologies, count, setCount, addTechnology, removeTechnology } = useAppHook();

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
                <div className="d-flex justify-content-center gap-3 mt-5">
                  <CardForm addTechnology={addTechnology} removeTechnology={removeTechnology} />
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-5 mt-5 mb-2">
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
                <div className="d-flex justify-content-center gap-5 mt-5 mb-5">
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