
import { ArrowRight, Users, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

const Career = () => {
  return (
    <section id="carreira" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-infinity-orange/10 text-infinity-orange mb-4">
              Transforme Seu Futuro
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Primeiro Emprego / Transição de Carreira</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Orientação especializada para quem busca o primeiro emprego ou deseja mudar de área profissional.
          </p>
          <div className="h-1 w-20 bg-infinity-orange mx-auto mt-4"></div>
        </div>
        
        {/* Feature blocks */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* First-time job seekers */}
          <div className="space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold text-infinity-blue flex items-center">
              <Users className="mr-3 h-8 w-8" />
              Primeiro Emprego
            </h3>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-3 text-infinity-blue">Preparação Completa</h4>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos suas habilidades técnicas e comportamentais para garantir que você esteja 
                  totalmente preparado para iniciar sua carreira no mercado de tecnologia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Elaboração de currículo profissional</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Simulações de entrevistas</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Orientação para testes técnicos</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-3 text-infinity-blue">Direcionamento Estratégico</h4>
                <p className="text-gray-600 mb-4">
                  Ajudamos você a identificar as melhores oportunidades de acordo com seu perfil, 
                  interesses e o mercado atual.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mapeamento de perfil profissional</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Análise de mercado e tendências</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Estratégias de networking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Career transition */}
          <div className="space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold text-infinity-blue flex items-center">
              <Briefcase className="mr-3 h-8 w-8" />
              Transição de Carreira
            </h3>
            
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-3 text-infinity-blue">Requalificação Profissional</h4>
                <p className="text-gray-600 mb-4">
                  Planejamos sua jornada de aprendizado para adquirir as competências necessárias 
                  para realizar uma transição de carreira bem-sucedida.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Mapeamento de habilidades transferíveis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Plano de estudos personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Orientação para certificações estratégicas</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-semibold mb-3 text-infinity-blue">Estratégia de Transição</h4>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos um plano gradual e seguro para sua mudança de carreira, 
                  minimizando riscos e maximizando suas chances de sucesso.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Planejamento financeiro para a transição</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Estratégias para ganhar experiência</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-infinity-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Reposicionamento de marca pessoal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials or success metrics */}
        <div className="bg-gradient-to-r from-infinity-blue to-infinity-green rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-3 h-7 w-7" />
              Resultados que Transformam Vidas
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">93%</div>
                <p className="text-white/80">dos nossos mentorados conseguem emprego em até 6 meses</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">85%</div>
                <p className="text-white/80">relatam aumento significativo de salário após a transição</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">97%</div>
                <p className="text-white/80">de satisfação entre nossos alunos e mentorados</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="#contato" className="btn px-8 py-3 bg-white text-infinity-blue hover:bg-white/90 transition-all">
                Inicie Sua Transformação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
