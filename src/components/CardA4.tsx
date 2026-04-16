import React from 'react';
import { FormData, Language, translations } from '../translations';
import { cn } from '../lib/utils';

interface CardA4Props {
  data: FormData;
  lang: Language;
  id?: string;
}

const LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Algerian_Red_Crescent_logo.svg";

export const CardA4: React.FC<CardA4Props> = ({ data, lang, id }) => {
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div
      id={id}
      className={cn(
        "bg-white shadow-2xl mx-auto overflow-hidden text-black",
        "w-[210mm] h-[297mm] p-[15mm] flex flex-col",
        isAr ? "font-sans text-right" : "font-sans text-left"
      )}
      style={{ direction: isAr ? 'rtl' : 'ltr' }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <img src={LOGO_URL} alt="CRA Logo" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
        <div className="text-center flex-1">
          <h1 className="text-xl font-bold uppercase tracking-wider">{t.header.org}</h1>
          <h2 className="text-lg font-bold uppercase">{t.header.committee}</h2>
          <h3 className="text-lg font-bold uppercase">{t.header.location}</h3>
        </div>
        <img src={LOGO_URL} alt="CRA Logo" className="w-24 h-24 object-contain" referrerPolicy="no-referrer" />
      </div>

      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#ED1C24] inline-block border-b-4 border-[#ED1C24] pb-1 uppercase">
          {t.title}
        </h2>
      </div>

      {/* Content Section */}
      <div className={cn("flex flex-1", isAr ? "flex-row-reverse" : "flex-row")}>
        {/* Photo Frame (Left Side) */}
        <div className="w-1/3 flex flex-col items-center pt-4">
          <div className="w-40 h-48 border-2 border-black flex items-center justify-center bg-gray-50 overflow-hidden">
            {data.photo ? (
              <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-sm uppercase">{t.emptyFields.photo}</span>
            )}
          </div>
        </div>

        {/* Personal Info (Right Side) */}
        <div className="flex-1 px-8 space-y-8">
          <div className="space-y-6">
            <InfoItem label={t.fields.lastName} value={data.lastName} />
            <InfoItem label={t.fields.firstName} value={data.firstName} />
            <InfoItem label={t.fields.dateOfBirth} value={data.dateOfBirth} />
            <InfoItem label={t.fields.placeOfBirth} value={data.placeOfBirth} />
            <InfoItem label={t.fields.profession} value={data.profession} />
            <InfoItem label={t.fields.phone} value={data.phone} />
            <InfoItem label={t.fields.bloodType} value={data.bloodType} />
            <InfoItem label={t.fields.trainer} value="" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto pt-12 flex justify-between items-end">
        <div className="w-1/2">
          {/* Empty space for trainer/date if needed, but request says leave empty */}
        </div>
        <div className="w-1/2 text-left">
          <p className="mb-8 font-bold">{t.footer.datePlaceholder}</p>
          <div className="inline-block text-left">
            <p className="font-bold underline uppercase">{t.footer.signatureTitle}</p>
            <p className="font-bold uppercase">{t.footer.orgLine}</p>
            <p className="font-bold uppercase">{t.footer.locationLine}</p>
            <div className="h-32"></div> {/* Space for stamp and signature */}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline gap-4 border-b border-gray-200 pb-1">
    <span className="font-bold text-lg whitespace-nowrap">{label} :</span>
    <span className="text-lg flex-1 min-h-[1.5em]">{value}</span>
  </div>
);
