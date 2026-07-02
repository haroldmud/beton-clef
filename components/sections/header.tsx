import Info from './header/info'
import Nav from './header/nav'
import Link from 'next/link'
import { useState, useEffect, useRef, ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
  headerImg: string
  open?: boolean
  click?: () => void
  unclick?: () => void
}

export default function Header({ children, headerImg, open, click, unclick }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [autoShow, setAutoShow] = useState(false)
  const [shaking, setShaking] = useState(false)
  const autoShowTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(prev => !prev)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // When the icon first appears, wait 3s then show tooltip + shake for 2s
  useEffect(() => {
    if (!isScroll) {
      setAutoShow(false)
      setShaking(false)
      if (autoShowTimer.current) clearTimeout(autoShowTimer.current)
      if (hideTimer.current) clearTimeout(hideTimer.current)
      return
    }
    autoShowTimer.current = setTimeout(() => {
      setAutoShow(true)
      setShaking(true)
      // stop shaking first, let scale + tooltip linger
      hideTimer.current = setTimeout(() => {
        setShaking(false)
      }, 2000)
      // then smoothly fade tooltip and unscale
      hideTimer.current = setTimeout(() => {
        setAutoShow(false)
      }, 2600)
    }, 3000)
    return () => {
      if (autoShowTimer.current) clearTimeout(autoShowTimer.current)
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [isScroll])

  return (
    <header className="text-blue font-inter relative lg:mb-40 md:mb-[12rem]">
      <Info />
      <section className="relative">
        <div className="sticky top-0 w-full z-30">
          <Nav open={open} click={click} unclick={unclick} />
        </div>
        <Link href="/">
          <img
            className="headerImg sm:h-[47.1rem] h-[35rem] w-full object-cover fill-neutral-400"
            src={headerImg}
            alt="hero section image"
          />
        </Link>
      </section>
      <div>{children}</div>
      {isScroll && (
        <a
          href="https://wa.me/243994345462"
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed md:bottom-12 bottom-6 md:right-12 right-6 z-50 flex items-center gap-2"
        >
          <span className={`transition-opacity duration-700 ease-in-out bg-white text-green-600 text-sm font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap ${autoShow ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            Discutez avec nous
          </span>
          <div className={`w-12 h-12 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.9)] transition-transform duration-500 ease-in-out hover:scale-110 ${autoShow ? 'scale-110' : ''} ${shaking ? 'whatsapp-shake' : ''}`}>
            <img src="/assets/icons/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        </a>
      )}
    </header>
  )
}
