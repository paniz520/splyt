
import gsap from "gsap";

const Navbar = () => {

const handleMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  const magnet = e.currentTarget;
  const { left, top, width, height } = magnet.getBoundingClientRect();
  const x = e.clientX - (left + width / 2);
  const y = e.clientY - (top + height / 2);
  gsap.to(magnet, { x: x * 0.5, y: y * 0.5,scale:1.1, duration: 0.3 });
}
const handlemouseleave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  const magnet = e.currentTarget;
  gsap.to(magnet, { x: 0, y: 0, duration: 0.3 });
}
  return (
      <nav className="fixed top-0 left-0 z-50 md:p-4 md:px-8 p-4 flex w-full  items-center justify-between">
      <img onMouseMove={handleMove} onMouseLeave={handlemouseleave} src="/images/nav-logo.svg" alt="nav-logo" className="md:w-20 w-20" />
      <span
      className="max-md:hidden"
      >
      <svg 
       xmlns="http://www.w3.org/2000/svg" width="36" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        </span>
        <button className="text-dark-brown bg-[#fef3f0] rounded-[30vw] md:h-[3.1vw] h-8 font-Antonio font-bold px-4 tracking-wide hover:bg-light-brown duration-300 transition-colors text-sm">FIND IN STORES</button>
      </nav>
  )
}

export default Navbar
