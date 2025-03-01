import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Howl } from "howler";
import rvImage from "./assets/rv.png";
import smokeImage from "./assets/smoke.png";
// import spotifyImage from "./assets/spotify.png";
import spotifyImage from "./assets/Spotify.svg";
import tireScreech from "./assets/tire_screech.mp3";
import "./App.css";

const App: React.FC = () => {
  const rvRef = useRef<HTMLImageElement>(null);
  const smokeRef = useRef<HTMLImageElement>(null);
  const spotifyRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const sound = new Howl({ src: [tireScreech], volume: 0.8 });

    gsap.to(rvRef.current, {
      x: window.innerWidth + 200,
      duration: 2.5,
      ease: "power2.out",
      onStart: () => sound.play(),
      onComplete: () => {
        gsap.to(smokeRef.current, {
          opacity: 1,
          duration: 0.5,
          onComplete: () => {
            gsap.to(smokeRef.current, { opacity: 0, duration: 1, delay: 0.5 });
            gsap.to(spotifyRef.current, {
              opacity: 1,
              duration: 1,
              delay: 0.5,
            });
          },
        });
      },
    });
  }, []);

  return (
    <div className="animation-container">
      <img ref={rvRef} id="rv" src={rvImage} alt="Green RV" />
      <img ref={smokeRef} id="smoke" src={smokeImage} alt="Smoke Cloud" />
      <a
        ref={spotifyRef}
        id="spotify-link"
        href="https://open.spotify.com/show/YOUR_SPOTIFY_LINK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={spotifyImage} alt="Spotify Logo" />
      </a>
    </div>
  );
};

export default App;
