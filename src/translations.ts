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
      back: "Retour",
      about: "À propos"
    },
    aboutPage: {
      title: "À propos de la plateforme",
      intro: "La carte d'information est un document organisationnel contenant les informations essentielles que le Croissant-Rouge Algérien doit disposer pour chaque personne inscrite aux formations de premiers secours.",
      goal: "Cette carte vise à faciliter l'organisation et à renforcer la coordination entre le Croissant-Rouge Algérien et les secouristes ou participants aux formations.",
      confidentiality: "Les données fournies sont traitées avec une confidentialité totale et une sécurité maximale. Après impression, la carte est remise au formateur responsable au début de la session de formation, puis conservée par l'entité compétente.",
      importanceTitle: "Importance des informations demandées",
      importanceDesc: "Les informations suivantes sont indispensables et doivent être saisies avec précision :",
      importanceList: [
        "Nom et prénom",
        "Numéro de téléphone",
        "Profession",
        "Groupe sanguin",
        "Photo personnelle"
      ],
      importanceFooter: "Ces données permettent d'améliorer l'organisation, la communication et le suivi des participants.",
      usageTitle: "Comment utiliser la plateforme",
      usageList: [
        "Choisir la langue appropriée",
        "Remplir les informations demandées",
        "Cliquer sur l'option d'impression",
        "Remettre la carte le premier jour de la formation"
      ],
      privacyTitle: "Confidentialité et protection des données",
      privacyDesc: "Les informations collectées sont utilisées uniquement à des fins organisationnelles et restent strictement confidentielles au sein du Croissant-Rouge Algérien.",
      realizationTitle: "Réalisation de la plateforme",
      realizationDesc: "Cette plateforme a été développée par le médecin volontaire",
      author: "SKAF Hisham Abd Almonem",
      realizationFooter: "Dans le cadre du soutien à l'action humanitaire et à la transformation numérique du Croissant-Rouge Algérien."
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
      back: "رجوع",
      about: "حول المنصة"
    },
    aboutPage: {
      title: "حول المنصة",
      intro: "بطاقة المعلومات هي وثيقة تنظيمية تحتوي على البيانات الأساسية والمهمة التي يجب أن تتوفر لدى الهلال الأحمر الجزائري عن كل شخص يقوم بالتسجيل في الدورات التكوينية للإسعافات الأولية.",
      goal: "تهدف هذه البطاقة إلى تسهيل الجوانب التنظيمية وتعزيز التكامل والتنسيق بين الهلال الأحمر الجزائري والمُسعفين والمتدربين خلال الدورات التكوينية.",
      confidentiality: "يتم التعامل مع البيانات المدرجة في بطاقة المعلومات بسرية تامة وبأعلى درجات الأمان، حيث يتم حفظها لدى الجهة المختصة بعد طباعتها وتسليمها للمكوّن المشرف عن الدورة التكوينية.",
      importanceTitle: "أهمية البيانات المدرجة",
      importanceDesc: "تُعد البيانات التالية ضرورية جداً ويجب توخي الدقة عند إدراجها:",
      importanceList: [
        "الاسم واللقب",
        "رقم الهاتف",
        "المهنة",
        "زمرة الدم",
        "الصورة الشخصية"
      ],
      importanceFooter: "تساعد هذه المعلومات في تحسين التنظيم والتواصل وضمان متابعة أفضل للمشاركين في الدورات التكوينية.",
      usageTitle: "كيفية استخدام المنصة",
      usageList: [
        "اختر اللغة المناسبة",
        "قم بإدراج البيانات المطلوبة",
        "اضغط على أمر الطباعة",
        "قم بتسليم بطاقة المعلومات في اليوم الأول من الدورة التكوينية"
      ],
      privacyTitle: "الخصوصية وحماية البيانات",
      privacyDesc: "يتم استخدام البيانات المقدمة لأغراض تنظيمية فقط، وتبقى محفوظة بسرية تامة لدى الهلال الأحمر الجزائري، ولا يتم مشاركتها خارج الإطار التنظيمي للدورات التكوينية.",
      realizationTitle: "تنفيذ المنصة",
      realizationDesc: "تم تنفيذ هذه المنصة من قبل الطبيب المتطوع",
      author: "الدكتور هشام عبد المنعم سكاف",
      realizationFooter: "في إطار دعم العمل التطوعي وتعزيز التحول الرقمي داخل الهلال الأحمر الجزائري."
    }
  }
};
