import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden text-netral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900  ">
        <div className="flixed top-0 -z-10 h-full w-full"></div>
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Experience />
          <Project />
          <Skill />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
