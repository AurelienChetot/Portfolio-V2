import VIDEO from "../videos/background2.mp4";
import CONTACT from "../images/contact.gif";
import FORMULAIRE from "../images/formulaire.gif";

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
            <p className="text-contact">
              <span className="span-contact">Téléphone :</span> 06-35-12-91-78
            </p>
          </div>
          <div className="telephone">
            <p className="text-contact">
              <span className="span-contact">Mail :</span>{" "}
              <a
                className="hypertext-style-contact"
                href="mailto:aurelien.chetot@gmail.com"
              >
                aurelien.chetot@gmail.com
              </a>
            </p>
          </div>
          <div className="location">
            <p className="text-contact">
              <span className="span-contact">Localisation :</span> Chalon sur
              Saône 71100
            </p>
          </div>
          <div className="telephone">
            <p className="text-github">
              <span className="span-contact">Mon repo GitHub :</span>{" "}
              <a
                className="hypertext-style-contact"
                href="https://github.com/AurelienChetot"
                target="_blank"
              >
                https://github.com/AurelienChetot
              </a>
            </p>
          </div>
          <div className="telephone">
            <p className="text-github">
              <span className="span-contact">Mon Linkedin :</span>{" "}
              <a
                className="hypertext-style-contact"
                href="https://www.linkedin.com/in/aur%C3%A9lien-chetot-6861852b2/"
                target="_blank"
              >
                https://linkedin.com/AurelienChetot
              </a>
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
