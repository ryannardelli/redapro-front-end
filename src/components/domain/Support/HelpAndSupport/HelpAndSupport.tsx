import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, BookOpen, HelpCircle, MessageCircle, PlayCircle } from "lucide-react";

const faqs = [
  {
    pergunta: "Como enviar minha redação?",
    resposta: "Vá até a aba 'Redações', clique em 'Enviar Redação' e siga as instruções para anexar seu arquivo."
  },
  {
    pergunta: "Posso editar minha redação depois de enviar?",
    resposta: "Não. Após o envio, a redação é encaminhada para correção e não pode mais ser editada para garantir a integridade do processo."
  },
  {
    pergunta: "Como remarcar um agendamento?",
    resposta: "Acesse a aba 'Agendamentos', clique no ícone de edição ao lado do agendamento e selecione a nova data e horário disponível."
  }
];

export function HelpAndSupport() {
  const [faqAberto, setFaqAberto] = useState(null);
  const [formData, setFormData] = useState({ nome: "", email: "", tipo: "", mensagem: "" });

  const toggleFaq = (index) => setFaqAberto(faqAberto === index ? null : index);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sua mensagem foi enviada com sucesso!");
    setFormData({ nome: "", email: "", tipo: "", mensagem: "" });
  };

  return (
    <div className="p-4 md:p-8 space-y-12 max-w-5xl mx-auto bg-slate-50 min-h-screen">
      
      {/* --- HEADER --- */}
      <div className="text-center space-y-4">
        <div className="inline-flex p-3 bg-purple-100 text-purple-600 rounded-2xl mb-2">
          <HelpCircle size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Central de Suporte</h1>
        <p className="text-slate-600 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          Tudo o que você precisa para navegar na plataforma sem obstáculos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- COLUNA ESQUERDA: FAQ E TUTORIAIS --- */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* FAQ SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <MessageCircle size={20} />
              </span>
              <h2 className="text-xl font-bold text-slate-800">Dúvidas Frequentes</h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className={`transition-all duration-200 border rounded-2xl overflow-hidden ${faqAberto === index ? 'border-purple-200 shadow-md bg-white' : 'border-slate-200 bg-white hover:border-purple-200'}`}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-5 text-left transition-colors"
                  >
                    <span className={`font-bold text-sm md:text-base ${faqAberto === index ? 'text-purple-600' : 'text-slate-700'}`}>
                      {faq.pergunta}
                    </span>
                    {faqAberto === index ? (
                      <ChevronUp className="text-purple-600 shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-slate-400 shrink-0" size={20} />
                    )}
                  </button>
                  {faqAberto === index && (
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4 animate-in slide-in-from-top-2">
                      {faq.resposta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* TUTORIALS SECTION */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <BookOpen size={20} />
              </span>
              <h2 className="text-xl font-bold text-slate-800">Guias Rápidos</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="group bg-white p-4 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="relative bg-slate-100 h-32 rounded-xl mb-4 overflow-hidden flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                    <PlayCircle size={40} className="text-slate-300 group-hover:text-purple-400 transition-all group-hover:scale-110" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm group-hover:text-purple-600">Dominando o Painel v1.0</h3>
                  <p className="text-[11px] text-slate-500 mt-1 uppercase font-bold tracking-wider">3 minutos de leitura</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- COLUNA DIREITA: FORMULÁRIO --- */}
        <div className="lg:col-span-5">
          <section className="sticky top-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              {/* Detalhe decorativo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <span className="p-2 bg-purple-600 text-white rounded-lg">
                    <Mail size={20} />
                  </span>
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">Ainda com dúvidas?</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: Ryan Nardelli"
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-purple-500 transition-all outline-none"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase">E-mail para retorno</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-purple-500 transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Assunto</label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-purple-500 transition-all outline-none appearance-none"
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="duvida">Dúvida sobre Correção</option>
                      <option value="tecnico">Problema Técnico</option>
                      <option value="financeiro">Pagamentos</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 ml-1 uppercase">Sua Mensagem</label>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="No que podemos ajudar?"
                      rows="4"
                      className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-purple-500 transition-all outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 hover:bg-purple-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}