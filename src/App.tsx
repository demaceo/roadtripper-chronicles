import "./App.css";
import { HashRouter, useRoutes } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
// import About from "./components/About/About.tsx";
// import Footer from "./components/Footer/Footer.tsx";

const App: React.FC = () => {
  const Routes = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: (
          <>
            <NavBar />
            <Hero
              // backgroundImage="http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg"
              // backgroundImage="https://www.hachettebookgroup.com/wp-content/uploads/2019/05/monumentvalley-roadtrip.jpg"
              // backgroundImage="https://fwtx.com/downloads/42229/download/Reduced_DSC01028%20%281%29.jpg?cb=6d015ea1fce7e79ce2281de8a85e8ce1&w=3200"
              // backgroundImage="https://hips.hearstapps.com/hmg-prod/images/empty-paved-road-at-sunset-in-the-chilean-patagonia-royalty-free-image-1591901619.jpg?crop=0.88973xw:1xh;center,top&resize=1200:*"
              // backgroundImage="https://cms.travelnoire.com/wp-content/uploads/2023/09/pexels-nicolas-postiglioni-1537979.jpg"
              // backgroundImage="https://www.fodors.com/wp-content/uploads/2020/07/nicolas-moscarda-64wmTdsbcYU-unsplash-desktop-crop.jpg"
              // backgroundImage="https://www.vmcdn.ca/f/files/via/images/outdoors/bc-road-trip---covid-travel-restriction-road-checks.jpg;w=1200;h=800;mode=crop"
              // backgroundImage="https://static.vecteezy.com/system/resources/previews/007/906/965/non_2x/road-trip-activity-background-free-vector.jpg"
              // backgroundImage="https://www.earthtrekkers.com/wp-content/uploads/2022/02/Grand-Teton-Yellowstone-Glacier.jpg.webp"
              // backgroundImage="https://www.enterprise.com/content/experience-fragments/ecom/en/value_propositions/destinations-promotional-teasers/master/_jcr_content/root/container_1066138387/teaser_copy_copy_cop_1310975496.coreimg.png/1707502318960/road-trip-essentials.png"
            />
            {/* <Footer /> */}
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <NavBar />
            <Hero /> {/* <Footer /> */}
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
