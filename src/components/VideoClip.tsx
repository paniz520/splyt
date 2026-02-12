
import video from '../../public/videos/pin-video.mp4'
import circleTxt from '../../public/images/circle-text.svg'
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const VideoClip = () => {
      const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main",
          start: "top 30%",
          end: "200% bottom",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
        duration:4
      });
    }
  });
  return (
    <section
    id='main'
     className='relative md:h-[110vh] overflow-hidden md:-translate-y-[20%]! mt-0 '>
        <div
        className='video-box'
        style={{
        clipPath: isMobile
        ? "circle(100% at 50% 50%)"
        : "circle(8% at 50% 50%)",
        }}
        >
        <video 
        className=''
        preload='auto'
        src={video}
        playsInline
        muted
        loop
        autoPlay
        />
        <div className='absolute md:mt-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <img src={circleTxt} alt="Circle Text" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[7.7vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full'>
                <img
                className='absoulute inset-0 ml-1.5 size-[2.8vw]'
                src="../../public/images/play.svg" alt="Play Button" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default VideoClip
