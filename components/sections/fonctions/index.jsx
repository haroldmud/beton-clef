import data from "./data"
import Button from "../../ui/button"

export default function Fonctions(){

  return(
        <div className="grid md:grid-cols-3 gap-10 md:max-w-7xl sm:w-9/12 w-11/12 justify-center">
          {
            data.map((item, index)=> 
            <div key={index} className="flex md:flex-col gap-4 md:text-center">
              <div className="flex flex-col justify-center md:w-fit h-fit my-auto w-[30%] md:mx-auto">
                <img className="w-16" src={`/assets/icons/section3/${item.image}`} alt="function image" />
              </div>
              <div className="">
                <h2 className="font-bold mb-1">{item.title}</h2>
                <p className="md:text-base text-xs">{item.description}</p>
              </div>
            </div>
            )
          }
        </div>
  )
}