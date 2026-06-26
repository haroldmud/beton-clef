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
        <div className={`fixed w-full bottom-2 ${isVisible ? 'animate-bounce' : ''} z-50 flex justify-end pr-4`}>
          <a href="#home">
            <img className="w-12 rounded-3xl" src="/assets/icons/up.png" alt="" />
          </a>
        </div>
      )}
    </header>
  )
}
