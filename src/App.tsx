import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Benefits from "./sections/Benefits";

gsap.registerPlugin(ScrollTrigger,SplitText, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div className="bg-stork-blue  overflow-x-hidden">
       <div id="smooth-wrapper">
       <div id="smooth-content"> 
      <Hero />
      <Message />
      <Flavor />
      <Benefits />
      </div>
      </div>
    </div>
  )
}

export default App
