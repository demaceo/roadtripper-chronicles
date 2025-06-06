import "./App.css";
import { HashRouter, useRoutes } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
// import About from "./components/About/About.tsx";
import Footer from "./components/Footer/Footer.tsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.tsx";
import TermsOfService from "./components/TermsOfService/TermsOfService.tsx";
// import Vinyl from "./components/Records/Vinyl/Vinyl.tsx";
// import WoodVinyl from "./components/Records/WoodVinyl/WoodVinyl.tsx";

const App: React.FC = () => {
  const Routes = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: (
          <>
            <NavBar />
            <Hero />
            {/* <Vinyl /> */}
            {/* <WoodVinyl /> */}
            <Footer />
          </>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <>
            <NavBar />
            <PrivacyPolicy />
            <Footer />
          </>
        ),
      },
      {
        path: "/terms-of-service",
        element: (
          <>
            <NavBar />
            <TermsOfService />
            <Footer />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <NavBar />
            <Hero />
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
