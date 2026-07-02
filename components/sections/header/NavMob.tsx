import Link from 'next/link'

interface NavMobProps {
  open: boolean
  click: () => void
  unclick: () => void
}

export default function NavMob({ open, click, unclick }: NavMobProps) {
  return (
    <section className="lg:hidden flex justify-between items-center w-full">
      <div
        className="flex gap-2 cursor-pointer"
        onClick={open ? click : unclick}
      >
        {open ? (
          <>
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <line x1="3" y1="6"  x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">MENU</h3>
          </>
        ) : (
          <>
            <svg className="h-5 w-5 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
            <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">FERME</h3>
          </>
        )}
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
