import VIDEO from "../videos/background2.mp4";
import CONTACT from "../images/contact.gif";
import FORMULAIRE from "../images/formulaire.gif";

import PHONE from "../SVG/telephone.svg";
import EMAIL from "../SVG/mail.svg";
import LOCALISATION from "../SVG/location.svg";

function Contact() {
  return (
    <body>
      {" "}
      <video className="background-video" src={VIDEO} autoPlay muted loop />
      <h1>Me contacter :</h1>
      <div className="contact-container">
        <div className="img-container-contact">
          <img className="img-contact" src={CONTACT} alt="contactMe" />
        </div>
        <div className="contact-column">
          <div className="telephone">
            <img src={PHONE} alt="phone" />
            <p className="text-contact">
              <span className="span-contact">Téléphone :</span> 06-35-12-91-78
            </p>
          </div>
          <div className="telephone">
            <img src={EMAIL} alt="email" />
            <p className="text-contact">
              <span className="span-contact">Mail :</span>{" "}
              aurelien.chetot@gmail.com
            </p>
          </div>
          <div className="location">
            <img src={LOCALISATION} alt="localisation" />
            <p className="text-contact">
              <span className="span-contact">Localisation :</span> Chalon sur
              Saône 71100
            </p>
          </div>
        </div>
      </div>
      <div className="separator">
        <h2>Formulaire :</h2>
      </div>
      <div className="contact-container">
        <div className="img-container-contact">
          {" "}
          <img className="img-formulaire" src={FORMULAIRE} alt="formulaire" />
          <p className="text-contact1">EN COURS DE DEVELOPPEMENT</p>
        </div>
      </div>
    </body>
  );
}
export default Contact;
