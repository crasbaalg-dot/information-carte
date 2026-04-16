import React from 'react';
import { FormData, Language, translations, bloodTypes } from '../translations';
import { User, Calendar, MapPin, Briefcase, Phone, Droplets, Printer, RotateCcw, Camera, GraduationCap } from 'lucide-react';

interface InfoFormProps {
  data: FormData;
  onChange: (data: FormData) => void;
  onPrint: () => void;
  onReset: () => void;
  lang: Language;
}

export const InfoForm: React.FC<InfoFormProps> = ({ data, onChange, onPrint, onReset, lang }) => {
  const t = translations[lang];
  const isAr = lang === 'ar';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6" style={{ direction: isAr ? 'rtl' : 'ltr' }}>
      <div className="grid grid-cols-1 gap-4">
        {/* Photo Upload */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-gray-700 block px-1">
            {t.fields.photoUpload}
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="w-full flex items-center gap-3 px-4 py-3 bg-white border-2 border-dashed border-gray-200 rounded-xl hover:border-[#ED1C24] hover:bg-red-50 cursor-pointer transition-all text-gray-500 font-medium"
            >
              <Camera className="w-5 h-5 text-gray-400" />
              <span className="truncate">{data.photo ? (isAr ? "تم اختيار صورة" : "Photo sélectionnée") : t.fields.photoUpload}</span>
            </label>
          </div>
        </div>

        <InputGroup 
          label={t.fields.lastName} 
          name="lastName" 
          value={data.lastName} 
          onChange={handleChange} 
          icon={<User className="w-4 h-4" />} 
        />
        <InputGroup 
          label={t.fields.firstName} 
          name="firstName" 
          value={data.firstName} 
          onChange={handleChange} 
          icon={<User className="w-4 h-4" />} 
        />
        <InputGroup 
          label={t.fields.dateOfBirth} 
          name="dateOfBirth" 
          value={data.dateOfBirth} 
          onChange={handleChange} 
          icon={<Calendar className="w-4 h-4" />} 
          type="date"
        />
        <InputGroup 
          label={t.fields.placeOfBirth} 
          name="placeOfBirth" 
          value={data.placeOfBirth} 
          onChange={handleChange} 
          icon={<MapPin className="w-4 h-4" />} 
        />
        <InputGroup 
          label={t.fields.profession} 
          name="profession" 
          value={data.profession} 
          onChange={handleChange} 
          icon={<Briefcase className="w-4 h-4" />} 
        />
        <InputGroup 
          label={t.fields.phone} 
          name="phone" 
          value={data.phone} 
          onChange={handleChange} 
          icon={<Phone className="w-4 h-4" />} 
          type="tel"
        />
        
        {/* Blood Type Dropdown */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-gray-700 block px-1">
            {t.fields.bloodType}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Droplets className="w-4 h-4" />
            </div>
            <select
              name="bloodType"
              value={data.bloodType}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-100 rounded-xl focus:border-[#ED1C24] focus:ring-4 focus:ring-red-50 outline-none transition-all text-gray-900 font-medium appearance-none"
            >
              <option value="">--</option>
              {bloodTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Read-only Trainer Field */}
        <div className="space-y-1.5 opacity-60">
          <label className="text-sm font-bold text-gray-700 block px-1">
            {t.fields.trainer}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <input
              type="text"
              readOnly
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl outline-none cursor-not-allowed text-gray-400 font-medium"
              placeholder="..."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <button
          onClick={onPrint}
          className="flex items-center justify-center gap-2 bg-[#ED1C24] text-white py-4 px-6 rounded-xl font-bold hover:bg-red-700 active:scale-[0.98] transition-all shadow-lg shadow-red-200"
        >
          <Printer className="w-5 h-5" />
          {t.actions.print}
        </button>
        
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 bg-gray-100 text-gray-600 py-4 px-6 rounded-xl font-bold hover:bg-gray-200 active:scale-[0.98] transition-all"
        >
          <RotateCcw className="w-5 h-5" />
          {t.actions.reset}
        </button>
      </div>
    </div>
  );
};

interface InputGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  type?: string;
}

const InputGroup = ({ label, name, value, onChange, icon, type = "text" }: InputGroupProps) => (
  <div className="space-y-1.5">
    <label className="text-sm font-bold text-gray-700 block px-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-100 rounded-xl focus:border-[#ED1C24] focus:ring-4 focus:ring-red-50 outline-none transition-all text-gray-900 font-medium"
        placeholder="..."
      />
    </div>
  </div>
);
