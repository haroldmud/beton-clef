import Link from "next/link";
import { useRouter } from "next/router";

export default function NavMob(props) {
  const list = [
    {
      name:"ACCEUIL",
      path:"/"
    },
    {
      name:"A PROPOS",
      path:"/aboutUs"
    },
    {
      name:"SERVICES",
      path:"/service"
    },
    {
      name:"REALISATION",
      path:"/realisation"
    },
    {
      name:"CONTACT",
      path:"/contact"
    }
  ];
  const router = useRouter();
  const currentRoute = router.pathname;

  return(
    <section className="md:hidden flex justify-between">
      <div className="md:hidden flex gap-2 relative">
        <div onClick={props.click} className={`${props.open ? "" : "hidden"} flex gap-2`}>
          <img  className={` h-6`} src="/assets/icons/menu.png" alt="" />
          <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">MENU</h3>
        </div>
        <div onClick={props.unclick} className={`${props.open ? "hidden" : "h-32"} flex gap-2`}>
          <img  className={` h-4 mt-1`} src="/assets/icons/close.png" alt="" />
          <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">FERME</h3>
        </div>
            
          </div>
          <div className={`${props.open ? "hidden" : "absolute z-50"} top-12 w-10/12 left-6 h-fit flex flex-col justify-center`}>
            <ul className="flex flex-col gap-4 text-white mx-auto">
            <li className="font-bold text-xl">
            <Link href={list[0].path} className={currentRoute === `${list[0].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[0].name}
            </Link>
            </li>
            <li className="font-bold text-xl">
            <Link href={list[4].path} className={currentRoute === `${list[4].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[4].name}
            </Link>
            </li>
          </ul>
          </div>
          <div className="md:hidden">
            <Link href="/contact">
              <button  className="text-blue text-[0.9rem] px-2  font-bold bg-yellow h-fit sm:rounded-lg rounded-xl shadow-sm">
                COMMANDEZ UN DEVIS
              </button>
            </Link>
          </div>
    </section>
  )
}