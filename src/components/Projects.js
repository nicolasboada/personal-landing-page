import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectScreen from "./ProjectScreen";

const Projects = ({
  title,
  description,
  screenImg,
  mobileImg,
  projectLink,
  githubLink,
  stack,
}) => {
  const stackButtons = [
    {
      stack: "React",
      button: (
        <button>
          <FontAwesomeIcon icon={faReact} size="s" />
          React
        </button>
      ),
    },
    {
      stack: "Redux",
      button: (
        <button>
          <svg
            width="2500"
            height="2383"
            viewBox="0 0 256 244"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
              fill="#006adc"
            />
          </svg>
          Redux
        </button>
      ),
    },
    {
      stack: "Node.js",
      button: (
        <button>
          <FontAwesomeIcon icon={faNodeJs} size="s" />
          Node.js
        </button>
      ),
    },
    {
      stack: "MongoDB",
      button: (
        <button>
          <img
            src="https://icongr.am/devicon/mongodb-plain.svg?size=96&color=006adc"
            alt="mongoDB"
          />
          MongoDB
        </button>
      ),
    },
    {
      stack: "MaterialUI",
      button: (
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 36 32"
            fill="none"
            class="css-1170n61"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
              fill="#007FFF"
            ></path>
          </svg>
          MaterialUI
        </button>
      ),
    },
  ];
  return (
    <div className="project-container">
      <div className="projectMockup">
        <img
          className="mockupLaptopImg"
          src="https://i.ibb.co/B2TG6C4/Macbook-Pro-Mockup-2018-400px.png"
          alt="project mockup"
        />
        <ProjectScreen img={screenImg} link={projectLink} />
        {mobileImg && (
          <>
            <img
              className="mockupMobileImg"
              src="https://i.ibb.co/gg2tF0s/iphone-400px.png"
              alt="project mockup mobile"
            />
            <img
              className="mockupMobileImg screen"
              src={mobileImg}
              alt="project mockup mobile"
            />
          </>
        )}
      </div>
      <div className="projectDescription">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="projectStack">
          {stack.map((stack) =>
            stackButtons
              .filter((stackButton) => stackButton.stack === stack)
              .map((stack) => stack.button)
          )}
        </div>

        <div className="container">
          <FontAwesomeIcon icon={faChain} size="xs" />
          <a href={projectLink} target="_blank" rel="noreferrer noopener">
            App
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <a href={githubLink} target="_blank" rel="noreferrer noopener">
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
