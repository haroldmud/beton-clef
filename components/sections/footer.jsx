export default function Footer(){
  return(
    <footer className="bg-gray-500 w-full mt-32 py-12">
      <section  className="max-w-7xl md:w-6/12 mx-auto text-blue">
        <div className="flex flex-col md:flex-row gap-4 mx-auto w-fit">
          <button>CONTACT</button>
          <button>SOUS-TRAITANT</button>
          <button>CONDITION DE SERVICE</button>
          <button>CONFIDENTIALITE</button>
        </div>
        <p className="text-gray-400 font-[300] text-center mt-4">©2017 Harper Construction Company, Inc. All Rights Reserved</p>
      </section>
      </footer>
  )
}