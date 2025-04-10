import React, { useEffect } from "react";
import LaserPromo from "./LaserPromo";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return <LaserPromo />;
}

export default App;
