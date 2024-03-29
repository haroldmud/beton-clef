import Info from "./header/info"
import Nav from "./header/nav"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(()=> {
    const handleScroll= ()=>{
      if(window.scrollY >=200) {
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    }
    window.addEventListener(scroll, handleScroll());

    return ()=>{
      window.removeEventListener(scroll, handleScroll())
    }

  })

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return(
    <header className="text-blue font-inter relative lg:mb-40 md:mb-[10rem]">
      <Info/>
      <section className="relative">
        <div className="sticky top-0 w-full ">
          <Nav open={props.open} click={props.click} unclick={props.unclick}/>
        </div>
        <Link href="/">
          <img className="headerImg sm:h-[47.1rem] h-[35rem] w-full object-cover fill-neutral-400" src={props.headerImg} alt="hero section image" />
        </Link>
      </section>
      <div>
        {props.children}
      </div>
      {
        isScroll &&
      <div className={`fixed w-full bottom-2 ${isVisible ? "animate-bounce" : ""} z-50 flex justify-end pr-4`}>
        <a href="#home">
          <img className="w-12 rounded-3xl" src="/assets/icons/up.png" alt="" />
        </a>
      </div>
      }
      </header>
  )
}
