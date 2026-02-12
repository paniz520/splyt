import { useMediaQuery } from "react-responsive";
import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";


const Flavor = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const sliderRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    
    if (!sliderRef.current) return;
    
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
    console.log(scrollAmount)

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "bottom bottom",
          end: `+=${scrollAmount + 1400}px`,
          scrub: true,
          pin: true,
          
        },
      });

      tl.to(".scroll", {
        x: `-${scrollAmount + 5000}px`,
        ease: "power1.inOut",
      });
    }


  }, [isTablet]);
  return (
    <section className="flavor-section  ">
      <div className="scroll  flex lg:flex-row flex-col items-center relative ">
        <div ref={sliderRef} className="lg:w-[52%] flex-none h-80 lg:h-full md:mt-10  xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="w-full md:mb-6">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default Flavor;