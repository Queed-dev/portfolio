import {Mail01Icon, HugeiconsIcon, TelephoneIcon} from "hugeicons-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 flex flex-col items-center gap-8">
      <div className="w-full p-3 flex items-center flex-col md:flex-row">
        <div className="flex p-3 px-4 pr-6 w-full flex-col">
          <h2 className="text-md md:text-lg text-orange-400 mb-4 relative">
            <div className="w-[1px] h-[1px] bg-orange-400 absolute rounded-full top-[50%] left-[-0.7em]" style={{boxShadow: '0 0 4px 3px orange'}}/>
            Contactez-moi
          </h2>
          <h3 className="text-3xl py-2 font-bold text-white">
            Voulez-vous entrer en contact avec moi pour discuter ?
          </h3>
          <p className="text-white/40 py-5">
            Je suis disponible via les coordonnées suivantes, 
            je vous prie de les sauvegarder pour tout contact.
          </p>
          <div className="w-full p-2 items-center gap-8 flex text-white">
            <div className="w-[50px] h-[50px] bg-slate-600/60 rounded-full flex items-center justify-center">
              <Mail01Icon/>
            </div>
            <div className="flex flex-col p-2 gap-2">
              <span className="font-semibold text-lg">Email</span>
              <span className="text-md text-slate-400">wilkysynd@gmail.com</span>
            </div>
          </div>
          <div className="w-full p-2 items-center gap-8 flex text-white">
            <div className="w-[50px] h-[50px] bg-slate-600/60 rounded-full flex items-center justify-center">
              <TelephoneIcon/>
            </div>
            <div className="flex flex-col p-2 gap-2">
              <span className="font-semibold text-lg">Téléphone</span>
              <span className="text-md text-slate-400">(+509) 46 25 2596 / 42 89 7628</span>
            </div>
          </div>
        </div>
        {/*<div className="flex p2 w-full items-center justify-center">*/}
        {/*  <form className="flex flex-col p-8 rounded-4xl gap-4 w-full max-w-md bg-white/5">*/}
        {/*    <Text className="font-light text-white/60">*/}
        {/*      Ou veuillez remplir ces champs et m'envoyer un message à mon espace personnel de Queed.*/}
        {/*    </Text>*/}
        {/*    <div className="w-full flex gap-2 flex-row">*/}
        {/*      <input type="text" placeholder="Nom" className="px-4 py-2 w-full rounded-lg bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />*/}
        {/*      <input type="text" placeholder="Prénom" className="px-4 py-2 w-full rounded-lg bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />*/}
        {/*    </div>*/}
        {/*    <div className="w-full flex gap-2 flex-row">*/}
        {/*      <input type="email" placeholder="Email" className="px-4 py-2 w-full rounded-lg bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />*/}
        {/*      <input type="phone" placeholder="Numéro téléphone" className="px-4 w-full py-2 rounded-lg bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />*/}
        {/*    </div>*/}
        {/*    <textarea placeholder="Votre message" rows={5} className="px-4 resize-none py-2 rounded-lg bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />*/}
        {/*    <div>*/}
        {/*      <Button color="orange" radius="full" className="p-4 px-8 hidden md:flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-[#033] text-white font-semibold hover:bg-green-300 transition">*/}
        {/*        Envoyer le message*/}
        {/*      </Button>*/}
        {/*    </div>*/}
        {/*  </form>*/}
        {/*</div>*/}
      </div>
    </section>
  );
} 