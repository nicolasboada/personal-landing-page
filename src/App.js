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
            // screenImg={"https://i.ibb.co/4KCc3fs/store.png"}
            screenImg={"https://i.ibb.co/b5J7vZ4/store-250x122.png"}
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
            // screenImg={"https://i.ibb.co/Cs3g7VW/Admin.png"}
            screenImg={"https://i.ibb.co/60xFS4X/Admin-250x120.png"}
            mobileImg={""}
            projectLink={"https://store-admin-app.netlify.app/"}
            githubLink={"https://github.com/nicolasboada"}
            stack={["React", "Node.js", "MongoDB"]}
          />
          <Projects
            title={"Face detection webapp"}
            description={"Webapp to detect faces in images."}
            screenImg={
              "https://i.ibb.co/T4PhGVy/2022-04-12-12-53-57-Window-250x121.png"
            }
            mobileImg={
              "https://i.ibb.co/Cm4qYq9/Captura-de-pantalla-2022-04-12-13-00-12-60x130.png"
            }
            projectLink={"https://face-detection-app-123.netlify.app/"}
            githubLink={"https://github.com/nicolasboada/face-detection-webapp"}
            stack={["React", "MaterialUI"]}
          />
          <Projects
            title={"TODO list"}
            description={"TODO list web app to manage your daily tasks."}
            // screenImg={"https://i.ibb.co/3NNZCyn/todo.png"}
            screenImg={"https://i.ibb.co/NKgX2Pz/todo-250x120.png"}
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
