import { useState } from 'react'
import data from './data'

export default function Fonctions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:max-w-7xl sm:w-9/12 w-11/12 justify-center">
      {data.map((item, index) => {
        const isActive = activeIndex === index
        return (
          <div
            key={index}
            className="group relative h-64 overflow-hidden rounded-xl- shadow-lg cursor-pointer"
            onClick={() => setActiveIndex(isActive ? null : index)}
          >
            {/* background image */}
            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${isActive ? 'scale-105' : ''}`}
            />

            {/* persistent dark overlay */}
            <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:bg-black/60 ${isActive ? 'bg-black/60' : 'bg-black/40'}`} />

            {/* icon + title — slides up on hover (desktop) or tap (mobile) */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-500 ease-in-out lg:group-hover:-translate-y-8 lg:group-hover:scale-90 ${isActive ? '-translate-y-8 scale-90' : ''}`}>
              <img
                className="w-12 h-12 object-contain drop-shadow-lg"
                src={`/assets/icons/section3/image${index + 1}.png`}
                alt=""
              />
              <h2 className="xl:group-hover:block lg:group-hover:hidden text-white font-bold text-center text-base px-4 drop-shadow">
                {item.title}
              </h2>
            </div>

            {/* description — fades in on hover (desktop) or tap (mobile) */}
            <div className={`absolute inset-0 flex items-end justify-center pb-6 px-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-white text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        )
      })}
    </div>
  )
}
