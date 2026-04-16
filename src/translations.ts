export type Language = 'fr' | 'ar';

export interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  profession: string;
  phone: string;
  bloodType: string;
  photo: string | null;
}

export const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const translations = {
  fr: {
    selectLanguage: "Choisissez votre langue",
    french: "Français",
    arabic: "العربية",
    title: "CARTE D'INFORMATION",
    header: {
      org: "CROISSANT-ROUGE ALGÉRIEN",
      committee: "COMITÉ DE WILAYA",
      location: "SIDI BEL ABBÈS"
    },
    fields: {
      firstName: "Prénom",
      lastName: "Nom",
      dateOfBirth: "Date de naissance",
      placeOfBirth: "Lieu de naissance",
      profession: "Profession",
      phone: "N° de téléphone",
      bloodType: "Groupe sanguin",
      trainer: "Nom du formateur",
      photoUpload: "Télécharger une photo"
    },
    emptyFields: {
      trainer: "Nom du formateur",
      date: "Date",
      photo: "Photo"
    },
    footer: {
      datePlaceholder: "Date : .........................................",
      signatureTitle: "Signature du Président du Comité de Wilaya",
      orgLine: "Croissant-Rouge Algérien",
      locationLine: "Wilaya de Sidi Bel Abbès"
    },
    actions: {
      print: "Imprimer la carte",
      reset: "Réinitialiser",
      back: "Retour"
    }
  },
  ar: {
    selectLanguage: "اختر لغتك",
    french: "Français",
    arabic: "العربية",
    title: "بطاقة المعلومات",
    header: {
      org: "الهلال الأحمر الجزائري",
      committee: "اللجنة الولائية",
      location: "سيدي بلعباس"
    },
    fields: {
      firstName: "الاسم",
      lastName: "اللقب",
      dateOfBirth: "تاريخ الميلاد",
      placeOfBirth: "مكان الميلاد",
      profession: "المهنة",
      phone: "رقم الهاتف",
      bloodType: "فصيلة الدم",
      trainer: "اسم المكون",
      photoUpload: "تحميل الصورة الشخصية"
    },
    emptyFields: {
      trainer: "اسم المكون",
      date: "التاريخ",
      photo: "الصورة"
    },
    footer: {
      datePlaceholder: "التاريخ: .........................................",
      signatureTitle: "إمضاء رئيس اللجنة الولائية",
      orgLine: "الهلال الأحمر الجزائري",
      locationLine: "ولاية سيدي بلعباس"
    },
    actions: {
      print: "طباعة البطاقة",
      reset: "إعادة تعيين",
      back: "رجوع"
    }
  }
};
