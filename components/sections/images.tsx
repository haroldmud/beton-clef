const images = [
  'https://images.squarespace-cdn.com/content/v1/59011f5d5016e1a53768b5dc/1656349510739-8QTDUP4IMPW123RZF9PH/ALEX_NYE_200812_Harper_Miramar_1652-crop2.jpg?format=1500w',
  'https://images.squarespace-cdn.com/content/v1/59011f5d5016e1a53768b5dc/1656350804885-UZ8B1WZKPVAR46BX1PIO/ALEX_NYE_LATTC_210402-0565-A.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/59011f5d5016e1a53768b5dc/1505928848230-FKWAC5AS35LVUWNXN9SM/Portola+10.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/59011f5d5016e1a53768b5dc/1506378109408-WUQHS6CF034SEVELFJ0C/_MG_6732_HDR.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/59011f5d5016e1a53768b5dc/1508528858113-1P1RVMPLSAMA192TVTU4/A.NYE_San-Joaquin_075-Edit.jpg?format=1000w',
]

export default function Images() {
  return (
    <section className="max-w-7xl mx-auto md:py-12">
      <div className="grid grid-cols-12 grid-rows-12 gap-2 p-8">
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[0]} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[1]} alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[2]} alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[1]} alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-4 row-span-4 relative">
          <div className="absolute inset-0 opacity-75" />
          <img src={images[3]} alt="Image 4" className="w-full h-full object-cover z-10" />
        </div>
        <div className="col-span-4 row-span-4 relative">
          <div className="absolute inset-0 opacity-75" />
          <img src={images[2]} alt="Image 3" className="w-full h-full object-cover z-10" />
        </div>
        <div className="col-span-4 row-span-4 relative">
          <div className="absolute inset-0 opacity-75" />
          <img src={images[1]} alt="Image 2" className="w-full h-full object-cover z-10" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[2]} alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[1]} alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[0]} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-3 md:row-span-3 col-span-6">
          <img src={images[4]} alt="Image 5" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
