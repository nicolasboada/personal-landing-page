import "./styles/main.css";
import { ContactIcons } from "./components/ContactIcons";
import { useRef } from "react";
import Header from "./components/Header";
import MessageForm from "./components/MessageForm";
import Connect from "./components/Connect";
import TitleAndProfile from "./components/TitleAndProfile";
import Projects from "./components/Projects";

function App() {
  const inputRef = useRef();
  const handleCLick = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    inputRef.current.focus({ preventScroll: true });
  };
  return (
    <>
      {/* <div className="header-bg"></div> */}
      <Header />
      <main>
        <TitleAndProfile handleCLick={handleCLick} />
        <div className="mb56">
          <h2>
            <span id={"projects"}></span>Projects
          </h2>
          <Projects
            title={"E-commerce Web App"}
            description={"Fullstack ecommerce application."}
            screenImg={"https://i.ibb.co/4KCc3fs/store.png"}
            mobileImg={
              "https://i.ibb.co/hXx8YJz/Captura-de-pantalla-2022-04-02-12-56-36.png"
            }
            projectLink={"https://store-mern-stack.netlify.app/"}
            githubLink={"https://github.com/nicolasboada/ecommerce-web-app"}
            stack={["React", "Redux", "Node.js", "MongoDB"]}
          />
          <Projects
            title={"Admin and Dashbord App"}
            description={
              "Admin and report web app to manage ecommerce application."
            }
            screenImg={"https://i.ibb.co/Cs3g7VW/Admin.png"}
            mobileImg={""}
            projectLink={"https://store-admin-app.netlify.app/"}
            githubLink={"https://github.com/nicolasboada"}
            stack={["React", "Node.js", "MongoDB"]}
          />
          <Projects
            title={"TODO list"}
            description={"TODO list web app to manage your daily tasks."}
            screenImg={"https://i.ibb.co/3NNZCyn/todo.png"}
            mobileImg={
              "https://i.ibb.co/Z1PYbXM/Captura-de-pantalla-2022-04-02-13-04-41.png"
            }
            projectLink={"https://todo-list-app-mui.netlify.app/"}
            githubLink={"https://github.com/nicolasboada"}
            stack={["React", "MaterialUI"]}
          />
        </div>
        <Connect />
      </main>
      <MessageForm inputRef={inputRef} />
      <footer>
        <ContactIcons />
      </footer>
    </>
  );
}

export default App;
