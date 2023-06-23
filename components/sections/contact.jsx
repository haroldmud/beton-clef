import Button from "../ui/button"
import Link from "next/link"

export default function Contacts(){
  return(
    <section className="absolute md:top-[70%] top-[60%] w-full">
      <section  className="max-w-7xl pt-12 pb-4 md:w-6/12 w-10/12 shadow-2xl mx-auto text-blue mb-20  px-4 md:px-auto bg-[#6b7280] rounded-lg">
          <h2 className="text-4xl font-thin mb-8">CONTACTEZ-NOUS</h2>
          <form action="submit">
            <div>
              <div className="text-sm flex w-full justify-between gap-2">
                <div className="w-full">
                  <h4>First Name<span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h4>
                  <input type="text" className="rounded-tl-lg outline-none w-full border border-gray-500 pl-2 py-2" />
                </div>
                <div className="w-full">
                  <h4>Last Name <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h4>
                  <input type="text" className="rounded-tr-lg outline-none w-full border border-gray-500 pl-2 py-2" />
                </div>
              </div>
              <div className="text-sm flex w-full justify-between gap-2 mt-4">
                <div className="w-full">
                  <h3 className="flex text-sm">Email <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h3>
                  <input type="e-mail" className="outline-none w-full border border-gray-500 pl-2 py-2" />
                </div>
              </div>
              <div className="text-sm flex w-full justify-between gap-2 mt-4">
                <div className="w-full">
                  <h3 className="flex text-sm">Subject <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h3>
                  <input type="text" className="outline-none w-full border border-gray-500 pl-2 py-2" />
                </div>
              </div>
              <div className="text-sm flex w-full justify-between gap-2 mt-4">
                <div className="w-full">
                  <h3 className="flex text-sm">Message <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h3>
                  <textarea type="text" className="rounded-b-lg outline-none w-full h-32 border border-gray-500 pl-2 py-2" />
                </div>
              </div>
            </div>
            <div className="mx-auto w-[12rem]  text-center mt-6 hover:shadow-xl">
            <Button>
              <Link href="/aboutUs">SUBMIT</Link>
            </Button>
          </div>
          </form>
      </section>
    </section>
  )
}