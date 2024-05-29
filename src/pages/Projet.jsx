import PROJET1 from "../images/projet1.gif";
import PROJET2 from "../images/projet2.gif";
import COMINGSOON from "../images/comingsoon.gif";
import SPLITTER from "../images/splitter.gif";
import CODENATURE from "../images/code-nature.gif";
import DEIAS from "../images/patricia-deias.gif";
import VIDEO from "../videos/background2.mp4";

import "../App.scss";

//import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projet() {
  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
        <div className="slider-container">
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
                fonctionnalité. En utilisant les langages HTML, CSS et
                JavaScript Vanilla, nous avons travaillé ensemble pour concevoir
                une interface conviviale et intuitive. Cette collaboration nous
                a permis de mettre en pratique nos compétences en développement
                web et de créer un produit final dont nous sommes fiers.
                <br />{" "}
                <span className="style-text-projet">
                  Retrouvez le Quiz sur :
                </span>
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
                Node.js et ThreeJS. Nous avons développé une visite du système
                solaire en 3D grâce à ThreeJs, que nous avons su maîtriser, même
                si cette compétence ne faisait pas partie du cursus de notre
                formation initiale. Nous avons choisi d'explorer cette
                technologie par nous-mêmes et nous avons réussi à la maîtriser
                avec succès.. Notre collaboration nous a permis de livrer un
                produit, tout en renforçant nos compétences en développement
                web.
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
              <h2>Splitter :</h2>
              <div className="img-container">
                <img src={SPLITTER} alt="Splitter" />
              </div>
              <p className="text-projet">
                Pour mon Checkpoint 2 j'ai eu pour mission de faire un programme
                en HTML, CSS et JavaScript qui permet aux utilisateurs d'entrer
                le montant total de l'addition et de choisir le pourcentage de
                pourboire. Ensuite, le script calcule le montant du pourboire
                par personne en fonction du nombre de personne et affiche
                également le total de l'addition par personne. Cela permet de
                diviser équitablement l'addition et le pourboire entre tous les
                participants.
                <br />{" "}
                <span className="style-text-projet">
                  Retrouvez Splitter sur :
                </span>
                <br />
                <a
                  href="https://aurelienchetot.github.io/Splitter/"
                  target="_blank"
                >
                  Splitter
                </a>
              </p>
            </div>
            <div className="projet-container">
              <h2>Code Nature :</h2>
              <div className="img-container">
                <img src={CODENATURE} alt="code-nature" />
              </div>
              <p className="text-projet">
                Pendant le ProtoJam, un défi inter-promotionnel, j'ai participé
                à un projet de développement web. Notre équipe a travaillé
                ensemble pour créer un site interactif en utilisant React,
                TailWind. Malgré les contraintes de temps, nous avons livré un
                site fonctionnel et esthétique. Après le ProtoJam, je vais
                continué à améliorer le site en ajoutant du contenu et en
                enrichissant ses fonctionnalités. Cela a été une démonstration
                de l'importance de la collaboration et du travail d'équipe pour
                atteindre des objectifs communs dans des délais serrés.
                <br />{" "}
                <span className="style-text-projet">
                  Retrouvez Code-Nature sur :
                </span>
                <br />
                <a href="https://code-nature.netlify.app/" target="_blank">
                  Code-Nature
                </a>
              </p>
            </div>
            <div className="projet-container">
              <h2>Site pour un particulier</h2>
              <div className="img-container">
                <img src={DEIAS} alt="coming soon" />
              </div>
              <p className="text-projet">
                Au cours de ma formation, j'ai entrepris un projet particulier
                qui consistait à créer un site web pour un client spécialisé
                dans l'accompagnement personnel et professionnel. Pour ce
                projet, j'ai utilisé React et Tailwind, technologies modernes
                qui permettent de réaliser des interfaces dynamiques et
                esthétiques. <br />
                Mon objectif principal était de concevoir un site fonctionnel
                qui réponde aux besoins spécifiques du client que je suis encore
                en train de développer, tout en offrant une expérience
                utilisateur optimale. J'ai travaillé seul sur ce projet, ce qui
                m'a permis de renforcer mes compétences en développement web et
                en gestion de projet.
                <br />{" "}
                <span className="style-text-projet">
                  Retrouvez le site sur :
                </span>{" "}
                <br />
                <a href="https://patricia-deias.netlify.app/" target="_blank">
                  patricia-deias
                </a>
              </p>
            </div>
            <div className="projet-container">
              <h2>Coming Soon :</h2>
              <div className="img-container">
                <img src={COMINGSOON} alt="coming soon" />
              </div>
              <p className="text-projet">
                Actuellement en formation, je suis impliqué dans le
                développement de plusieurs projets passionnants qui sont en
                cours de réalisation. Ces projets représentent une opportunité
                unique d'appliquer les connaissances acquises et de
                perfectionner mes compétences dans divers domaines. Je suis
                enthousiaste à l'idée de voir ces projets évoluer.
                <br />{" "}
                <span className="style-text-projet">Aurélien Chetot</span>
              </p>
            </div>
          </Slider>
        </div>
      </body>
    </>
  );
}

export default Projet;
