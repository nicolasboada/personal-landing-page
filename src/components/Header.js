import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="headerLeft">
          <a href="/#">Nicolas Boada</a>
        </div>
        <div className="headerRight">
          <a href="/#aboutme">About me</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projects</a>
          <button className="titleButton">
            Download CV
            <FontAwesomeIcon
              icon={faDownload}
              size="xs"
              style={{ marginLeft: "5px" }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
