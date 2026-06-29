import Info from './header/info'
import Nav from './header/nav'
import Link from 'next/link'
import { useState, useEffect, ReactNode } from 'react'

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY >= 1000)
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

  return (
    <header className="text-blue font-inter relative lg:mb-40 md:mb-[12rem]">
      <Info />
      <section className="relative">
        <div className="sticky top-0 w-full">
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
          className="group fixed bottom-12 right-12 z-50 flex items-center gap-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white text-green-600 text-sm font-semibold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
            Discutez avec nous
          </span>
          <div className="w-12 h-12 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-200">
            <img src="/assets/icons/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
          </div>
        </a>
      )}
    </header>
  )
}
