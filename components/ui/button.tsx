import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  style?: string
  onClick?: () => void
  href?: string
}

export default function Button({ children, style, onClick, href }: ButtonProps) {
  return (
    <button
      className={`sm:flex flex-col justify-center hover:shadow-xl bg-yellow sm:rounded-lg rounded-xl ${style ?? ''}`}
      onClick={onClick}
    >
      <a href={href} className="text-blue sm:text-base text-base font-bold sm:p-1 p-2 shadow-sm">
        {children}
      </a>
    </button>
  )
}
