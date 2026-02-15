import gsap from "gsap";
import { flavorlists } from "../constants/index.ts";
import { useRef } from "react";
import useMediaQuery from "react-responsive";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    const drinkImg = container.querySelector(".drink-img") as HTMLImageElement;
    const elementsImg = container.querySelector(
      ".elements-img"
    ) as HTMLImageElement;

    if (drinkImg) {
      gsap.to(drinkImg, {
        x: x * -0.03,
        y: y * -0.03,
        duration: 0.3,
      });
    }

    if (elementsImg) {
      gsap.to(elementsImg, {
        x: x * 0.04,
        y: y * 0.04,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = e.currentTarget;
    const drinkImg = container.querySelector(".drink-img") as HTMLImageElement;
    const elementsImg = container.querySelector(
      ".elements-img"
    ) as HTMLImageElement;

    if (drinkImg) {
      gsap.to(drinkImg, { x: 0, y: 0, duration: 0.3 });
    }

    if (elementsImg) {
      gsap.to(elementsImg, { x: 0, y: 0, duration: 0.3 });
    }
  };



  return (
    <div
    ref={sliderRef}
      className="lg:h-screen min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0 "
    >
      <div
        className="h-full w-full flex md:flex-row flex-col items-center 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap md:pl-9"
        style={{ willChange: "transform" }}
      >
        {flavorlists.map((flavor, index) => {
          return (
            <div
              className={`relative z-30 lg:w-[50vw] w-[84%] lg:h-[70vh] md:w-[90vw] md:h-[50vh] flex-none ${flavor.rotation}`}
              key={flavor.name}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              onMouseMove={handleMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="object-cover"
                src={`/images/${flavor.color}-bg.svg`}
                alt=""
              />

              <img
                src={`images/${flavor.color}-drink.webp`}
                alt={`${flavor.name} drink`}
                className="drink-img absolute md:-bottom-1 bottom-0 right-0 left-0 rotate-0 z-40 object-contain w-full h-full"
              />

              <img
                src={`images/${flavor.color}-elements.webp`}
                alt={`${flavor.name} elements`}
                className="elements-img absolute z-40 -bottom-1 right-0 left-0 rotate-0 object-contain w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlavorSlider;