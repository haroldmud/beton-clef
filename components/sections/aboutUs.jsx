import Button from "../ui/button"
import { useState } from "react"
import { SiAzurefunctions } from 'react-icons/si'
import { GiFlyingFox, GiStrongMan } from 'react-icons/gi'

export default function About(){
  const [roll, setRoll] = useState(false);
  function handleRoll(){
    setRoll(prev => !prev)
  }

  return(
    <section  className="max-w-7xl pt-20 md:w-6/12 mx-auto text-blue px-4 md:px-auto">
        <h2 className="text-4xl font-thin mb-8">QUI SOMMES-NOUS</h2>
        <div className="flex flex-col gap-4">
          <p>
          Un pôle dynamique d'expertise et de solutions technologiques sur mesure, BETON-CLEF TECHNIQUE (BCT) se présente comme une équipe dévouée d'ingénieurs, de techniciens et de gestionnaires sénégalais hautement expérimentés au sein de leurs domaines respectifs.
          </p>
          <p>
          Notre engagement envers la précision et le pragmatisme nous a valu une confiance inébranlable des plus hautes instances, tant dans le secteur public que privé.
          </p>
          <p>
          Notre mission principale consiste à agir en tant que ressource essentielle pour les dirigeants d'entreprises publiques et privées qui sont parties prenantes dans les domaines du génie civil, de la construction, des routes, des structures architecturales, de l'infrastructure rurale et au-delà. Nous opérons sur plusieurs fronts, contribuant non seulement à la délibération stratégique, mais aussi à la concrétisation de leurs visions et programmes.</p>
        </div>
        {
          !roll &&
        <div className="mx-auto w-[12rem] text-center mt-6">
          <Button onClick={handleRoll}>DECOUVREZ-EN PLUS </Button>
        </div> 
        }
        {
          roll && 
          <div className="flex flex-col gap-4 mt-4 ml-10">
            <div>
              <h2 className="text-4xl font-thin mb-4 flex gap-2"><span className="text-3xl color"><GiFlyingFox /></span>Notre mission</h2>
              <p>
                Accompagner vers de nouveaux succès les décideurs dans la réalisation des missions qui leur ont été confiées;
                Relever avec eux les nouveaux défis techniques voire technologiques en donnant corps à leurs projets.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-thin mb-4 flex gap-2"><span className="text-2xl color"><SiAzurefunctions /></span>Fonctionnement </h2>
              <p>
                Tout secteur de l’activité de GTI est une spécialité. Le secteur désigné est donc traité exclusivement par un spécialiste.
                Ainsi les activités sont axées sur :
                <ul className="ml-8">
                  <li>- Études et réalisation de projets de bâtiments sociaux et industriels</li>
                  <li>- Études et réalisations d’infrastructures rurales et urbaines</li>
                </ul>
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-thin mb-4 flex gap-2"><span className="text-2xl color"><GiStrongMan /></span>Compétences en Génie Civil</h2>
              <p>
              Ets. B.C.T est présente dans la réalisation d’ouvrage de génie civil. Nos clients sont à la fois publics et privés. Qu’il s’agisse d’une réhabilitation lourde en génie civil ou d’une construction neuve, Ets. B.C.T met à contribution tout son savoir-faire à travers une équipe expérimentée au respect des standards de qualité les plus élevés.
              </p>
            </div>
          </div>
        }
      </section>
  )
}