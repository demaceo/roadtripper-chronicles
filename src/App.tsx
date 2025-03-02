import "./App.css";
import { HashRouter, useRoutes } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import About from "./components/About/About.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App: React.FC = () => {
  const Routes = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: (
          <>
            <NavBar />
            <Hero
              title="ROADTRIPPER CHRONICLES"
              subtitle="The Podcast"
              backgroundImage="http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg"
              cloudImage="http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png"
              fogImage="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
            />{" "}
            {/* <Footer /> */}
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <NavBar />
            <About />
            <Footer />
          </>
        ),
      },
    ]);
    return routes;
  };

  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;
