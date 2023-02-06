import Header from "../components/sections/header"
import Button from "../components/ui/button"
import Fonctions from "../components/sections/fonctions"

export default function Home() {
  return (
    <section className="text">
      <Header headerImg="/assets/images/hero.webp">
        <div className="absolute flex justify-center md:top-[13rem] top-32 w-[100%]" >
          <div className="max-w-7xl md:w-9/12 w-11/12">
            <h2 className="encapsulation mt-8 md:text-[4rem] text-[2.4rem] flex md:flex-col  md:md:w-[30rem]  text-[#ffffff] shadow-lg font-bold md:leading-[4rem] leading-[3rem ]">
              NOUS ELABORONS ET REALISONS DES VASTES CHANTIERS
            </h2>
            <p className="md:w-96 text-base w-11/12 text-[#e9ebc7] font-bold shadow-lg mt-5 md:leading-5">
            Notre but est de fournir à la population congolaise des services d'ingénierie civile de qualité,
             allant de la planification des constructions à la réalisation effective de ces projets.
            </p>
            <div className="w-[12rem] text-center mt-6 hover:shadow-xl">
              <Button>NOS REALISATIONS</Button>
            </div>
          </div>
        </div>
     <div className="absolute w-full lg:-bottom-[9rem] md:-bottom-[12rem] flex justify-center">
        <div className="flex md:flex-row flex-col max-w-7xl w-7/12 bg-white p-8 gap-8">
          <div className=" p-4 md:w-[30rem]">
            <div className="flex justify-center mb-9">
              <img className="lg:w-12 md:w-12 w-16" src="/assets/icons/section1/image1.png" alt="" />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-center">Conception et Plans</h3>
              <p className="text-xs text-center">Dans notre entreprise, nous vous offrons des services de conception et de planification créatifs.</p>
            </div>
          </div>
          <div className="p-4 md:w-[30rem]">
            <div className="flex justify-center mb-4">
              <img className="lg:w-16 md:w-12 w-16" src="/assets/icons/section1/image2.png" alt="" />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-center">Priorisation de la qualité</h3>
              <p className="text-xs text-center">Nos projets répondent aux normes les plus élevées en matière de sécurité, de fonctionnalité, de durabilité et d'esthétique.</p>
            </div>
          </div>
          <div className="p-4 md:w-[30rem]">
            <div className="flex justify-center mb-9">
              <img className="ld:w-16 md:w-10 w-14" src="/assets/icons/section1/image3.png" alt="" />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-center">Gestion de construction</h3>
              <p className="text-xs text-center">Ceci inclut la planification des ressources, la budgétisation, la gestion de delais et la surveillance de la qualité. </p>
            </div>
          </div>
        </div>
     </div>
      </Header>
      <section className="text-blue flex justify-center mt-12 mb-12">
        <Fonctions/>  
      </section>
      <section>
        <div className="mx-auto w-[12rem]  text-center mt-6 hover:shadow-xl">
          <Button>DECOUVREZ-EN PLUS</Button>
        </div>
      </section>
    </section>
  )
}
