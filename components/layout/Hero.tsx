
import React from 'react';

interface HeroProps {
  currentSlide: number;
  slides: Array<{ url: string, title: string, subtitle: string }>;
  onSetSlide: (index: number) => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ currentSlide, slides, onSetSlide, onExplore }) => {
  return (
    <section id="home" className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      {slides.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40 z-10" />
          <img src={slide.url} className="w-full h-full object-cover" alt={slide.title} />
          <div className="absolute bottom-20 left-10 md:left-24 z-20 max-w-2xl text-white">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-none">{slide.title}</h2>
            <p className="text-lg md:text-xl font-medium text-amber-400 opacity-90">{slide.subtitle}</p>
            <button onClick={onExplore} className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl active:scale-95">
              Explorar Produtos
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-10 right-10 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => onSetSlide(idx)} className={`h-1.5 transition-all rounded-full ${idx === currentSlide ? 'w-10 bg-amber-500' : 'w-4 bg-white/30'}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
