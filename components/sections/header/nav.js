import Link from "next/link"
import { useRouter } from "next/router";
import NavMob from "./NavMob";


export default function Nav() {
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
    <nav className="flex justify-center">
        <div className="md:flex justify-between sm:w-9/12 w-11/12 py-2 bg-blue px-2">
          <NavMob/>
          <div className="hidden md:flex flex-col justify-center">
            <ul className="flex gap-4 text-white">
            <li className="font-bold text-xs">
            <Link href={list[0].path} className={currentRoute === `${list[0].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[0].name}
            </Link>
            </li>
            <li className="font-bold text-xs">
            <Link href={list[1].path} className={currentRoute === `${list[1].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[1].name}
            </Link>
            </li>
            <li className="font-bold text-xs">
            <Link href={list[2].path} className={currentRoute === `${list[2].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[2].name}
            </Link>
            </li>
            <li className="font-bold text-xs">
            <Link href={list[3].path} className={currentRoute === `${list[3].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[3].name}
            </Link>
            </li>
            <li className="font-bold text-xs">
            <Link href={list[4].path} className={currentRoute === `${list[4].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[4].name}
            </Link>
            </li>
          </ul>
          </div>
          <div className="hidden sm:flex flex-col justify-center">
          <a href="#" className="text-blue sm:text-xs text-base font-bold bg-yellow h-fit sm:p-1 p-2 sm:rounded-lg rounded-xl shadow-sm">COMMANDEZ UN DEVIS</a>
        </div>
        </div>
      </nav>
  )
}