import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../translations';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  onSelect: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const t = translations.fr; // Initial interface in French as requested

  return (
    <div className="min-h-screen bg-[#ED1C24] flex items-center justify-center p-4 no-print">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
      >
        <div className="mb-6 flex justify-center">
          <div className="bg-red-50 p-4 rounded-full">
            <Globe className="w-12 h-12 text-[#ED1C24]" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          {t.selectLanguage}
        </h1>
        
        <div className="grid gap-4">
          <button
            onClick={() => onSelect('fr')}
            className="group relative flex items-center justify-between p-4 border-2 border-gray-100 rounded-2xl hover:border-[#ED1C24] hover:bg-red-50 active:scale-[0.98] transition-all duration-300"
          >
            <span className="text-lg font-semibold text-gray-700 group-hover:text-[#ED1C24]">
              {t.french}
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#ED1C24] flex items-center justify-center transition-colors">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </button>
          
          <button
            onClick={() => onSelect('ar')}
            className="group relative flex items-center justify-between p-4 border-2 border-gray-100 rounded-2xl hover:border-[#ED1C24] hover:bg-red-50 active:scale-[0.98] transition-all duration-300"
          >
            <span className="text-lg font-semibold text-gray-700 group-hover:text-[#ED1C24]">
              {t.arabic}
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#ED1C24] flex items-center justify-center transition-colors">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </button>
        </div>
        
        <div className="mt-12">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Algerian_Red_Crescent_logo.svg" 
            alt="CRA Logo" 
            className="w-16 h-16 mx-auto opacity-50"
            referrerPolicy="no-referrer"
          />
          <p className="mt-4 text-sm text-gray-400 font-medium uppercase tracking-widest">
            Croissant-Rouge Algérien
          </p>
        </div>
      </motion.div>
    </div>
  );
};
