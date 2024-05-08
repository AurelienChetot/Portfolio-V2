import GITHUB from "../SVG/github.svg";
import LINKEDIN from "../SVG/linkedin.svg";

function Footer() {
  return (
    <>
      <footer>
        <p>
          By <span className="footer-text">Aurélien</span>
        </p>
        <p className="">Retrouvez moi sur :</p>
        <div className="img-footer">
          <a href="https://github.com/AurelienChetot" target="_blank">
            <img src={GITHUB} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-chetot-6861852b2/"
            target="_blank"
          >
            <img src={LINKEDIN} alt="Linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
