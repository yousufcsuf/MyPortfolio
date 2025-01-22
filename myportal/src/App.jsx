import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Timeline from "./components/Timeline";

import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*Navigation bar */}
      <div class="flex flex-row-reverse space-x-4 space-x-reverse border-solid border-2 border-sky-500 ">
        <div>
          <p className="text-3xl mx-2 mr-16"> Skills</p>
        </div>
        <div>
          <p className="text-3xl mx-2">Professional Experience</p>
        </div>
        <div>
          <p className="text-3xl mx-2">Home</p>
        </div>
      </div>

      {/*Home */}
      <div className=" min-h-screen bg-cyan-600">
        <p className="text-5xl">HOME</p>
      </div>
      {/*Professional Experience */}
      <div className=" min-h-screen bg-orange-600">
        <p className="text-5xl">Professional Experience </p>
        <Timeline />
      </div>
      {/*Skills*/}
      <div className=" min-h-screen bg-slate-600">
        <p className="text-5xl">Skills </p>
      </div>
    </>
  );
}

export default App;
