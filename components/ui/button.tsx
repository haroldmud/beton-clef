import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  style?: string
  onClick?: () => void
}

export default function Button({ children, style, onClick }: ButtonProps) {
  return (
    <button
      className={`lg:flex flex-col justify-center hover:shadow-xl bg-yellow sm:rounded-lg rounded-xl text-blue lg:text-xl text-base font-bold sm:p-1 sm:px-6 p-2 shadow-sm ${style ?? ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
