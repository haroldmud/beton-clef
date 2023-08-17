import Header from "../components/sections/header"
import Button from "../components/ui/button"
import Fonctions from "../components/sections/fonctions"
import Images from "../components/sections/images"
import Link from "next/link"
import Footer from "../components/sections/footer"
import About from "../components/sections/aboutUs"
import Nav from "../components/sections/header/nav"
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section id="home" className="text relative">
      {
        scrolled&&
      <div className="sticky top-0 w-full z-50">
        <Nav/>
      </div>
      }
      <Header headerImg="/assets/images/hero.webp">
        <div className="absolute flex justify-center md:top-[13rem] top-[11rem] w-[100%]" >
          <div className="max-w-7xl md:w-9/12 w-11/12">
            <h2 className="encapsulation mt-8 md:text-[4rem] text-[2.4rem] flex md:flex-col  md:md:w-[30rem]  text-[#ffffff] shadow-lg font-bold md:leading-[4rem] leading-[3rem ]">
              NOUS ELABORONS ET REALISONS DES VASTES CHANTIERS
            </h2>
            <div className="w-[12rem] text-center mt-6 ">
              <Button>
                <a href="#footer">NOS REALISATIONS</a>
              </Button>
            </div>
          </div>
        </div>
     <div id="function" className="md:absolute w-full lg:-bottom-[8.5rem] md:-bottom-[12rem] flex justify-center">
        <div className="flex md:flex-row flex-col max-w-7xl lg:w-7/12 md:w-9/12 background shadow md:p-10 p-8 md:gap-8">
          <div className=" p-2 md:w-[30rem]">
            <div className="flex justify-center md:mb-9 mb-4">
              <img className="lg:w-12 md:w-12 w-8" src="/assets/icons/section1/image1.png" alt="" />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-center">Conception et Plans</h3>
              <p className="text-xs text-center w-8/12 mx-auto">Dans notre entreprise, nous vous offrons des services de conception et de planification créatifs.</p>
            </div>
          </div>
          <div className="p-2 md:w-[30rem]">
            <div className="flex justify-center md:mb-4 ">
              <img className="lg:w-16 md:w-12 w-12" src="/assets/icons/section1/image2.png" alt="" />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-center">Priorisation de la qualité</h3>
              <p className="text-xs text-center w-8/12 mx-auto">Nos projets répondent aux normes les plus élevées en matière de sécurité, de fonctionnalité, de durabilité et d'esthétique.</p>
            </div>
          </div>
          <div className="p-2 md:w-[30rem]">
            <div className="flex justify-center md:mb-9 mb-4">
              <img className="ld:w-16 md:w-10 w-8" src="/assets/icons/section1/image3.png" alt="" />
            </div>
            <div>
              <h3 className=" font-bold mb-2 text-center">Gestion de construction</h3>
              <p className="text-xs text-center w-8/12 mx-auto">Ceci inclut la planification des ressources, la budgétisation, la gestion de delais et la surveillance de la qualité. </p>
            </div>
          </div>
        </div>
     </div>
      </Header>
      <section   className="max-w-7xl pt-20 md:w-6/12 mx-auto text-blue px-4 md:px-auto">
        <h2 className="md:text-4xl text-2xl font-thin md:mb-8 mb-4">BETON-CLEF A UNE FIERE TRADITION DE SERVICE ENTANT QU'ENTREPRENEUR</h2>
        <p>Nous apportons plus de 15 ans d'expérience en construction locale et nationale; avec la réputation de réaliser des projets de conception-construction de grande envergure et uniques en avance sur le calendrier et dans les limites du budget. Notre entreprise est au service des clients et des propriétaires d'immeubles depuis plus de quatre décennies. Au cours de cette période, nous avons constaté que la clé du succès de chaque projet est de comprendre les besoins et les attentes du propriétaire, puis de dépasser ces attentes en faisant ce qui suit:</p>
      </section>
      <section className="text-blue flex justify-center md:pt-16 pt-8 md:mb-12">
        <Fonctions/>  
      </section>
      <section id="realisation"  className="max-w-7xl pt-20 md:w-6/12 mx-auto text-blue px-4 md:px-auto">
        <h2 className="md:text-4xl text-2xl font-thin md:mb-8 mb-4">NOUS PRENONS COMPTE DANS LES PROJETS QUE NOUS AVONS RÉALISÉS</h2>
        <p>Bien que la satisfaction de nos clients soit notre principale mesure d'excellence, nous avons également été récompensés par de nombreux prix au fil des ans pour la sécurité, les pratiques commerciales et l'excellence de la conception. Nous comprenons que les projets ne représentent pas seulement des bâtiments, mais les plans d'avenir de nos clients.</p>
      </section>
      <Images />
      
      <About/>
      <section  className="max-w-7xl pt-20 md:w-6/12 mx-auto text-blue px-4 md:px-auto">
        <h2 className="md:text-4xl text-2xl font-thin md:mb-8 mb-4">CONTACTEZ-NOUS</h2>
        <p>N'hésitez pas à nous appeler pour discuter de votre futur projet ! Pour toute demande d'emploi, de sous-traitance pour nous ou d'informations sur notre projet en cours, veuillez utiliser le formulaire ci-dessous afin que nous puissions vous mettre en contact avec la meilleure personne pour vous aider.</p>
        <div className="mx-auto w-[12rem] text-center mt-6 ">
          <Button>
            <Link href="/contact">CONTACTEZ-NOUS</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </section>
  )
}
