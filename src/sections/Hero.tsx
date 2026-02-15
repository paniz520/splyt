import gsap from "gsap"
import HeroBG from "../../public/videos/hero-bg.mp4"
import Navbar from "../components/Navbar"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    gsap.to("#hero", {
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 2
      },
      rotate: isMobile ? 5 : 10,
      scale: isMobile ? 0.97 : 0.95,
      ease: "power1.inOut"
    });
  }, [isMobile]);

  useGSAP(() => {
    const headEl = document.querySelector(".head");
    if (!headEl) return;

    const headingSplit = new SplitText(headEl, { type: "chars, words" });
    const yOffset = isMobile ? 50 : 100;
    const stagger = isMobile ? 0.02 : 0.03;

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(".description", {
      delay: 1,
      opacity: 0,
      clipPath: "inset(50% 100% 50% 100%)",
      duration: 0.7
    })
      .from(".btn", {
        opacity: 1,
        delay: 1,
        clipPath: "inset(50% 100% 50% 100%)"
      }, "-=0.5")
      .from(headingSplit.chars, {
        y: yOffset,
        stagger,
        ease: "expo.out",
        duration: 0.01,
        opacity: 0
      }, "-=0.2");

    if (isMobile) {
      const descEl = document.querySelector(".hero-description");
      const cansEl = document.querySelector(".hero-cans");
      if (descEl) {
        tl.from(descEl, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");
      }
      if (cansEl) {
        tl.from(cansEl, { opacity: 0, y: 30, duration: 0.6 }, "-=0.2");
      }
    }

    return () => {
      headingSplit.revert();
    };
  }, [isMobile]);

  return (
    <section id="hero" className="relative min-h-screen md:min-h-[110vh] bg-stork-blue overflow-hidden ">
      <Navbar />
      <div className="relative z-50 flex flex-col items-center gap-4 md:gap-6 lg:gap-10 pt-[12vh] md:pt-[22vh] lg:pt-[29vh] px-4 md:px-6">
        <h1 className="head w-full text-5xl md:text-6xl lg:text-[5.6rem] text-center font-Antonio font-bold leading-tight md:leading-1.5 text-dark-brown whitespace-nowrap">
          FREAKING DELICIOUS
        </h1>

        <p className="description w-full max-w-[90vw] md:w-[60vw] lg:w-160 h-auto lg:h-29 py-4 md:py-4 lg:py-5 px-4 md:px-6 text-2xl md:text-4xl lg:text-[5.2rem] flex justify-center items-center font-Antonio font-bold text-milk bg-middle-brown mx-auto leading-tight max-md:leading-6 md:leading-3.5 md:-rotate-4 -rotate-2 border border-[#865720] md:border-[0.5vw] md:border-[#865720]">
          <span className="inline-block max-md:scale-x-[1.7] 
          max-md:scale-y-[1.7] max-md:origin-center">PROTEIN + CAFFEINE</span>
        </p>

        {isMobile && (
          <p className="hero-description text-dark-brown text-sm text-center font-paragraph max-w-[85vw] leading-relaxed">
            Live life to the fullest with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
          </p>
        )}

        <button className="btn text-dark-brown rounded-full min-h-12 md:min-h-[2.5vw] lg:h-[3.1vw] font-Antonio font-bold px-6 md:px-4 py-3 md:py-0 tracking-wide bg-light-brown text-sm hover:scale-110 transition-all duration-200">
          CHUG THE SPYLT
        </button>

        {isMobile && (
          <div className="hero-cans flex items-end justify-center w-full h-1/2 mx-auto mr-16 mt-2">
            <img
              src="/images/cans.webp"
              alt="Caffeinated Chocolate Milk"
              className="relative z-0 h-full w-auto object-contain "
            />
          
          </div>
        )}
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
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
  );
};

export default Hero;
