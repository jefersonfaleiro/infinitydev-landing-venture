
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: 'Mentoria para Desenvolvimento Profissional',
      description: 'Desenvolva habilidades técnicas e comportamentais para se destacar no mercado de tecnologia.',
      buttonText: 'Saiba Mais',
      buttonHref: '#servicos',
      color: 'bg-infinity-blue'
    },
    {
      title: 'Orientação para Transição de Carreira',
      description: 'Planeje e execute sua transição para a área de tecnologia com orientação especializada.',
      buttonText: 'Conheça Mais',
      buttonHref: '#carreira',
      color: 'bg-infinity-green'
    },
    {
      title: 'Capacitação em Tecnologias Educacionais',
      description: 'Aprenda a integrar ferramentas tecnológicas para transformar seus métodos de ensino.',
      buttonText: 'Descubra Mais',
      buttonHref: '#servicos',
      color: 'bg-infinity-orange'
    },
    {
      title: 'Consultoria em IA para Educação',
      description: 'Integre soluções de Inteligência Artificial para potencializar o aprendizado de seus alunos.',
      buttonText: 'Explorar',
      buttonHref: '#ia-educacao',
      color: 'bg-infinity-blue'
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEwIDEwQzEwIDEwIDUwIDEwIDUwIDUwIiBzdHJva2U9IiNFNUU3RUIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="text-center max-w-4xl mx-auto">
                <div className={`h-2 w-24 mx-auto mb-8 rounded-full ${slide.color} animate-fade-in`}></div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  {slide.description}
                </p>
                <a
                  href={slide.buttonHref}
                  className={`btn btn-primary px-8 py-4 text-lg shadow-lg animate-fade-in-up hover:shadow-xl hover:translate-y-[-2px]`}
                  style={{animationDelay: '0.6s'}}
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-infinity-blue' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
