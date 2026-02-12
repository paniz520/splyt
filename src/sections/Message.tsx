import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all"

const Message = () => {
   
useGSAP(() => {
const splitText = new SplitText("#message-text", { type: "words" });

// Timeline with scroll trigger
const tl = gsap.timeline({
scrollTrigger: {
trigger: "#message-text",
start: "top 30%",
end: "bottom 80%",
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
{ xPercent: 100, opacity: 0 }, // start off-screen right
{ xPercent: 0, opacity: 1, duration: 1 , ease: "expo.inOut", color: "#7F3B2D" },
"-=2" // start a bit before words finish
);

return () => splitText.revert();
}, []);
  return (
    <div id="message-text" className=" w-full h-[140vh]  justify-center items-center gap-6 relative bg-[#7F3B2D] overflow-hidden flex flex-col">
    <p  className="text-[#8c4f42] text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
     Stir up your 
     </p>
     <p  className="text-[#8c4f42] text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
    fearless past and
    </p>
    <div className="overflow-hidden rotate-4">
    <span id="span" className="bg-light-brown w-70 text-[#7F3B2D]  border-7 border-[#7F3B2D] outline-0 font-Antonio scale-y-135 scale-x-125 font-extrabold flex justify-center items-center 
     text-[80px]">FUEL UP</span>
    </div>
     <p className="text-[#8c4f42] text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
    your future with every 
    </p>
    <p  className="text-[#8c4f42] text-[70px] font-Antonio scale-y-135 scale-x-125 font-extrabold text-center tracking-tight  leading-19  flex-col">
    gulp of Perfect Protein
    </p>
    </div>
  )
}

export default Message
