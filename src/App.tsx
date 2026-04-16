import React, { useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { InfoForm } from './components/InfoForm';
import { CardA4 } from './components/CardA4';
import { AboutPage } from './components/AboutPage';
import { Language, FormData, translations } from './translations';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Info } from 'lucide-react';
import { cn } from './lib/utils';

const initialData: FormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  placeOfBirth: '',
  profession: '',
  phone: '',
  bloodType: '',
  photo: null
};

export default function App() {
  const [lang, setLang] = useState<Language | null>(null);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [showPreview, setShowPreview] = useState(false);
  const [view, setView] = useState<'form' | 'about'>('form');

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setFormData(initialData);
  };

  if (!lang) {
    return <LanguageSelector onSelect={setLang} />;
  }

  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 no-print">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => {
                if (view === 'about') {
                  setView('form');
                } else {
                  setLang(null);
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
              title={t.actions.back}
            >
              <ArrowLeft className={isAr ? "rotate-180" : ""} />
            </button>
            <div className="flex items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Algerian_Red_Crescent_logo.svg" 
                alt="CRA Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-gray-900 text-xs sm:text-sm md:text-base uppercase tracking-tight truncate max-w-[120px] sm:max-w-none">
                {t.header.org}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setView(view === 'about' ? 'form' : 'about')}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all",
                view === 'about' 
                  ? "bg-[#ED1C24] text-white" 
                  : "text-gray-500 hover:bg-gray-100"
              )}
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">{t.actions.about}</span>
            </button>
            <div className="flex items-center gap-1 sm:gap-2 text-[#ED1C24] font-bold">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider">{t.header.location}</span>
            </div>
          </div>
        </div>
      </header>

      {view === 'about' ? (
        <AboutPage lang={lang} />
      ) : (
        <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 no-print">
          {/* Mobile Preview Toggle */}
          <div className="lg:hidden flex justify-center mb-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-600 shadow-sm hover:bg-gray-50 transition-all"
            >
              {showPreview 
                ? (isAr ? "إخفاء المعاينة" : "Masquer l'aperçu")
                : (isAr ? "إظهار المعاينة" : "Afficher l'aperçu")}
            </button>
          </div>

          {/* Left Sidebar: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn("space-y-6", showPreview ? "hidden lg:block" : "block")}
          >
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-[#ED1C24] rounded-full" />
                {t.title}
              </h2>
              <InfoForm 
                data={formData} 
                onChange={setFormData} 
                onPrint={handlePrint}
                onReset={handleReset}
                lang={lang}
              />
            </div>
            
            <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
              <p className="text-xs text-red-600 font-medium leading-relaxed">
                {isAr 
                  ? "تأكد من صحة المعلومات المدخلة. يمكنك معاينة البطاقة مباشرة على الجهة المقابلة."
                  : "Assurez-vous que les informations saisies sont correctes. Vous pouvez prévisualiser la carte directement sur le côté opposé."}
              </p>
            </div>
          </motion.div>

          {/* Right Content: Preview */}
          <div className={cn(
            "relative flex flex-col items-center overflow-hidden",
            !showPreview && "hidden lg:flex"
          )}>
            <div className="lg:sticky lg:top-24 w-full flex flex-col items-center min-h-[500px]">
              <div className="mb-4 flex items-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-widest">
                <span>Preview</span>
                <div className="w-12 h-px bg-gray-200" />
                <span>A4</span>
              </div>
              
              {/* The actual card container with responsive scaling */}
              <div className="w-full flex justify-center items-start overflow-x-auto pb-8">
                <div className="origin-top scale-[0.35] sm:scale-[0.45] md:scale-[0.55] lg:scale-[0.65] xl:scale-[0.8] shadow-2xl rounded-sm overflow-hidden bg-white">
                  <CardA4 id="preview-card" data={formData} lang={lang} />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Container specifically for printing - visible only during print */}
      <div className="print-only">
        <CardA4 id="printable-card" data={formData} lang={lang} />
      </div>

      <footer className="bg-white border-t border-gray-200 py-8 mt-auto no-print">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
            © {t.header.org} - {t.header.location}
          </p>
        </div>
      </footer>
    </div>
  );
}
