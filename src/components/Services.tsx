
import { LucideIcon, Monitor, Users, BookOpen, BrainCircuit, Code, Rocket } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

const ServiceCard = ({ title, description, icon: Icon, color }: ServiceCardProps) => {
  return (
    <div className="group card hover:scale-105 transition-all duration-500">
      <div className="p-6 md:p-8">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Mentoria Personalizada',
      description: 'Acompanhamento individualizado para desenvolver habilidades técnicas e comportamentais específicas para sua carreira.',
      icon: Users,
      color: 'bg-infinity-blue'
    },
    {
      title: 'Consultoria Educacional',
      description: 'Orientação para instituições sobre como implementar tecnologias educacionais de forma eficiente.',
      icon: BookOpen,
      color: 'bg-infinity-green'
    },
    {
      title: 'Workshops de Tecnologia',
      description: 'Capacitações práticas em ferramentas e tecnologias atuais para educadores e profissionais.',
      icon: Monitor,
      color: 'bg-infinity-orange'
    },
    {
      title: 'Consultoria em IA',
      description: 'Implementação de soluções de Inteligência Artificial para otimizar processos educacionais.',
      icon: BrainCircuit,
      color: 'bg-infinity-blue'
    },
    {
      title: 'Desenvolvimento Profissional',
      description: 'Programas personalizados para desenvolvimento de carreira e crescimento profissional na área de tecnologia.',
      icon: Code,
      color: 'bg-infinity-green'
    },
    {
      title: 'Aceleração de Carreira',
      description: 'Estratégias para acelerar sua trajetória profissional e atingir posições de destaque no mercado.',
      icon: Rocket,
      color: 'bg-infinity-orange'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-infinity-green/10 text-infinity-green mb-4">
              Soluções Completas
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços focados em tecnologia e educação para impulsionar sua carreira ou instituição.
          </p>
          <div className="h-1 w-20 bg-infinity-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
