import useAppHook from './hooks/AppHook';
import Header from './components/Header';
import AutoCarousel from './components/AutoCarousel';
import CardImage from './components/CardImage';
import CarouselCaption from './components/CarouselCaption';
import Footer from './components/Footer';
import './assets/css/App.css';

function App() {

  const { carouselMedia, productsNikeDunk, productsNikeJordan, iconsCarouselMedia } = useAppHook();

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
              <div className="mb-5">
                <h3 className="text-center text-uppercase mb-4">acquista le nostre icone</h3>
                <CarouselCaption media={iconsCarouselMedia} />
              </div>
              <hr />
            </section>
          </div>
        </main>

        <footer>
          <div className="mt-5 mb-5">
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;