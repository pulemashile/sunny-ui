import Article from "./sections/Article";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

function App() {
  return (
    <>
      <main>
        <Header />
        <Article />
        <Footer />
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        
      </footer>
    </>
  );
}

export default App;
