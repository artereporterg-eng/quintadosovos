
import React from 'react';

interface FooterProps {
  onAdminLogin: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminLogin }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-24 pb-12 text-white no-print">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white"><i className="fa-solid fa-egg"></i></div>
              <h2 className="text-xl font-black uppercase tracking-tighter">Quinta dos Ovos</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">Excelência e inovação na avicultura angolana. Sua granja com tecnologia de ponta.</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-amber-600">Navegação</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">Serviços</button></li>
              <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre Nós</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-amber-600">Contacto</h4>
            <p className="text-sm font-bold text-slate-400 mb-2">Huambo, Angola</p>
            <p className="text-sm font-bold text-slate-400">comercial@quintadosovos.ao</p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-amber-600">ERP Local</h4>
            <button onClick={onAdminLogin} className="w-full py-4 border-2 border-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-amber-600 hover:text-amber-600 transition-all">
              Painel Administrativo
            </button>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">&copy; 2024 Quinta dos Ovos ERP • Angola</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
