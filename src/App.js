import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import "./styles/main.css";

function App() {
  return (
    <>
      <div className="header-bg"></div>
      <header>
        <div className="header">
          <a href="/#">Nicolas Boada</a>
        </div>
      </header>
      <main>
        <div className="mb28">
          <h1>Nicolas Boada</h1>
          <p>
            Software developer based on Buenos Aires. I specialize in building
            web applications. <br /> Currently focusing on learning and
            building. Previously worked as Supply Chain Engineer in different
            industries. I enjoy learning and solving problems.
          </p>
        </div>
        <div className="mb28">
          <h2>Skills</h2>
          <ul>
            <li>
              <span>Frontend</span>
              <span>|</span>
              <span>
                JavaScript, React, Redux, Sass, Styled Components, MaterialUI.
              </span>
            </li>
            <li>
              <span>Backend</span>
              <span>|</span>
              <span>Node.js, Express.js, MongoDB.</span>
            </li>
            <li>
              <span>Data</span>
              <span>|</span>
              <span>Python, SQL, NumPy, Pandas, Scikit-learn, Keras.</span>
            </li>
          </ul>
        </div>
        <span />
        <div className="mb28">
          <h2>Projects</h2>
          <div className="project-container">
            <h3>E-commerce Web App</h3>
            <div className="container">
              <FontAwesomeIcon icon={faChain} size="xs" />
              <a
                href="https://ecommerce-mern-2022.herokuapp.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
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
              <a
                href="https://github.com/nicolasboada/ecommerce-web-app"
                target="_blank"
                rel="noreferrer noopener"
              >
                Source code
              </a>
            </div>
            <p>
              Fullstack ecommerce application for men clothing. Front-end on
              React with responsive design using Styled Components. REST API
              with Nodejs, Express, and MongoDB. State management using Redux.
              <br />
              Authentication implemented with JWT. <br />
            </p>
          </div>
        </div>
        <div className="mb28">
          <h2>Connect</h2>
          <p>
            Reach me at <a href="mailto:npboada@gmail.com">npboada@gmail.com</a>
            <br />
            <a
              href="https://github.com/nicolasboada"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <svg
              data="image/svg+xml,%3Csvg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.6928 18.3072C5.30227 17.9167 5.30227 17.2835 5.69279 16.893L15.9857 6.6001L9.5999 6.6001C9.04762 6.6001 8.5999 6.15238 8.5999 5.6001C8.5999 5.04781 9.04762 4.6001 9.59991 4.6001L18.3999 4.6001C18.6651 4.6001 18.9195 4.70545 19.107 4.89299C19.2945 5.08053 19.3999 5.33488 19.3999 5.6001L19.3999 14.4001C19.3999 14.9524 18.9522 15.4001 18.3999 15.4001C17.8476 15.4001 17.3999 14.9524 17.3999 14.4001L17.3999 8.01432L7.10701 18.3072C6.71649 18.6977 6.08332 18.6977 5.6928 18.3072Z"
                fill="currentColor"
              />
            </svg>
            <br />
            <a
              href="https://www.linkedin.com/in/nicolas-boada"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <svg
              data="image/svg+xml,%3Csvg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.6928 18.3072C5.30227 17.9167 5.30227 17.2835 5.69279 16.893L15.9857 6.6001L9.5999 6.6001C9.04762 6.6001 8.5999 6.15238 8.5999 5.6001C8.5999 5.04781 9.04762 4.6001 9.59991 4.6001L18.3999 4.6001C18.6651 4.6001 18.9195 4.70545 19.107 4.89299C19.2945 5.08053 19.3999 5.33488 19.3999 5.6001L19.3999 14.4001C19.3999 14.9524 18.9522 15.4001 18.3999 15.4001C17.8476 15.4001 17.3999 14.9524 17.3999 14.4001L17.3999 8.01432L7.10701 18.3072C6.71649 18.6977 6.08332 18.6977 5.6928 18.3072Z"
                fill="currentColor"
              />
            </svg>
            <br />
          </p>
        </div>
      </main>
      <footer>
        <div>
          <a
            href="https://github.com/nicolasboada"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-boada"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            href="mailto:npboada@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
