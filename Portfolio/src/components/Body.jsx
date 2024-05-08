//import SVG
import HTML5 from "../SVG/html-5.svg";
import CSS from "../SVG/css-3.svg";
import JS from "../SVG/js.svg";
import NODE from "../SVG/node-js.svg";
import REACT from "../SVG/React1.svg";
import THREEJS from "../SVG/three-js.svg";
import GITHUB from "../SVG/github.svg";
import SASS from "../SVG/sass.svg";
import DEVWEB from "../SVG/computer.svg";
import MECA from "../SVG/mecanic.svg";
import FACTORY from "../SVG/factory.svg";
import MECA1 from "../SVG/mecanic1.svg";
import DOC from "../SVG/document.svg";

function Body() {
  return (
    <>
      <body>
        <h1>À propos de moi :</h1>
        <div className="text-container">
          <p>
            Actuellement en reconversion professionnelle à la{" "}
            <a
              className="hypertext-style"
              href="https://www.wildcodeschool.com/fr-fr/"
              target="_blank"
            >
              Wild Code School
            </a>
            , je développe mes compétences en HTML, CSS, JavaScript, NodeJs et
            React.js, où je construis mon portfolio en React pour approfondir ma
            compréhension de cette technologie.
            <br />
            <br /> Après avoir terminé avec succès le projet 1 avec mon équipe,
            nous avons développé un{" "}
            <a
              className="hypertext-style"
              href="https://aurelienchetot.github.io/Projet-1-Team-3/"
              target="_blank"
            >
              Quiz
            </a>{" "}
            en HTML/CSS/JavaScript vanilla, que nous avons livré dans les délais
            impartis.
            <br />
            <br /> Suite à cela, nous avons réalisé le projet 2, nommé{" "}
            <a
              className="hypertext-style"
              href="https://star-wild.netlify.app/"
              target="_blank"
            >
              Star-Wild
            </a>
            , qui vous offre une visite du système solaire avec une expérience
            immersive en 3D.
            <br />
            <br /> Je continue ma formation en vue d'obtenir le titre
            professionnel de Développeur Web Junior, dans l'objectif de
            décrocher une opportunité en alternance.
          </p>
        </div>
        <h2>Mes Skills :</h2>
        <div className="skill-container">
          <div className="skill-html">
            <img src={HTML5} alt="image html" />
            <p className="text-skill">HTML5</p>
          </div>
          <div className="skill-css">
            <img src={CSS} alt="image css" />
            <p className="text-skill">CSS3</p>
          </div>
          <div className="skill-js">
            <img src={JS} alt="image JavaScript" />
            <p className="text-skill">JavaScript</p>
          </div>
          <div className="skill-nodeJS">
            <img src={NODE} alt="image NodeJs" />
            <p className="text-skill">NodeJs</p>
          </div>
          <div className="skill-React">
            <img src={REACT} alt="image React" />
            <p className="text-skill">React</p>
          </div>
          <div className="skill-ThreeJS">
            <img src={THREEJS} alt="image ThreeJS" />
            <p className="text-skill">ThreeJs</p>
          </div>
          <div className="skill-GitHub">
            <img src={GITHUB} alt="image GitHub" />
            <p className="text-skill">GitHub</p>
          </div>
          <div className="skill-Sass">
            <img src={SASS} alt="image Sass" />
            <p className="text-skill">Sass</p>
          </div>
        </div>
        <div className="parcours-container">
          <h3>Mon Parcours professionnel :</h3>
          <div className="work-container">
            <div className="dev-web-container">
              <img src={DEVWEB} alt="computer" />
              <p>
                <span className="work-texte-style">
                  Formation Developpeur <br /> Web
                </span>{" "}
                <br /> à la Wild Code School <br />
                Février 2024
              </p>
            </div>
            <div className="dev-web-container">
              <img src={MECA} alt="cars" />
              <p>
                <span className="work-texte-style1">
                  Démonteur automobile / mécanicien
                </span>
                <br /> à la SMAP <br />
                Décembre 2017 à Août 2023
              </p>
            </div>
          </div>
          <div className="work-container">
            <div className="dev-web-container">
              <img src={FACTORY} alt="factory" />
              <p>
                <span className="work-texte-style1">
                  Agent de <br />
                  Production
                </span>{" "}
                <br /> à Val Union <br />
                de Juin 2017 à Août 2017
              </p>
            </div>
            <div className="dev-web-container">
              <img src={MECA1} alt="meca" />
              <p>
                <span className="work-texte-style">mécanicien automobile</span>
                <br /> à Renault <br />
                de Mai 2015 à Septembre 2016
              </p>
            </div>
          </div>
        </div>
        <div className="diplome-container">
          <h4>Mes Diplômes :</h4>
          <div className="dev-web-container">
            <img src={DOC} alt="document" />
            <p>
              <span className="work-texte-style">
                Titre Professionnel
                <br /> Developpeur Web / Web Mobile FullStack
              </span>{" "}
              <br /> à la Wild Code School <br />
              FORMATION EN COURS
            </p>
          </div>
          <div className="dev-web-container">
            <img src={DOC} alt="document" />
            <p>
              <span className="work-texte-style1">
                BAC PRO
                <br /> Maintenance des véhicules automobiles
              </span>{" "}
              <br /> à Camille du Gast
              <br />
              ACQUIS
            </p>
          </div>
          <div className="dev-web-container">
            <img src={DOC} alt="document" />
            <p>
              <span className="work-texte-style1">
                CAP
                <br /> Maintenance des véhicules automobiles
              </span>{" "}
              <br /> à Camille du Gast
              <br />
              ACQUIS
            </p>
          </div>
        </div>
      </body>
    </>
  );
}

export default Body;
