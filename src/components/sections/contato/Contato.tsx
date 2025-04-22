function Contato() {
    return (
      <section id="contato" className="py-32 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-[#501466] mb-4 font-serif">Entre em Contato</h2>
        <p className="text-gray-700 mb-6">Quer conhecer mais ou agendar uma demonstração?</p>
  
        <form className="max-w-xl mx-auto grid gap-4 text-left">
          <input className="w-full p-3 rounded-lg border border-gray-400" type="text" placeholder="Nome" />
          <input className="w-full p-3 rounded-lg border border-gray-400" type="email" placeholder="E-mail" />
          <textarea className="w-full p-3 rounded-lg border border-gray-400" rows={4} placeholder="Mensagem" />
          <button className="bg-[#cc7d91] text-white px-6 py-3 rounded-full hover:bg-[#a6316c] transition text-[18px]">
          <div>
            <strong>Enviar</strong>
          </div>
          </button>
        </form>
      </section>
    );
  }
  
  export default Contato;