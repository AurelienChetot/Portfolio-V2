import "../App.scss";

import VIDEO from "../videos/background.mp4";

function Projet() {
  return (
    <>
      <body>
        <video className="background-video" src={VIDEO} autoPlay muted loop />
        <div className="projet-container">
          <h1>Projet 1 Qui?Zip :</h1>
          <div className="text-container">
            <p>
              Pour mon projet 1, j'ai collaboré avec deux autres personnes sur
              la création d'un Quiz nommé Qui?Zip. Notre objectif principal
              était de le développer dans un délai imparti tout en assurant sa
              fonctionnalité. En utilisant les langages HTML, CSS et JavaScript
              Vanilla, nous avons travaillé ensemble pour concevoir une
              interface conviviale et intuitive. Cette collaboration nous a
              permis de mettre en pratique nos compétences en développement web
              et de créer un produit final dont nous sommes fiers.
            </p>
          </div>
        </div>
      </body>
    </>
  );
}

export default Projet;
