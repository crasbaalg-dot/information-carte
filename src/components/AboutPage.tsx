import React from 'react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { Info, Shield, CheckCircle, User, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

interface AboutPageProps {
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      style={{ direction: isAr ? 'rtl' : 'ltr' }}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center p-3 bg-red-100 rounded-2xl mb-6"
        >
          <Info className="w-8 h-8 text-[#ED1C24]" />
        </motion.div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {t.aboutPage.title}
        </h1>
        <div className="w-24 h-1.5 bg-[#ED1C24] mx-auto rounded-full mb-8" />
      </div>

      <div className="space-y-12">
        {/* Intro Section */}
        <section className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8 md:p-10">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.aboutPage.intro}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.aboutPage.goal}
          </p>
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-[#ED1C24] mt-1 shrink-0" />
              <p className="text-red-900 font-medium leading-relaxed">
                {t.aboutPage.confidentiality}
              </p>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-[#ED1C24] rounded-full" />
              {t.aboutPage.importanceTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.aboutPage.importanceDesc}</p>
            <ul className="space-y-4">
              {t.aboutPage.importanceList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 italic">
              {t.aboutPage.importanceFooter}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              {t.aboutPage.usageTitle}
            </h2>
            <div className="space-y-6">
              {t.aboutPage.usageList.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 font-medium pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-400" />
            {t.aboutPage.privacyTitle}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t.aboutPage.privacyDesc}
          </p>
        </section>

        {/* Realization Section */}
        <section className="text-center py-12 border-t border-gray-100">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-6">
            <Heart className="w-6 h-6 text-[#ED1C24]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t.aboutPage.realizationTitle}
          </h2>
          <p className="text-gray-500 mb-4">{t.aboutPage.realizationDesc}</p>
          <div className="bg-white inline-block px-8 py-4 rounded-2xl shadow-lg border border-gray-100 mb-6">
            <p className="text-xl font-black text-gray-900 flex items-center gap-3">
              <User className="w-5 h-5 text-[#ED1C24]" />
              {t.aboutPage.author}
            </p>
          </div>
          <p className="max-w-xl mx-auto text-gray-500 text-sm leading-relaxed">
            {t.aboutPage.realizationFooter}
          </p>
        </section>
      </div>
    </motion.div>
  );
};
