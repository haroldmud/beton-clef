import Info from "./header/info"
import Nav from "./header/nav"

export default function Header(props) {
  return(
    <header className="text-blue">
      <Info/>
      <section className="relative">
        <div className="absolute w-full">
          <Nav/>
        </div>
        <div>
          {props.children}
        </div>
        <img className="h-[30rem] w-full object-cover fill-neutral-400" src={props.headerImg} alt="hero section image" />
      </section>
      </header>
  )
}
