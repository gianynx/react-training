import useAppHook from './hooks/AppHook';
import Header from './components/Header';
import AutoCarousel from './components/AutoCarousel';
import CardText from './components/CardText';
import CardForm from './components/CardForm';
import CardImage from './components/CardImage';
import CarouselCaption from './components/CarouselCaption';
import Footer from './components/Footer';
import './assets/css/App.css';

function App() {

  const { technologies, addTechnology, removeTechnology, formData, handleInputChange, resetForm, sendForm, carouselMedia, productsNikeDunk, productsNikeJordan, iconsCarouselMedia } = useAppHook();

  return (
    <>
      <header>
        <Header />
      </header>

      <div id="content-app">
        <main>
          <section id="carousel-section">
            <AutoCarousel media={carouselMedia} />
          </section>

          <section id="promotional-section">
            <a href="/" className="text-decoration-none">
              <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white p-2">
                <div className="d-flex flex-column justify-content-center align-items-center text-uppercase fw-bold promo-title">
                  <span>massima ammortizzazione:</span>
                  <span>grande comfort, grandi corse</span>
                </div>
                <span className="fs-5">Scopri le nuove colorway di Vomero 18.</span>
              </div>
            </a>
          </section>

          <div className="container-fluid">
            <section id="products-nike-dunk-grid">
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5 mb-4">
                {productsNikeDunk.map((product) => (
                  <CardImage key={product.id} id={product.id} imgTitle={product.imgTitle} imgInfo={product.imgInfo} imgSrc={product.imgSrc} />
                ))}
              </div>
            </section>

            <section id="products-nike-jordan-grid">
              <div className="d-flex gap-3 p-2">
                {productsNikeJordan.map((product) => (
                  <CardImage key={product.id} id={product.id} imgTitle={product.imgTitle} imgInfo={product.imgInfo} imgSrc={product.imgSrc} />
                ))}
              </div>
            </section>

            <section id="kylian-mbappe-section">
              <div className="mt-4 mb-5">
                <CardImage imgSrc="/images/kylian_mbappe.jpg" imgTitle="Kylian Mbappé" imgInfo="La selezione dell'atleta" isFullWidth isCustomLayout />
              </div>
            </section>

            <section id="icons-carousel-section">
              <h3 className="text-center text-uppercase mb-4">Acquista le nostre icone</h3>
              <CarouselCaption media={iconsCarouselMedia} />
            </section>
          </div>

          <div className="container">
            {/* <section id="technologies-section">
              <div className="p-4">
                <h2 className="text-center mt-5">Technologies</h2>
                <div className="d-flex justify-content-center gap-3 mt-5">
                  <CardForm addTechnology={addTechnology} />
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-5 mt-5 mb-2">
                  {technologies.map((tech) => (
                    <CardText key={tech.id} id={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular} removeTechnology={removeTechnology}>
                      {tech.description}
                    </CardText>
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
                      <CardText key={tech.id} imgSrc={tech.imgSrc} title={tech.title} isPopular={tech.isPopular}>
                        {tech.description}
                      </CardText>
                    ))}
                </div>
              </div>
            </section> */}

            <section id="newsletter-form-section">
              <hr />
              <h2 className="text-center mt-5">Subscribe to our newsletter</h2>
              <form className="rounded box-shadow mt-5 mb-5 p-3">
                <div className="d-flex justify-content-center align-items-center gap-5">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Email</label>
                    <input type="text" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} id="email" name="email" className="form-control" placeholder="Enter your email" minLength="3" maxLength="23" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-white">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} id="name" name="name" className="form-control" placeholder="Enter your name" minLength="3" maxLength="23" />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" checked={formData.privacyChecked} onChange={(e) => handleInputChange("privacyChecked", e.target.value)} className="form-check-input" id="privacyChecked" name="privacyChecked" />
                    <label className="form-check-label text-white" htmlFor="privacyChecked">
                      I consent to the processing of data according to the privacy policy.
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-4 mt-2">
                  <button onClick={sendForm} className="btn btn-outline-success px-5">Subscribe</button>
                  <button onClick={resetForm} className="btn btn-outline-danger px-5">Reset</button>
                </div>
              </form>
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