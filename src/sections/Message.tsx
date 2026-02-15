import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all"

const Message = () => {
   
useGSAP(() => {
const splitText = new SplitText("#message-text", { type: "words" });

const isSmallScreen = () => window.matchMedia("(max-width: 768px)").matches;

// Timeline with scroll trigger (trigger points differ for small screens)
const tl = gsap.timeline({
scrollTrigger: {
trigger: "#message-text",
start: isSmallScreen() ? "top 25%" : "top 30%",
end: isSmallScreen() ? "bottom 75%" : "bottom 80%",
scrub: true,
},
});

// Animate words color
tl.to(splitText.words, {
stagger: 0.15,
color: "#FAEADE",
})
// Pull-in span from the right
.fromTo(
"#span",
{ xPercent: 100, opacity: 0 },
{ xPercent: 0, opacity: 1, duration: 1, ease: "expo.inOut", color: "#7F3B2D" },
"-=2"
);

return () => splitText.revert();
}, []);
  return (
    <div id="message-text" className=" w-full 
    md:h-[140vh] h-screen  justify-center items-center gap-6 max-md:gap-3 relative bg-[#7F3B2D] overflow-hidden flex flex-col max-md:px-6 max-md:pt-20">
    <p  className="text-[#8c4f42] text-[50px] md:text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
     Stir up your 
     </p>
     <p  className="text-[#8c4f42] text-[50px] md:text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
    fearless past and
    </p>
    <div className="overflow-hidden rotate-4">
    <span id="span" className="bg-light-brown w-70 text-[#7F3B2D]  border-7 border-[#7F3B2D] outline-0 font-Antonio scale-y-135 scale-x-125 font-extrabold flex justify-center items-center 
     text-[50px] md:text-[80px]">FUEL UP</span>
    </div>
     <p className="text-[#8c4f42] text-[50px] md:text-[70px] font-Antonio scale-y-135 max-md:mb-6 max-md:mt-3 scale-x-125 font-extrabold text-center tracking-tight  leading-19 max-md:leading-16  flex-col">
    your future 
    <br className="md:hidden"/>
    <span>with every </span>
     
    </p>
    <p  className="text-[#8c4f42] text-[50px] md:text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
    gulp of Perfect Protein
    </p>
    </div>
  )
}

export default Message
