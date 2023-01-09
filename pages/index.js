import Header from "../components/sections/header"

export default function Home() {
  return (
    <>
      <Header headerImg="/assets/images/hero.webp">
        <div className="absolute md:top-32 md:left-32 top-20 left-4 ">
          <h2 className=" md:text-[2.3rem] text-[2.5rem] md:w-96 w-11.12 text-[#ffffff] bg-[#a59d9d25] shadow-lg font-bold md:leading-10 leading-11">
            NOUS CONCEVONS ET CONSTRUISONS DES GRANDS PROJETS 
          </h2>
          <p className="md:w-96 text-sm w-11/12 text-[#dee0e0] font-semibold bg-[#a59d9d25] shadow-lg mt-5 leading-5">
          Notre mission est de mettre à la disposition de la population Congolaise les services de
           qualité en matière de génie civil en allant de la conception des projets de construction jusqu’à la mise en œuvre desdits projets.
          </p>
        </div>
      </Header>
    </>
  )
}
