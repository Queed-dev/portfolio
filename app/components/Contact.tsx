export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 flex flex-col items-center gap-8 bg-[#162222]">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Contactez-moi</h2>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="text" placeholder="Votre nom" className="px-4 py-2 rounded bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />
        <input type="email" placeholder="Votre email" className="px-4 py-2 rounded bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />
        <textarea placeholder="Votre message" rows={5} className="px-4 py-2 rounded bg-[#1a2a2a] text-white placeholder-gray-400 focus:outline-none" />
        <button type="submit" className="px-6 py-2 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition mt-2">Envoyer</button>
      </form>
    </section>
  );
} 