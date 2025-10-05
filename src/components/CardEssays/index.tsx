import defaultEssay from '../../assets/img/defaultEssay.jpg';

export function CardEssays() {
    return (
        <section className="px-4 py-10 mx-auto max-w-7xl">
            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Redações</h2>
            <p className="mb-20 text-lg text-gray-500">
                Confira seuas redações avaliadas com nota, tema e data de envio.
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-5 bg-white rounded shadow-md">
                <a href="#">
                    <img
                        src={defaultEssay}
                        className="object-cover w-full h-56 mb-5 bg-center rounded"
                        alt="Redação"
                        loading="lazy"
                    />
                </a>
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    <a href="#" className="text-gray-900 hover:text-purple-700">
                        Impactos da Inteligência Artificial na Educação
                    </a>
                </h2>
                <p className="mb-3 text-sm font-normal text-gray-500">
                    Uma análise sobre como a IA está transformando métodos de ensino e aprendizagem nas escolas.
                </p>
                <p className="mb-1 text-sm font-medium text-gray-700">
                    Tema: Tecnologia e Educação
                </p>
                <p className="mb-1 text-sm font-medium text-gray-700">
                    Nota: 860
                </p>
                <p className="mb-1 text-sm font-medium text-gray-700">
                    Status: Corrigida
                </p>
                <p className="mb-3 text-sm font-normal text-gray-500">
                    Enviada em: 05/10/2025
                </p>
            </div>


                <div className="bg-white p-5 rounded shadow-md">
                    <a href="#">
                        <img
                            src={defaultEssay}
                            className="object-cover w-full h-56 mb-5 bg-center rounded"
                            alt="Redação"
                            loading="lazy"
                        />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="#" className="text-gray-900 hover:text-purple-700">
                            Sustentabilidade e Consumo Consciente
                        </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Discussão sobre como hábitos de consumo impactam o meio ambiente e possíveis soluções.
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Tema: Meio Ambiente
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Nota: 800
                    </p>

                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Status: Pendente
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Enviada em: 04/10/2025
                    </p>
                </div>

                    <div className="p-5 bg-white rounded shadow-md">
                    <a href="#">
                        <img
                            src={defaultEssay}
                            className="object-cover w-full h-56 mb-5 bg-center rounded"
                            alt="Redação"
                            loading="lazy"
                        />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="#" className="text-gray-900 hover:text-purple-700">
                            A Importância da Leitura na Formação Pessoal
                        </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Este texto discute como o hábito da leitura contribui para o desenvolvimento crítico, cultural e emocional dos indivíduos.
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Tema: Educação
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Nota: 900
                    </p>

                    <p className="mb-1 text-sm font-medium text-gray-700">
                    Status: Corrigida
                   </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Enviada em: 01/10/2025
                    </p>
                </div>

                <div className="p-5 bg-white rounded shadow-md">
                    <a href="#">
                        <img
                            src={defaultEssay}
                            className="object-cover w-full h-56 mb-5 bg-center rounded"
                            alt="Redação"
                            loading="lazy"
                        />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="#" className="text-gray-900 hover:text-purple-700">
                            Sustentabilidade e Consumo Consciente
                        </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Aborda como escolhas diárias de consumo impactam o meio ambiente e quais ações podemos adotar para reduzir a pegada ecológica.
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Tema: Meio Ambiente
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Nota: 850
                    </p>

                    <p className="mb-1 text-sm font-medium text-gray-700">
                    Status: Corrigida
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Enviada em: 28/09/2025
                    </p>
                </div>

                <div className="p-5 bg-white rounded shadow-md">
                    <a href="#">
                        <img
                            src={defaultEssay}
                            className="object-cover w-full h-56 mb-5 bg-center rounded"
                            alt="Redação"
                            loading="lazy"
                        />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="#" className="text-gray-900 hover:text-purple-700">
                            O Papel da Tecnologia na Inclusão Social
                        </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Analisa como inovações tecnológicas podem facilitar a inclusão de pessoas com deficiência e ampliar o acesso à educação e ao mercado de trabalho.
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Tema: Tecnologia e Sociedade
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Nota: 920
                    </p>

                    <p className="mb-1 text-sm font-medium text-gray-700">
                    Status: Corrigida
                </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Enviada em: 15/09/2025
                    </p>
                </div>

                <div className="p-5 bg-white rounded shadow-md">
                    <a href="#">
                        <img
                            src={defaultEssay}
                            className="object-cover w-full h-56 mb-5 bg-center rounded"
                            alt="Redação"
                            loading="lazy"
                        />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="#" className="text-gray-900 hover:text-purple-700">
                            Desafios da Mobilidade Urbana nas Grandes Cidades
                        </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Discute os problemas do trânsito, transporte público e como políticas públicas podem melhorar a qualidade de vida urbana.
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Tema: Urbanismo
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Nota: 960
                    </p>

                    <p className="mb-1 text-sm font-medium text-gray-700">
                    Status: Corrigida
                </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Enviada em: 05/09/2025
                    </p>
                </div>

                <div className="p-5 bg-white rounded shadow-md">
                    <a href="#">
                        <img
                            src={defaultEssay}
                            className="object-cover w-full h-56 mb-5 bg-center rounded"
                            alt="Redação"
                            loading="lazy"
                        />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="#" className="text-gray-900 hover:text-purple-700">
                            Alimentação Saudável e Qualidade de Vida
                        </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Explora a relação entre hábitos alimentares, saúde física e mental, e estratégias para promover uma dieta equilibrada.
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Tema: Saúde
                    </p>
                    <p className="mb-1 text-sm font-medium text-gray-700">
                        Nota: 980
                    </p>

                    <p className="mb-1 text-sm font-medium text-gray-700">
                    Status: Corrigida
                </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Enviada em: 01/09/2025
                    </p>
                </div>
            </div>
        </section>
    );
}
