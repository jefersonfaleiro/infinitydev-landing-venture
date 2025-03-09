
import { BrainCircuit, Lightbulb, School, Blocks, PenTool, Users } from 'lucide-react';

const AI = () => {
  return (
    <section id="ia-educacao" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTMwIDMwbDMwIDMwTTMwIDMwTDAgNjBNMzAgMzBsMzAgLTMwTTMwIDMwTDAgMCIgc3Ryb2tlPSIjRTVFN0VCIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMyIvPgo8L3N2Zz4=')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-infinity-blue/10 text-infinity-blue mb-4">
              O Futuro da Educação
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Inteligência Artificial na Educação</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a experiência de aprendizagem com as mais avançadas tecnologias de IA.
          </p>
          <div className="h-1 w-20 bg-infinity-blue mx-auto mt-4"></div>
        </div>
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side image/visualization */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-infinity-blue via-infinity-green to-infinity-orange rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="h-32 w-32 text-infinity-blue animate-float" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                <Lightbulb className="h-6 w-6 text-infinity-orange" />
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <School className="h-6 w-6 text-infinity-green" />
              </div>
              
              <div className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: '1.5s'}}>
                <PenTool className="h-6 w-6 text-infinity-blue" />
              </div>
              
              <div className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <Blocks className="h-6 w-6 text-infinity-green" />
              </div>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-infinity-blue">
              Transformando a Educação com IA
            </h3>
            
            <p className="text-lg text-gray-600">
              A Inteligência Artificial está revolucionando o cenário educacional, possibilitando 
              experiências de aprendizado personalizadas, análises preditivas e automação de tarefas 
              administrativas, permitindo que educadores foquem no que realmente importa: o desenvolvimento 
              de seus alunos.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-infinity-blue/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-infinity-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Aprendizado Personalizado</h4>
                    <p className="text-gray-600">
                      Sistemas de IA analisam o desempenho individual de cada aluno para criar percursos 
                      de aprendizagem personalizados, respeitando o ritmo e as necessidades específicas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-infinity-green/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-infinity-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Automação Inteligente</h4>
                    <p className="text-gray-600">
                      Ferramentas de IA podem automatizar a correção de avaliações, feedback instantâneo 
                      e até mesmo tarefas administrativas, liberando tempo precioso para os educadores.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-infinity-orange/10 p-3 rounded-full">
                    <School className="h-6 w-6 text-infinity-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Análise Preditiva</h4>
                    <p className="text-gray-600">
                      Modelos preditivos podem identificar precocemente alunos em risco de evasão 
                      ou com dificuldades específicas, permitindo intervenções preventivas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Box */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Workshops e Capacitações</h3>
              <p className="text-gray-600 mb-6">
                Oferecemos workshops e programas de capacitação para educadores e instituições 
                que desejam implementar soluções de IA em seus processos educacionais.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-infinity-blue/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-infinity-blue rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Fundamentos de IA para Educadores</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-infinity-blue/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-infinity-blue rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Implementação de Chatbots Educacionais</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-infinity-blue/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-infinity-blue rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Análise de Dados Educacionais com IA</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-infinity-blue/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-infinity-blue rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Personalização do Aprendizado com IA</span>
                </li>
              </ul>
              
              <a href="#contato" className="btn btn-primary px-6 py-3">
                Saiba Mais Sobre Nossas Capacitações
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-infinity-blue to-infinity-green p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Consultoria Especializada</h3>
              <p className="mb-6">
                Nossa equipe de especialistas oferece consultoria personalizada para implementação 
                de soluções de IA adaptadas às necessidades específicas de sua instituição educacional.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Diagnóstico de necessidades tecnológicas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Planejamento estratégico de implementação</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Capacitação de equipes pedagógicas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Monitoramento e otimização contínua</span>
                </li>
              </ul>
              
              <a href="#contato" className="btn px-6 py-3 bg-white text-infinity-blue hover:bg-white/90">
                Solicite uma Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI;
