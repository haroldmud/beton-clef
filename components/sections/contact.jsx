import emailjs from 'emailjs-com';

export default function Contacts(){

  function sendEmail(e){
    e.preventDefault();

    emailjs.init('cGj4QXuM2cp2LECEi')

    emailjs.sendForm('service_g9r82jz', 'template_kgqbyz6', e.target)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  }

  return(
    <section className="absolute md:top-[70%] top-[60%] w-full">
      <section  className="max-w-7xl pt-12 pb-4 md:w-6/12 w-10/12 shadow-2xl mx-auto text-white mb-20  px-4 md:px-auto bg-blue rounded-lg">
          <h2 className="text-4xl font-thin mb-8">CONTACTEZ-NOUS</h2>
          <form className="text-blue" action="submit" onSubmit={sendEmail}>
            <div>
              <div className="text-sm flex w-full justify-between gap-2">
                <div className="w-full">
                  <h4 className="text-white">Nom<span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h4>
                  <input type="text" name="first-name" className="rounded-tl-lg outline-none w-full border border-gray-500 pl-2 py-2" required />
                </div>
                <div className="w-full">
                  <h4 className="text-white">Post-nom<span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h4>
                  <input type="text" name="last-name" className="rounded-tr-lg outline-none w-full border border-gray-500 pl-2 py-2" required />
                </div>
              </div>
              <div className="text-sm flex w-full justify-between gap-2 mt-4">
                <div className="w-full">
                  <h3 className="flex text-white text-sm">Email <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h3>
                  <input type="e-mail" name="email" className="outline-none w-full border border-gray-500 pl-2 py-2" required />
                </div>
              </div>
              <div className="text-sm flex w-full justify-between gap-2 mt-4">
                <div className="w-full">
                  <h3 className="flex text-white text-sm">Sujet <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h3>
                  <input type="text" name="subject" className="outline-none w-full border border-gray-500 pl-2 py-2" required />
                </div>
              </div>
              <div className="text-sm flex w-full justify-between gap-2 mt-4">
                <div className="w-full">
                  <h3 className="flex text-white text-sm">Message <span className="font-bold ml-1 my-auto text-red-500">{`*`}</span></h3>
                  <textarea type="text" name="message" className="rounded-b-lg outline-none w-full h-32 border border-gray-500 pl-2 py-2" required />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
            <button className="w-[12rem] text-center mt-6 hover:shadow-xl p-2 rounded-xl font-bold text-xl  bg-yellow text-blue">SOUMETTRE</button>
            </div>
          </form>
      </section>
    </section>
  )
}