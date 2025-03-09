
import { GraduationCap, BookOpen, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="quem-sou" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-infinity-blue via-infinity-green to-infinity-orange"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-infinity-blue/10 text-infinity-blue mb-4">
              Conhecimento e Experiência
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Quem Sou</h2>
          <div className="h-1 w-20 bg-infinity-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-infinity-blue">27 anos na área de informática</h3>
              <p className="text-gray-600 leading-relaxed">
                Com uma extensa trajetória na área de tecnologia, desenvolvi expertise em diversas 
                tecnologias e metodologias educacionais, capacitando estudantes e profissionais 
                para os desafios do mercado atual.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-infinity-blue/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-infinity-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Formação Acadêmica</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-infinity-green flex-shrink-0" />
                      <span>Tecnólogo em Desenvolvimento de Sistemas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-infinity-green flex-shrink-0" />
                      <span>Pós-graduação em Formação Pedagógica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-infinity-green flex-shrink-0" />
                      <span>Pós-graduação em Gestão Escolar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-infinity-green flex-shrink-0" />
                      <span>Pós-graduação em Meios Digitais na Educação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-infinity-blue/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-infinity-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Experiência Profissional</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-infinity-orange flex-shrink-0" />
                      <span>Professor e Coordenador no Colégio ULBRA São Lucas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-infinity-orange flex-shrink-0" />
                      <span>Docente no SENAC, IPUC, QI, Alcides Maya e Universitário</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-infinity-orange flex-shrink-0" />
                      <span>Especialista em Inteligência Artificial aplicada à educação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-infinity-blue/20 to-infinity-green/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/90 backdrop-blur-sm p-8 shadow-xl animate-float">
                  <div className="text-6xl md:text-7xl font-bold text-infinity-blue text-center">27+</div>
                  <div className="text-lg font-medium text-gray-600 text-center mt-2">Anos de Experiência</div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <h4 className="text-lg font-bold text-infinity-blue mb-1">Um mundo de possibilidades</h4>
                <p className="text-sm text-gray-600">
                  Combinando tecnologia e educação para formar profissionais preparados para os desafios do futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
