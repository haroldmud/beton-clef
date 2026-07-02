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
            <img className="h-6" src="/assets/icons/menu.png" alt="" />
            <h3 className="text-white text-[0.9rem] h-fit mt-[0.1rem] font-bold">MENU</h3>
          </>
        ) : (
          <>
            <img className="h-4 mt-1" src="/assets/icons/close.png" alt="" />
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
