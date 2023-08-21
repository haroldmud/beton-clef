import Link from "next/link"
import { useRouter } from "next/router";
import NavMob from "./NavMob";
import Button from "../../ui/button";
import { navData } from "../fonctions/data";

export default function Nav() {
  const list = navData;

  const router = useRouter();
  const currentRoute = router.pathname;
  return(
    <nav className="flex justify-center">
        <div className="md:flex justify-between xl:w-9/12 w-11/12 py-2 bg-blue px-2 z-20 max-w-7xl">
          <NavMob/>
          <div className="hidden md:flex flex-col justify-center">
            <ul className="flex gap-4 text-white">
            <li className="font-bold text-xl">
            <Link href={list[0].path} className={currentRoute === `${list[0].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[0].name}
            </Link>
            </li>
            {
              currentRoute === list[0].path &&
            <div className="md:flex gap-4">
              <li className="font-bold text-xl">
              <Link href={list[1].path} className={currentRoute === `${list[1].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
                {list[1].name}
              </Link>
              </li>
              <li className="font-bold text-xl">
              <a href={list[2].path} className={currentRoute === `${list[2].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
                {list[2].name}
              </a>
              </li>
              <li className="font-bold text-xl">
              <Link href={list[3].path} className={currentRoute === `${list[3].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
                {list[3].name}
              </Link>
              </li>
            </div>
            }
            <li className="font-bold text-xl">
            <Link href={list[4].path} className={currentRoute === `${list[4].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[4].name}
            </Link>
            </li>
          </ul>
          </div>
          <Link href="/contact">
            <Button style="hidden">COMMANDEZ UN DEVIS</Button>
          </Link>
        </div>
      </nav>
  )
}