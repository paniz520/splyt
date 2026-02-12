import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = new SplitText("#h11", {
      type: "chars",
    });
    const secondTextSplit = new SplitText("#h12", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#h11",
        start: "top 78%",
       
      },
    });

    gsap.to("#h2", {
      duration: 1,
      opacity :1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: "#h2",
        start: "top 73%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#h12",
        start: "top 68%",
      },
    });
  }, []);
  return (
    <div id="mainDiv" className="2xl:text-[6.5rem] md:text-7xl text-5xl font-bold uppercase leading-[7vw] tracking-[-.35vw] flex flex-col justify-center items-center h-full  gap-16 ">
      <div className="2xl:py-0 py-3 md:text-center px-6 text-dark-brown md:pt-10">
        <h1 id="h11" className="scale-y-155 ">We have 6</h1>
      </div>

      <div id="h2" className="-rotate-2 md:translate-y-5 border-[.5vw] border-milk absolute z-10 opacity-0">
        <div  className="bg-middle-brown  p-3 2xl:px-5 px-3">
          <h2  className="text-milk scale-y-140">freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 md:text-center text-dark-brown md: mt-4">
        <h1 id="h12" className="scale-y-155">delicious flavors</h1>
      </div>
    </div>
  );
}

export default FlavorTitle
