import Header from "../components/sections/header"
import Button from "../components/ui/button"
import Fonctions from "../components/sections/fonctions"
import Images from "../components/sections/images"
import Link from "next/link"
import Footer from "../components/sections/footer"
import About from "../components/sections/aboutUs"
import Nav from "../components/sections/header/nav"
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY >= 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleOpen() { setOpen(false) }
  function handleClose() { setOpen(true) }

  return (
    <section id="home" className="text relative bg-slate-300">
      {mounted && scrolled && (
        <div className="sticky top-0 w-full z-50">
          <Nav open={open} click={handleOpen} unclick={handleClose} />
        </div>
      )}
      <Header open={open} click={handleOpen} unclick={handleClose} headerImg="/assets/images/hero.webp">
        <div className={`absolute flex justify-center md:top-[13rem] ${open ? 'top-[11rem]' : 'top-[15rem]'} w-[100%] z-10`}>
          <div className="max-w-7xl md:w-9/12 w-11/12 md:pt-24">
            <h2 className="encapsulation md:mt-8 mt-28 md:text-[4rem] text-[2.8rem] flex md:flex-col  text-blue-100 opacity-80 font-semibold md:leading-[5rem] leading-[3rem]">
              NOUS ELABORONS ET REALISONS DES VASTES CHANTIERS
            </h2>
            <div className="mt-12">
              <Button>
                <a href="#realisation">NOS REALISATIONS</a>
              </Button>
            </div>
          </div>
        </div>
        <div id="function" className="md:absolute w-full lg:-bottom-[8.5rem] md:-bottom-[12rem] flex justify-center text-slate-100 ">
          <div className="flex md:flex-row flex-col max-w-7xl lg:w-7/12 md:w-11/12 background md:p-10 p-8 md:gap-8 shadow-lg">
            <div className="p-2 md:w-11/12">
              <div className="flex justify-center md:mb-9 mb-4">
                <img className="lg:w-12 md:w-12 w-8" src="/assets/icons/section1/image1.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-center">Conception et Plans</h3>
                <p className="text-xs text-center w-11/12 mx-auto">Nous vous offrons des services de conception et de planification créatifs.</p>
              </div>
            </div>
            <div className="p-2 md:w-11/12">
              <div className="flex justify-center md:mb-4">
                <img className="lg:w-16 md:w-12 w-12" src="/assets/icons/section1/image2.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-center">Priorisation de la qualité</h3>
                <p className="text-xs text-center w-11/12 mx-auto">Nos projets répondent aux normes les plus élevées en matière de sécurité.</p>
              </div>
            </div>
            <div className="p-2 md:w-11/12">
              <div className="flex justify-center md:mb-9 mb-4">
                <img className="ld:w-16 md:w-10 w-8" src="/assets/icons/section1/image3.png" alt="" />
              </div>
              <div>
                <h3 className="font-bold mb-2 text-center">Gestion de construction</h3>
                <p className="text-xs text-center w-11/12 mx-auto">La gestion de delais et la surveillance de la qualité est notre priorite.</p>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <section className="max-w-7xl pt-20 md:w-8/12 mx-auto text-blue px-4 md:px-auto">
        <h2 className="md:text-4xl text-2xl font-thin md:mb-8 mb-4">BETON-CLEF A UNE FIERE TRADITION DE SERVICE ENTANT QU'ENTREPRENEUR</h2>
        <p>Forts de plus de 15 ans d’expérience dans la construction locale et nationale, nous réalisons des projets d’envergure dans le respect des délais et du budget. Depuis plus de deux décennies, nous accompagnons nos clients en plaçant leurs besoins au cœur de chaque projet et en nous engageant à dépasser leurs attentes.</p>
      </section>
      <section className="text-blue flex justify-center md:pt-16 pt-8 md:mb-12">
        <Fonctions />
      </section>
      {/* Clients */}
      <section className="relative flex justify-center md:py-32 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative z-10 max-w-7xl w-11/12 mx-auto">
          <h2 className="text-gray-500 font-thin text-2xl md:text-4xl text-center mb-10">ILS NOUS ONT FAIT CONFIANCE</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {[
              { name: 'UNICEF', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_UNICEF.svg/3840px-Flag_of_UNICEF.svg.png' },
              { name: 'WFP',    src: 'https://www.artemis.bm/wp-content/uploads/2018/09/world-food-programme-logo.png' },
              { name: 'OMS',    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo_de_l%27Organisation_mondiale_de_la_sant%C3%A9.svg/3840px-Logo_de_l%27Organisation_mondiale_de_la_sant%C3%A9.svg.png' },
              { name: 'FAO',    src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg' },
              { name: 'CICR',   src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Emblem_of_the_ICRC_fr.svg/1280px-Emblem_of_the_ICRC_fr.svg.png' },
            ].map(({ name, src }) => (
              <div key={name} className="flex flex-col items-center gap-2 group">
                <img
                  src={src}
                  alt={name}
                  className="h-16 md:h-20 w-auto object-contain grayscale opacity-70 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-400">
        <section id="realisation" className="max-w-7xl pt-20 md:w-8/12 mx-auto text-slate-200 px-4 md:px-auto ">
          <h2 className="md:text-4xl text-2xl font-thin md:mb-8 mb-4">NOUS PRENONS COMPTE DANS LES PROJETS QUE NOUS AVONS RÉALISÉS</h2>
          <p>Bien que la satisfaction de nos clients soit notre principale mesure d'excellence, nous avons également été récompensés par de nombreux prix au fil des ans pour la sécurité, les pratiques commerciales et l'excellence de la conception. Nous comprenons que les projets ne représentent pas seulement des bâtiments, mais les plans d'avenir de nos clients.</p>
        </section>
        <Images />
      </section>
      <About />
      <section className="max-w-7xl pt-20 md:w-8/12 mx-auto text-blue px-4 md:px-auto">
        <h2 className="md:text-4xl text-2xl font-thin md:mb-8 mb-4">CONTACTEZ-NOUS</h2>
        <p>N'hésitez pas à nous appeler pour discuter de votre futur projet ! Pour toute demande d'emploi, de sous-traitance pour nous ou d'informations sur notre projet en cours, veuillez utiliser le formulaire ci-dessous afin que nous puissions vous mettre en contact avec la meilleure personne pour vous aider.</p>
        <div className="mx-auto w-[12rem] text-center mt-6">
          <Button style="mx-auto">
            <Link href="/contact">PRENDRE CONTACT</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </section>
  )
}
