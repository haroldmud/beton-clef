import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavMobProps {
  open: boolean
  click: () => void
  unclick: () => void
  activeHash?: string
}

const sectionLinks = [
  { name: 'ACCEUIL',     hash: '#home' },
  { name: 'SERVICES',    hash: '#function' },
  { name: 'REALISATION', hash: '#realisation' },
  { name: 'A PROPOS',    hash: '#about' },
]

function scrollTo(hash: string, close: () => void) {
  close()
  setTimeout(() => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }, 50)
}

export default function NavMob({ open, click, unclick, activeHash = '#home' }: NavMobProps) {
  const router = useRouter()
  const currentRoute = router.pathname
  const isHome = currentRoute === '/'

  return (
    <section className="lg:hidden flex justify-between">
      <div className="lg:hidden flex gap-2 relative">
        <div onClick={click} className={`${open ? '' : 'hidden'} flex gap-2`}>
          <img className="h-6" src="/assets/icons/menu.png" alt="" />
          <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">MENU</h3>
        </div>
        <div onClick={unclick} className={`${open ? 'hidden' : 'h-32'} flex gap-2`}>
          <img className="h-4 mt-1" src="/assets/icons/close.png" alt="" />
          <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">FERME</h3>
        </div>
      </div>
      <div className={`${open ? 'hidden' : 'absolute z-50'} top-12 w-10/12 left-6 h-fit flex flex-col justify-center`}>
        <ul className="flex flex-col gap-4 text-white mx-auto">
          {isHome ? (
            sectionLinks.map(({ name, hash }) => (
              <li key={hash} className="font-bold text-xl">
                <button
                  onClick={() => scrollTo(hash, unclick)}
                  className={activeHash === hash ? 'border-b-2 border-yellow text-yellow' : 'text-white'}
                >
                  {name}
                </button>
              </li>
            ))
          ) : (
            <li className="font-bold text-xl">
              <Link href="/" className="text-white">ACCEUIL</Link>
            </li>
          )}
          <li className="font-bold text-xl">
            <Link href="/contact" className="text-white">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <Link href="/contact">
          <button className="text-blue text-[0.9rem] px-2 font-bold bg-yellow h-fit sm:rounded-lg rounded-xl shadow-sm">
            COMMANDEZ UN DEVIS
          </button>
        </Link>
      </div>
    </section>
  )
}
