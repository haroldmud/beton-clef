import Link from 'next/link'
import { useRouter } from 'next/router'
import NavMob from './NavMob'
import Button from '../../ui/button'
import { navData } from '../fonctions/data'

interface NavProps {
  open?: boolean
  click?: () => void
  unclick?: () => void
}

export default function Nav({ open, click, unclick }: NavProps) {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav className="flex justify-center">
      <div className="lg:flex justify-between xl:w-9/12 w-11/12 py-2 bg-blue px-2 z-20 max-w-7xl">
        <NavMob open={open ?? true} click={click ?? (() => {})} unclick={unclick ?? (() => {})} />
        <div className="hidden lg:flex flex-col justify-center">
          <ul className="flex gap-4 text-white">
            <li className="font-bold text-xl">
              <Link href={navData[0].path} className={currentRoute === navData[0].path ? 'border-b-2 border-yellow text-yellow' : 'text-white'}>
                {navData[0].name}
              </Link>
            </li>
            {currentRoute === navData[0].path && (
              <div className="md:flex gap-4">
                <li className="font-bold text-xl">
                  <Link href={navData[1].path} className={currentRoute === navData[1].path ? 'border-b-2 border-yellow text-yellow' : 'text-white'}>
                    {navData[1].name}
                  </Link>
                </li>
                <li className="font-bold text-xl">
                  <a href={navData[2].path} className="text-white">
                    {navData[2].name}
                  </a>
                </li>
                <li className="font-bold text-xl">
                  <Link href={navData[3].path} className={currentRoute === navData[3].path ? 'border-b-2 border-yellow text-yellow' : 'text-white'}>
                    {navData[3].name}
                  </Link>
                </li>
              </div>
            )}
            <li className="font-bold text-xl">
              <Link href={navData[4].path} className={currentRoute === navData[4].path ? 'border-b-2 border-yellow text-yellow' : 'text-white'}>
                {navData[4].name}
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
