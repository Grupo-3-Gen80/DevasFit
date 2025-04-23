import { useState } from "react";

export default function SacForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  function atualizarCampo(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enviarMensagem(e: React.FormEvent) {
    e.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  }

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#C58BAA] mb-6 text-center">
          Fale com a gente  para duvidas,melhorias e elogios 💬
        </h2>

        <form
          onSubmit={enviarMensagem}
          className="bg-white rounded-xl shadow-lg border border-[#f0d9e6] p-6"
        >
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={atualizarCampo}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={atualizarCampo}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Assunto</label>
            <input
              type="text"
              name="assunto"
              value={form.assunto}
              onChange={atualizarCampo}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-gray-700">Mensagem</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={atualizarCampo}
              rows={4}
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#C58BAA] text-white px-6 py-2 rounded hover:bg-[#a4457a] transition-colors w-full"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
