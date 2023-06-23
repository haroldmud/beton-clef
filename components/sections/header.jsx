import Info from "./header/info"
import Nav from "./header/nav"
import Link from "next/link"

export default function Header(props) {
  return(
    <header className="text-blue font-inter relative lg:mb-40 md:mb-[10rem]">
      <Info/>
      <section className="relative">
        <div className="absolute w-full">
          <Nav/>
        </div>
        <Link href="/">
          <img className="headerImg sm:h-[47.1rem] h-[35rem] w-full object-cover fill-neutral-400" src={props.headerImg} alt="hero section image" />
        </Link>
      </section>
      <div>
        {props.children}
      </div>
      </header>
  )
}
