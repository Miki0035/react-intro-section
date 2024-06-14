import databizLogo from "../assets/images/client-databiz.svg";
import audipLogo from "../assets/images/client-audiophile.svg";
import meetLogo from "../assets/images/client-meet.svg";
import makerLogo from "../assets/images/client-maker.svg";
import "../styles/main-content.css";

const MainContent = () => {
  return (
    <div className="content-container">
      <h1>
        Make <br /> remote Work
      </h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <div className="button-container">
        <button>Learn more</button>
      </div>
      <div className="logo-container">
        <img src={databizLogo} alt="databiz logo" />
        <img src={audipLogo} alt="audip logo" />
        <img src={meetLogo} alt="meet logo" />
        <img src={makerLogo} alt="maker logo" />
      </div>
    </div>
  );
};

export default MainContent;
