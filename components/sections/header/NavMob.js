import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../ui/button";
import React,{ useState, useEffect } from "react";


export default function NavMob() {
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
  const [open, setOpen] = useState(true);

  return(
    <section className="xl:hidden flex justify-between">
      <div className="xl:hidden flex gap-2">
            <img onClick={()=> setOpen(current => !current)} className={`${open ? "" : "hidden"} h-6`} src="/assets/icons/menu.png" alt="" />
            <img onClick={()=> setOpen(current => !current)} className={`${open ? "hidden" : ""} h-4 mt-1`} src="/assets/icons/close.png" alt="" />
            <h3 className="text-white   font-bold">MENU</h3>
          </div>
          <div className={`${open ? "hidden" : ""} md:hidden   flex flex-col justify-center`}>
            <ul className="flex flex-col mt-4 gap-4 text-white">
            <li className="font-bold text-xl">
            <Link href={list[0].path} className={currentRoute === `${list[0].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[0].name}
            </Link>
            </li>
            <li className="font-bold text-xl">
            <Link href={list[1].path} className={currentRoute === `${list[1].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[1].name}
            </Link>
            </li>
            <li className="font-bold text-xl">
            <Link href={list[2].path} className={currentRoute === `${list[2].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[2].name}
            </Link>
            </li>
            <li className="font-bold text-xl">
            <Link href={list[3].path} className={currentRoute === `${list[3].path}` ? "border-b-2 border-yellow text-yellow " : "text-white"}>
              {list[3].name}
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
              <Button>COMMANDEZ UN DEVIS</Button>
            </Link>
          </div>
    </section>
  )
}