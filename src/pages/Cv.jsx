import { useEffect } from "react";

import VIDEO from "../videos/background2.mp4";
import CV from "../images/aurelienchetot.png";
import PDF from "../PDF/aurelienchetot.pdf";

import "../App.scss";

function Cv() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <body>
      <video className="background-video" src={VIDEO} autoPlay muted loop />
      <h1>Mon CV :</h1>
      <div className="contact-container">
        <div className="img-container-contact">
          <img className="img-cv" src={CV} alt="Portfolio" />
        </div>
        <p className="text-cv">
          Ici vous pouvez <span className="color-cv">télécharger</span> mon CV
          en format <span className="color-cv">PDF</span>
        </p>
        <a href={PDF} download="aurelienchetot.pdf" target="_blank">
          <button className="btn-dl">Télécharger mon CV</button>
        </a>
      </div>
    </body>
  );
}

export default Cv;
