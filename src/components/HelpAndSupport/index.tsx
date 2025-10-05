import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, BookOpen } from "lucide-react";

const faqs = [
  {
    pergunta: "Como enviar minha redação?",
    resposta: "Vá até a aba 'Redações', clique em 'Enviar Redação' e siga as instruções para anexar seu arquivo."
  },
  {
    pergunta: "Posso editar minha redação depois de enviar?",
    resposta: "Não. Após o envio, a redação é encaminhada para correção e não pode mais ser editada."
  },
  {
    pergunta: "Como remarcar um agendamento?",
    resposta: "Acesse a aba 'Agendamentos', clique no ícone de edição ao lado do agendamento e selecione a nova data e horário."
  }
];

export default function HelpAndSupport() {
  const [faqAberto, setFaqAberto] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipo: "",
    mensagem: ""
  });

  const toggleFaq = (index) => {
    setFaqAberto(faqAberto === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Sua mensagem foi enviada com sucesso!");
    setFormData({ nome: "", email: "", tipo: "", mensagem: "" });
  };

  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Ajuda e Suporte</h1>
        <p className="text-gray-600 mt-2">
          Precisa de ajuda? Veja as perguntas frequentes, entre em contato ou acesse nossos tutoriais.
        </p>
      </div>

      {/* FAQ */}
      <section>
        <h2 className="text-lg font-medium mb-4">📌 Perguntas Frequentes</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-white shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-3 text-left"
              >
                <span className="font-medium text-gray-800">{faq.pergunta}</span>
                {faqAberto === index ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>
              {faqAberto === index && (
                <div className="px-3 pb-3 text-gray-600 text-sm border-t">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Formulário de Contato */}
      <section>
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <Mail size={18} /> Entre em Contato
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 bg-white p-4 rounded-lg shadow-sm"
        >
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="border rounded p-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            className="border rounded p-2"
            required
          />
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="border rounded p-2"
            required
          >
            <option value="">Selecione o tipo de problema</option>
            <option value="duvida">Dúvida</option>
            <option value="tecnico">Problema técnico</option>
            <option value="sugestao">Sugestão</option>
          </select>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Descreva seu problema"
            rows="4"
            className="border rounded p-2"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
          >
            Enviar mensagem
          </button>
        </form>
      </section>

      {/* Tutoriais */}
      <section>
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <BookOpen size={18} /> Tutoriais e Guias
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-gray-100 h-32 rounded mb-3 flex items-center justify-center text-gray-400">
                Vídeo {item}
              </div>
              <h3 className="font-medium text-gray-800 text-sm">
                Guia rápido {item}
              </h3>
              <p className="text-xs text-gray-500 mt-1">Como usar a plataforma</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
