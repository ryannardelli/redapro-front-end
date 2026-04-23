import React, { useState } from "react";
import { Mail, HelpCircle, MessageCircle } from "lucide-react";
import { FaqAccordion } from "@components/ui/FaqAccordion";
import { useAuth } from "@hooks/useAuth";

const studentFaqs = [
  {
    ask: "Como enviar uma redação?",
    answer:
      "Acesse a área 'Enviar Redação' no menu principal. Você também pode ir até 'Minhas Redações' e clicar no botão 'Nova Redação'. Após selecionar o tema e enviar seu texto, sua redação será registrada no sistema e ficará disponível para correção."
  },
  {
    ask: "Quanto tempo demora a correção?",
    answer:
      "O tempo de correção pode variar de acordo com a disponibilidade dos corretores. Assim que sua redação é enviada, ela entra na fila de correção e pode ser analisada a qualquer momento por um corretor. Quando a correção for concluída, você será notificado e poderá visualizar o feedback completo na plataforma."
  },
  {
    ask: "Posso editar minha redação até qual momento?",
    answer:
      "Você pode editar sua redação enquanto ela ainda não tiver sido iniciada por um corretor. Após o início da correção, o texto é bloqueado para garantir a integridade da análise realizada."
  },
  {
    ask: "A correção com IA é precisa?",
    answer:
      "A plataforma utiliza Inteligência Artificial para auxiliar no processo de análise textual, identificando aspectos como coerência, gramática e estrutura. No entanto, todas as redações passam também pela revisão de um corretor humano, garantindo uma avaliação mais precisa, justa e alinhada aos critérios de correção."
  },

  {
    ask: "Modelos de redação nota 1000 estão disponíveis na plataforma?",
    answer:
      "Sim. A plataforma possui modelos de redações nota 1000 cadastrados no sistema para ajudar você a entender como estruturar uma redação de alta qualidade. Esses exemplos servem como referência de organização, argumentação e desenvolvimento de ideias."
  },
  {
    ask: "Posso usar os modelos nota 1000 como base para minha redação?",
    answer:
      "Os modelos podem ser utilizados como referência de estrutura, repertório e organização textual. No entanto, é importante desenvolver suas próprias ideias e argumentos para evitar cópias e garantir a originalidade da sua redação."
  },
  {
    ask: "Como acessar os modelos de redação nota 1000?",
    answer:
      "Você pode acessar os modelos diretamente na área de 'Modelos Nota 1000' dentro da plataforma. Lá você encontrará exemplos de redações bem avaliadas que podem ajudar no seu aprendizado e na melhoria da sua escrita."
  }
];

const correctorFaqs = [
  {
    ask: "Como começo a corrigir uma redação?",
    answer:
      "Acesse o painel de correções no menu principal. Lá você encontrará as redações disponíveis para correção. Basta selecionar uma redação para iniciar a análise e registrar o feedback para o estudante."
  },
  {
    ask: "Existe um prazo para realizar a correção?",
    answer:
      "O tempo de correção pode variar de acordo com sua disponibilidade. Após iniciar a correção de uma redação, recomenda-se finalizá-la o quanto antes para garantir uma boa experiência ao estudante."
  },
  {
    ask: "Posso editar uma correção após enviar?",
    answer:
      "Após enviar a correção, ela normalmente é registrada no sistema e disponibilizada ao estudante. Logo, você não conseguirá mais ter acesso."
  },
  {
    ask: "A plataforma utiliza Inteligência Artificial na correção?",
    answer:
      "Sim. A plataforma pode utilizar Inteligência Artificial para auxiliar na análise textual, identificando aspectos como estrutura, gramática e coerência. No entanto, a avaliação final e o feedback ao estudante são realizados pela escolha do estudante."
  },
  {
    ask: "Como garantir uma correção justa e consistente?",
    answer:
      "Recomenda-se seguir os critérios de avaliação definidos pela plataforma, observando aspectos como estrutura do texto, argumentação, domínio da norma padrão e proposta de intervenção. Isso ajuda a manter um padrão de qualidade nas correções."
  },
  {
    ask: "Como acompanhar meu histórico de correções?",
    answer:
      "No painel do corretor é possível visualizar o histórico de redações corrigidas, permitindo acompanhar suas correções realizadas ao longo do tempo."
  }
];

export function HelpAndSupport() {
  const [formData, setFormData] = useState({ nome: "", email: "", tipo: "", mensagem: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { state } = useAuth();
  const user = state.user;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Sua mensagem foi enviada com sucesso!");
    setFormData({ nome: "", email: "", tipo: "", mensagem: "" });
  };

  return (
    <div className="p-4 md:p-8 space-y-12 max-w-5xl mx-auto bg-slate-50 min-h-screen">
      
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
        
        <div className="lg:col-span-7 space-y-10">
          
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <MessageCircle size={20} />
              </span>
              <h2 className="text-xl font-bold text-slate-800">Dúvidas Frequentes</h2>
            </div>

            {user?.profile.name === "Estudante" && <FaqAccordion faqs={studentFaqs} /> }
            {user?.profile.name === "Corretor" && <FaqAccordion faqs={correctorFaqs} /> }
          </section>
        </div>

        <div className="lg:col-span-5">
          <section className="sticky top-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
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
                      rows={4}
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