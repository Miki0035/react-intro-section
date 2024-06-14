import { MainContent, Navbar } from "./components";
import "./App.css";
import heroMobile from "./assets/images/image-hero-mobile.png";
import heroDesktop from "./assets/images/image-hero-desktop.png";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="left-container">
          <MainContent />
        </div>
        <div className="right-container">
          <picture>
            <source srcSet={heroDesktop} media="(min-width:970px)" />
            <img src={heroMobile} alt="hero mobile" />
          </picture>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>{" "}
          <br />. Coded by{" "}
          <a
            href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/"
            target="_blank"
          >
            Mikiyas Kebede
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default App;
