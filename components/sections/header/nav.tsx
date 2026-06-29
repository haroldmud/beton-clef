import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavMob from './NavMob'
import Button from '../../ui/button'
import { navData } from '../fonctions/data'

interface NavProps {
  open?: boolean
  click?: () => void
  unclick?: () => void
}

const sectionLinks = [
  { name: 'ACCEUIL',     hash: '#home' },
  { name: 'SERVICES',    hash: '#function' },
  { name: 'REALISATION', hash: '#realisation' },
  { name: 'A PROPOS',    hash: '#about' },
]

function scrollTo(hash: string) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Nav({ open, click, unclick }: NavProps) {
  const router = useRouter()
  const currentRoute = router.pathname
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    if (currentRoute !== '/') return

    const handleScroll = () => {
      if (window.scrollY === 0) setActiveHash('#home')
    }
    window.addEventListener('scroll', handleScroll)

    const ids = sectionLinks.map(l => l.hash.slice(1))
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHash(`#${id}`) },
        { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach(o => o.disconnect())
    }
  }, [currentRoute])

  const isActive = (hash: string) => currentRoute === '/' && activeHash === hash

  return (
    <nav className="flex justify-center">
      <div className="lg:flex justify-between xl:w-9/12 w-11/12 py-2 bg-blue px-2 z-20 max-w-7xl">
        <NavMob open={open ?? true} click={click ?? (() => {})} unclick={unclick ?? (() => {})} activeHash={activeHash} />
        <div className="hidden lg:flex flex-col justify-center">
          <ul className="flex gap-4 text-white">
            {currentRoute === navData[0].path ? (
              <div className="lg:flex gap-4">
                {sectionLinks.map(({ name, hash }) => (
                  <li key={hash} className="font-bold text-xl">
                    <button
                      onClick={() => scrollTo(hash)}
                      className={`transition-colors ${isActive(hash) ? 'border-b-2 border-yellow text-yellow' : 'text-white hover:text-yellow'}`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </div>
            ) : (
              <li className="font-bold text-xl">
                <Link href="/" className="text-white hover:text-yellow transition-colors">
                  ACCEUIL
                </Link>
              </li>
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
