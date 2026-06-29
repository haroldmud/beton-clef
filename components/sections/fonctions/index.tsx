import data from './data'

export default function Fonctions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:max-w-7xl sm:w-9/12 w-11/12 justify-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="group relative h-64 overflow-hidden rounded-xl- shadow-lg cursor-pointer"
        >
          {/* background image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* persistent dark overlay */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 ease-in-out group-hover:bg-black/60" />

          {/* icon + title — static on mobile, slides up on hover at md+ */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:transition-all md:duration-500 md:ease-in-out md:group-hover:-translate-y-8 md:group-hover:scale-90">
            <img
              className="w-12 h-12 object-contain drop-shadow-lg"
              src={`/assets/icons/section3/image${index + 1}.png`}
              alt=""
            />
            <h2 className="text-white font-bold text-center text-base px-4 drop-shadow">
              {item.title}
            </h2>
          </div>

          {/* description — hidden on mobile, fades in on hover at md+ */}
          <div className="absolute inset-0 hidden md:flex items-end justify-center pb-6 px-4 opacity-0 translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            <p className="text-white text-sm text-center leading-relaxed">
              {item.description}
            </p>
          </div>

        </div>
      ))}
    </div>
  )
}
