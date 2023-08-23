import Header from "../components/sections/header"
import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"

export default function Contacts() {
    return(
      <section className="relative flex flex-col justify-between">
        <Header headerImg="/assets/images/contact.jpg">
          <Contact />
        </Header>
        <Footer style={'md:mt-[35%] lg:mt-[15%] mt-[100%]'}/>
      </section>
      )
  }
