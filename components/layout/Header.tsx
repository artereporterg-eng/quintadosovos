
import React from 'react';

interface HeaderProps {
  onViewStore: () => void;
  onOpenCart: () => void;
  onToggleAdmin: () => void;
  cartCount: number;
  isLoggedIn: boolean;
  isAdminView: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onViewStore, onOpenCart, onToggleAdmin, cartCount, isLoggedIn, isAdminView 
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-amber-100 no-print">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onViewStore}>
          <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-amber-200">
            <i className="fa-solid fa-egg text-2xl"></i>
          </div>
          <h1 className="text-2xl font-black text-slate-900 leading-none">
            Quinta<span className="text-amber-600 block text-xs tracking-[0.2em] font-black uppercase">dosOvos</span>
          </h1>
        </div>
        
        {!isAdminView && (
          <nav className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('servicos')} className="hover:text-amber-600 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-amber-600 transition-colors">Sobre Nós</button>
          </nav>
        )}

        <div className="flex items-center gap-4">
          <button onClick={onOpenCart} className="relative p-3 bg-slate-50 text-slate-700 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all">
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
          {isLoggedIn && (
            <button onClick={onToggleAdmin} className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl transition-all active:scale-95">
              {isAdminView ? 'Ver Loja' : 'Painel ERP'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
