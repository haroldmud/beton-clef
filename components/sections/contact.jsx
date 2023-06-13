import Button from "../ui/button"
import Link from "next/link"

export default function Contacts(){
  return(
    <section  className="max-w-7xl pt-20 md:w-6/12 mx-auto text-blue mb-20  px-4 md:px-auto">
        <h2 className="text-4xl font-thin mb-8">CONTACTEZ-NOUS</h2>
        <form action="submit">
          <div>
            <div className="text-sm flex w-full justify-between gap-2">
              <div className="w-full">
                <h4>First Name<span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h4>
                <input type="text" className="outline-none w-full border border-gray-500 pl-2 py-2" />
              </div>
              <div className="w-full">
                <h4>Last Name <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h4>
                <input type="text" className="outline-none w-full border border-gray-500 pl-2 py-2" />
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
                <textarea type="text" className="outline-none w-full h-32 border border-gray-500 pl-2 py-2" />
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
  )
}