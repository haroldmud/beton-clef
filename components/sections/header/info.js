export default function Info() {
  return(
    <section className="text-blue flex text-xs justify-center">
      <div className="flex justify-between sm:w-9/12 w-11/12">
        <div className="w-14 flex flex-col gap-[0.5px]">
          <img className="" src="/assets/icons/logo.jpg"/>
          <p className="text-yellow bg-blue text-8s text-center font-bold border-b border-yellow">ETS BCT</p>
        </div>
        <div className="sm:hidden flex flex-col justify-center">
          <h2 className="text-blue text-base font-bold bg-yellow h-fit p-2 rounded-xl shadow-sm">COMMANDEZ UN DEVIS</h2>
        </div>
        <div className="sm:flex hidden  flex-col justify-center">
        <div className="flex gap-4 w-fit h-fit">
          <div className="flex gap-2 w-fit">
            <div className="flex flex-col justify-center">
              <img className="w-6 h-6" src="/assets/icons/phone.png"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">TEL </h3>
              <p className="font-light text-8s">+243 994 345 462</p>
            </div>
          </div>
          <div className="border-l "></div>
          <div className="flex gap-2 w-fit">
            <div className="flex flex-col justify-center">
              <img className="w-6 h-6" src="/assets/icons/mail.png"/>
            </div>
            <a href="mailto:pacifiquemudosa@yahoo.fr" className="flex flex-col">
              <h3 className="font-bold">EMAIL</h3>
              <p className="font-light text-8s">info@bct.cd</p>
            </a>
          </div>
          <div className="border-l "></div>
          <div className="flex gap-2 w-fit">
            <div className="flex flex-col justify-center">
              <img className="w-6 h-6" src="/assets/icons/clock.png"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">DISPONIBILITE</h3>
              <p className="font-light text-8s">Lun.- Sam. 07h-20h</p>
            </div>
          </div>
          <div className="border-l "></div>
          <div className="flex gap-2 w-fit">
            <div className="flex flex-col justify-center">
              <img className="w-6 h-6" src="/assets/icons/map.png"/>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">ADDRESS</h3>
              <p className="font-light text-8s">Q.Himbi-Av.Alindi-No.12 </p>
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
  )
}