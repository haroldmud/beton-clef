import data from "./data"
import Button from "../../ui/button"

export default function Fonctions(){

  return(
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl sm:w-9/12 w-11/12 justify-center">
          {
            data.map((item, index)=> 
            <div className="flex gap-4">
                <div className="flex flex-col justify-center">
                <img className="w-16" src={`/assets/icons/section3/${item.image}`} alt="function image" />
              </div>
              <div className="w-[18rem]">
                <h2 className="font-bold mb-1">{item.title}</h2>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
            )
          }
        </div>
  )
}