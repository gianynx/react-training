import { useReducer } from 'react';
import useAppHook from './hooks/AppHook';
import Header from './components/Header';
import Card from './components/Card';
import CardForm from './components/CardForm';
import Footer from './components/Footer';
import './assets/css/App.css';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

function App() {

  const { h1Title, h1Style, boxPosition, img, technologies, addTechnology, removeTechnology } = useAppHook();


  // Example form section
  const formReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET_FIELD":
        return { title: "", imgSrc: "", description: "" };
      default:
        return state;
    }
  };

  const [formData, dispatchFormData] = useReducer(formReducer, {
    title: "",
    imgSrc: "",
    description: "",
  });

  const handleInputChange = (field, value) => {
    dispatchFormData({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = () => {
    dispatchFormData({ type: "RESET_FIELD" });
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <div id="content-app">
        <main>
          <div className="container">

            {/* Example form section */}
            <section id="example-form-section">
              <form className="rounded box-shadow mt-5 p-3">
                <div className="d-flex justify-content-center gap-5">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label text-white">Name</label>
                    <input type="text" value={formData.title} onChange={(e) => handleInputChange("title", e.target.value)} id="title" name="title" className="form-control" placeholder="Enter new name" minLength="3" maxLength="23" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imgSrc" className="form-label text-white">Image URL</label>
                    <input type="text" value={formData.imgSrc} onChange={(e) => handleInputChange("imgSrc", e.target.value)} id="imgSrc" name="imgSrc" className="form-control" placeholder="Enter new image URL" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label text-white">Description</label>
                    <textarea value={formData.description} onChange={(e) => handleInputChange("description", e.target.value)} className="form-control" id="description" name="description" rows="2" placeholder="Enter new description" minLength="3" maxLength="100" required />
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-4 mt-2">
                  <button onClick={sendForm} className="btn btn-outline-success px-5">Invia</button>
                  <button onClick={resetForm} className="btn btn-outline-danger px-5">Reset</button>
                </div>
              </form>
            </section>

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
              </div>
            </section>

            <section id="technologies-section">
              <div className="p-4">
                <hr />
                <h2 className="text-center mt-5">Technologies</h2>
                <div className="d-flex justify-content-center gap-3 mt-5">
                  <CardForm addTechnology={addTechnology} />
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-5 mt-5 mb-2">
                  {technologies.map((tech) => (
                    <Card key={tech.id} id={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular} removeTechnology={removeTechnology}>
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