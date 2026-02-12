import gsap from "gsap"
import HeroBG from "../../public/videos/hero-bg.mp4"
import Navbar from "../components/Navbar"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
const Hero = () => {
    useGSAP(()=>{
    
     gsap.to("#hero", {
      scrollTrigger : {
        trigger : "#hero",
        start : "top top",
        end: "bottom top",
        scrub: 2
      },
      rotate: 10,
      scale: 0.95,
      ease: "power1.inOut"
     })
  },[])
  
  useGSAP( ()=>{
    const headingSplit = new SplitText('.head', { type:"chars, words" });
    gsap.timeline({defaults: {duration:1}}).from('.description', {
      delay: 1 ,
      opacity: 0 ,
      clipPath: "inset(50% 100% 50% 100%)",
      duration: 0.7
    })
    .from(".btn",
      {opacity:1 , delay:1 , clipPath: "inset(50% 100% 50% 100%)"}, "-=0.5")
     .from(headingSplit.chars, {
      y:100,
      stagger: 0.03 ,
      ease : "expo.out",
      duration:0.01,
      opacity: 0,
     },"-=0.2")
  },[])

  // Hero.tsx
return (
  <section id="hero" className="relative min-h-screen bg-stork-blue overflow-hidden">
    <Navbar />
    <div className="relative z-50 flex flex-col items-center gap-10 pt-[29vh]">
      <h1 className="head w-full text-[5.6rem] text-center font-Antonio font-bold leading-1.5 text-dark-brown">
        FREAKING DELICIOUS
      </h1>

      <p className="description w-160 h-29 text-[5.2rem] flex justify-center items-center font-Antonio font-bold text-milk bg-middle-brown mx-auto leading-3.5 -rotate-4">
        PROTEIN + CAFFEINE
      </p>

      <button className="btn text-dark-brown rounded-[30vw] h-[3.1vw] font-Antonio font-bold px-4 tracking-wide bg-light-brown text-sm hover:scale-110 transition-all duration-200">
        CHIG A SPILT
      </button>
    </div>

    <div className="absolute inset-0 z-10">
      <video
        className="w-full h-full object-cover"
        preload="auto"
        src={HeroBG}
        playsInline
        muted
        autoPlay
      />
    </div>
  </section>
)


}

export default Hero
