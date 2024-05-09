import PROJET1 from "../images/projet1.gif";
import PROJET2 from "../images/projet2.gif";
import COMINGSOON from "../images/comingsoon.gif";
import VIDEO from "../videos/background2.mp4";

import "../App.scss";

//import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projet() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    style: {
      width: "80%",
      margin: "0 auto",
    },
  };
  return (
    <>
      <body>
        <video className="background-video" src={VIDEO} autoPlay muted loop />
        <h1>Mes Projets :</h1>
        <Slider className="slick-slider" {...settings}>
          <div className="projet-container">
            <h1>Projet 1 Qui?Zip :</h1>
            <div className="img-container">
              <img src={PROJET1} alt="projet1" />
            </div>
            <p className="text-projet">
              Pour mon projet 1, j'ai collaboré avec deux autres personnes sur
              la création d'un Quiz nommé Qui?Zip. Notre objectif principal
              était de le développer dans un délai imparti tout en assurant sa
              fonctionnalité. En utilisant les langages HTML, CSS et JavaScript
              Vanilla, nous avons travaillé ensemble pour concevoir une
              interface conviviale et intuitive. Cette collaboration nous a
              permis de mettre en pratique nos compétences en développement web
              et de créer un produit final dont nous sommes fiers.
              <br />{" "}
              <span className="style-text-projet">Retrouvez le Quiz sur :</span>
              <br />
              <a
                href="https://aurelienchetot.github.io/Projet-1-Team-3/"
                target="_blank"
              >
                Qui?Zip
              </a>
            </p>
          </div>
          <div className="projet-container">
            <h2>Projet 2 Star-Wild :</h2>
            <div className="img-container">
              <img src={PROJET2} alt="projet2" />
            </div>
            <p className="text-projet">
              Pour notre projet Star-Wild, une équipe de quatre personnes a
              relevé le défi de créer une expérience innovante. Avec React.js,
              Node.js et ThreeJS, nous avons développé une visite du système
              solaire. Notre collaboration nous a permis de livrer un produit
              dont nous sommes fiers, tout en renforçant nos compétences en
              développement web.
              <br />{" "}
              <span className="style-text-projet">
                Retrouvez Star-Wild sur :
              </span>
              <br />
              <a href="https://star-wild.netlify.app/" target="_blank">
                Star-Wild
              </a>
            </p>
          </div>
          <div className="projet-container">
            <h2>Coming Soon :</h2>
            <div className="img-container">
              <img src={COMINGSOON} alt="coming soon" />
            </div>
            <p className="text-projet">
              Actuellement en formation, je suis impliqué dans le développement
              de plusieurs projets passionnants qui sont en cours de
              réalisation. Ces projets représentent une opportunité unique
              d'appliquer les connaissances acquises et de perfectionner mes
              compétences dans divers domaines. Je suis enthousiaste à l'idée de
              voir ces projets évoluer.
              <br /> <span className="style-text-projet">Aurélien Chetot</span>
            </p>
          </div>
        </Slider>
      </body>
    </>
  );
}

export default Projet;
