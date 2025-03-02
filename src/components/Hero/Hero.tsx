// import React from "react";
// import "./Hero.css";

// const Hero: React.FC = () => {
//   return (
//     <div className="wrapper">
//       <div
//         className="page-header section-dark"
//         style={{
//           backgroundImage:
//             "url('http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg')",
//         }}
//       >
//         <div className="filter"></div>
//         <div className="content-center">
//           <div className="container">
//             <div className="title-brand">
//               <h1 className="presentation-title">ROADTRIPPER CHRONICLES</h1>
//               <div className="fog-low">
//                 <img
//                   src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
//                   alt="fog"
//                 />
//               </div>
//               <div className="fog-low right">
//                 <img
//                   src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
//                   alt="fog"
//                 />
//               </div>
//             </div>
//             <h2 className="presentation-subtitle text-center">The Podcast</h2>
//           </div>
//         </div>
//         <div
//           className="moving-clouds"
//           style={{
//             backgroundImage:
//               "url('http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png')",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import "./Hero.css"; // Import custom CSS

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  cloudImage: string;
  fogImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  cloudImage,
  fogImage,
}) => {
  return (
    <div className="wrapper">
      <div
        className="page-header section-dark"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <div className="title-brand">
              <h1 className="presentation-title">{title}</h1>
              <div className="fog-low">
                <img src={fogImage} alt="Fog" />
              </div>
              <div className="fog-low right">
                <img src={fogImage} alt="Fog" />
              </div>
            </div>

            <h2 className="presentation-subtitle text-center">{subtitle}</h2>
          </div>
        </div>
        <div
          className="moving-clouds"
          style={{ backgroundImage: `url(${cloudImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
