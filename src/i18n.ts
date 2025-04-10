import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  // Header
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",

  // Hero
  "hero.title": "Innovative Software Solutions",
  "hero.subtitle": "Transforming ideas into innovative software solutions.",
  "hero.cta": "Explore Our Services",

  // About
  "about.title": "About ACL-Smart Software",
 "about.paragraph1": "ACL-Smart Software company operates in Romania within the IT sector, focusing on the development of innovative software solutions and comprehensive IT services. The company integrates technical expertise with business insight to provide solutions that enhance growth and efficiency.",
  "about.paragraph2": "Offering a range of services, ACL-Smart Software addresses complex challenges through tailored software that meets and often exceeds client expectations. The company emphasizes an agile methodology, meticulous attention to detail, and a steadfast commitment to quality in all its offerings.",
  "about.mission.title": "Our Mission",
  "about.mission.text": "To empower businesses through innovative technology solutions that drive growth and efficiency.",
  "about.vision.title": "Our Vision",
  "about.vision.text": "To be the leading provider of custom software solutions that transform businesses in the digital age.",

  // Services
  "services.title": "Our Services",
  "services.subtitle": "ACL-Smart Software delivers a comprehensive range of IT services designed to empower businesses to excel in the digital age.",
  "services.software.title": "Software Development",
  "services.software.description": "Custom software development that transforms your business. We build scalable, secure solutions to streamline operations and drive growth.",
  "services.consulting.title": "Consulting and Architecture",
  "services.consulting.description": "Expert tech consulting to elevate your strategy. We guide system design and implementation for robust, future-proof solutions.",
  "services.mobile.title": "Mobile App Development",
  "services.mobile.description": "Innovative mobile app solutions tailored to your business needs. We deliver user-friendly and scalable apps for iOS and Android platforms.",
  "services.web.title": "Web Solutions",
  "services.web.description": "Build a powerful online presence with our web solutions. We create stunning, responsive websites that engage your audience.",

  // Footer
  "footer.company": "ACL-Smart Software",
  "footer.tagline": "Innovative software solutions for modern businesses.",
  "footer.address": "123 Tech Park, Innovation Street, Business District, 10001",
  "footer.phone": "+40 758 154 490",
  "footer.email": "office@acl-smartsoftware.tech",
  "footer.services": "Services",
  "footer.software": "Software Development",
  "footer.consulting": "Consulting & Architecture",
  "footer.mobile": "Mobile App Development",
  "footer.web": "Web Solutions",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy Policy",
  "footer.gdpr": "GDPR Compliance",
  "footer.anpc": "ANPC",
  "footer.copyright": "All rights reserved.",

  // WhatsApp Chat
  "chat.title": "Chat with us",
  "chat.placeholder": "Type your message here...",
  "chat.button": "Chat on WhatsApp",
  "chat.welcome.title": "Welcome to ACL-Smart Software!",
  "chat.welcome.message": "We are here for your digital needs. Click the chat icon to get in touch!",

  // Language Switcher
  "language.en": "English",
  "language.ro": "Romanian",

  // Privacy Policy
  "privacy.title": "Privacy Policy for ACL-Smart Software",
  "privacy.lastUpdated": "Last updated: 05.02.2025",
  "privacy.introduction.title": "Introduction",
  "privacy.introduction.text": "Welcome to ACL-Smart Software (\"we\", \"us\", or \"our\"). At ACL-Smart Software, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and protection of data when you use our services or visit our website.",
  "privacy.infoCollect.title": "Information We Collect",
  "privacy.infoCollect.personal.title": "Personal Information",
  "privacy.infoCollect.personal.intro": "We may collect the following types of personal information:",
  "privacy.infoCollect.personal.item1": "Name and contact details (e.g., email address, phone number, mailing address)",
  "privacy.infoCollect.personal.item2": "Business information (e.g., company name, job title)",
  "privacy.infoCollect.personal.item3": "Account credentials (e.g., username and password)",
  "privacy.infoCollect.personal.item4": "Payment information (e.g., credit card details, billing address)",
  "privacy.infoCollect.personal.item5": "Any other information you provide voluntarily",
  "privacy.infoCollect.automatic.title": "Automatically Collected Information",
  "privacy.infoCollect.automatic.intro": "When you visit our website or use our services, we may automatically collect:",
  "privacy.infoCollect.automatic.item1": "IP address and device identifiers",
  "privacy.infoCollect.automatic.item2": "Browser type and version",
  "privacy.infoCollect.automatic.item3": "Operating system",
  "privacy.infoCollect.automatic.item4": "Log data and usage statistics",
  "privacy.infoCollect.automatic.item5": "Cookies and similar tracking technologies",
  "privacy.infoUse.title": "How We Use Your Information",
  "privacy.infoUse.intro": "We use the collected information for various purposes, including:",
  "privacy.infoUse.item1": "Providing and improving our IT services and products",
  "privacy.infoUse.item2": "Customizing user experience",
  "privacy.infoUse.item3": "Processing transactions and managing accounts",
  "privacy.infoUse.item4": "Communicating with clients about services, updates, and support",
  "privacy.infoUse.item5": "Analyzing usage patterns to enhance our offerings",
  "privacy.infoUse.item6": "Ensuring the security and integrity of our systems",
  "privacy.infoUse.item7": "Complying with legal obligations",
  "privacy.dataSharing.title": "Data Sharing and Disclosure",
  "privacy.dataSharing.intro": "ACL-Smart Software may share your information with:",
  "privacy.dataSharing.item1": "Service providers and subcontractors who assist in our operations",
  "privacy.dataSharing.item2": "Payment processors for handling financial transactions",
  "privacy.dataSharing.item3": "Legal authorities when required by law or to protect our rights",
  "privacy.dataSharing.item4": "Business partners, with your consent, for specific collaborative projects",
  "privacy.dataSharing.note": "We do not sell your personal information to third parties.",
  "privacy.dataSecurity.title": "Data Security",
  "privacy.dataSecurity.intro": "We implement industry-standard security measures to protect your data, including:",
  "privacy.dataSecurity.item1": "Encryption of sensitive information",
  "privacy.dataSecurity.item2": "Regular security audits and vulnerability assessments",
  "privacy.dataSecurity.item3": "Access controls and authentication mechanisms",
  "privacy.dataSecurity.item4": "Employee training on data protection practices",
  "privacy.userRights.title": "Your Rights and Choices",
  "privacy.userRights.intro": "Depending on your location, you may have the right to:",
  "privacy.userRights.item1": "Access your personal information",
  "privacy.userRights.item2": "Correct inaccuracies in your data",
  "privacy.userRights.item3": "Request deletion of your data",
  "privacy.userRights.item4": "Object to certain data processing activities",
  "privacy.userRights.item5": "Opt-out of marketing communications",
  "privacy.userRights.note": "To exercise these rights, please contact us using the information provided below.",
  "privacy.cookies.title": "Cookies and Tracking Technologies",
  "privacy.cookies.text": "We use cookies and similar technologies to enhance user experience and collect usage data. You can manage your cookie preferences through your browser settings.",
  "privacy.changes.title": "Changes to This Privacy Policy",
  "privacy.changes.text": "We may update this Privacy Policy periodically. We will notify you of any significant changes by posting a prominent notice on our website or sending you a direct communication.",
  "privacy.contact.title": "Contact Us",
  "privacy.contact.text": "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
  "privacy.contact.company": "ACL-Smart Software",
  "privacy.contact.email": "Email",
  "privacy.contact.phone": "Phone",

  // GDPR Policy
  "gdpr.title": "GDPR Policy for ACL-Smart Software",
  "gdpr.lastUpdated": "Last updated: 05.02.2025",
  "gdpr.introduction.title": "Introduction",
  "gdpr.introduction.text": "This GDPR Policy outlines how ACL-Smart Software collects, processes, and protects personal data in compliance with the General Data Protection Regulation (GDPR). We are committed to safeguarding the privacy rights of our customers, employees, and partners.",
  "gdpr.dataCollection.title": "Data Collection and Processing",
  "gdpr.dataCollection.types.title": "Types of Personal Data Collected",
  "gdpr.dataCollection.types.intro": "ACL-Smart Software collects and processes the following types of personal data:",
  "gdpr.dataCollection.types.item1": "Names and contact information",
  "gdpr.dataCollection.types.item2": "Email addresses",
  "gdpr.dataCollection.types.item3": "IP addresses",
  "gdpr.dataCollection.types.item4": "Usage data related to our software products",
  "gdpr.dataCollection.types.item5": "Payment information",
  "gdpr.dataCollection.purpose.title": "Purpose of Data Collection",
  "gdpr.dataCollection.purpose.intro": "We collect and process personal data for the following purposes:",
  "gdpr.dataCollection.purpose.item1": "Providing and improving our software products and services",
  "gdpr.dataCollection.purpose.item2": "Customer support and communication",
  "gdpr.dataCollection.purpose.item3": "Processing transactions and payments",
  "gdpr.dataCollection.purpose.item4": "Analyzing usage patterns to enhance user experience",
  "gdpr.dataCollection.purpose.item5": "Complying with legal obligations",
  "gdpr.dataCollection.legal.title": "Legal Basis for Processing",
  "gdpr.dataCollection.legal.intro": "Our legal bases for processing personal data include:",
  "gdpr.dataCollection.legal.item1": "Consent from the data subject",
  "gdpr.dataCollection.legal.item2": "Contractual necessity",
  "gdpr.dataCollection.legal.item3": "Legitimate business interests",
  "gdpr.dataCollection.legal.item4": "Legal obligations",
  "gdpr.protection.title": "Data Protection Measures",
  "gdpr.protection.intro": "ACL-Smart Software implements appropriate technical and organizational measures to ensure the security of personal data, including:",
  "gdpr.protection.item1": "End-to-end encryption for data transmission and storage",
  "gdpr.protection.item2": "Regular security audits and vulnerability assessments",
  "gdpr.protection.item3": "Access controls and authentication mechanisms",
  "gdpr.protection.item4": "Employee training on data protection and security practices",
  "gdpr.rights.title": "Data Subject Rights",
  "gdpr.rights.intro": "Under GDPR, individuals have the following rights regarding their personal data:",
  "gdpr.rights.item1": "Right to access their personal data",
  "gdpr.rights.item2": "Right to rectification of inaccurate data",
  "gdpr.rights.item3": "Right to erasure (\"right to be forgotten\")",
  "gdpr.rights.item4": "Right to restrict processing",
  "gdpr.rights.item5": "Right to data portability",
  "gdpr.rights.item6": "Right to object to processing",
  "gdpr.rights.contact": "To exercise these rights, individuals can contact our Data Protection Officer at office@acl-smartsoftware.tech",
  "gdpr.retention.title": "Data Retention",
  "gdpr.retention.text": "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. Once the retention period expires, personal data is securely deleted or anonymized.",
  "gdpr.sharing.title": "Third-Party Data Sharing",
  "gdpr.sharing.text": "ACL-Smart Software may share personal data with trusted third-party service providers who assist us in operating our business and providing services to our customers. These third parties are contractually obligated to protect personal data in compliance with GDPR.",
  "gdpr.international.title": "International Data Transfers",
  "gdpr.international.text": "If personal data is transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions by the European Commission.",
  "gdpr.breach.title": "Data Breach Notification",
  "gdpr.breach.text": "In the event of a personal data breach, ACL-Smart Software will notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible. If the breach is likely to result in a high risk to the rights and freedoms of individuals, we will also notify the affected individuals without undue delay.",
  "gdpr.changes.title": "Changes to this Policy",
  "gdpr.changes.text": "We reserve the right to update this GDPR Policy as needed. Any changes will be communicated to our customers and partners through our website or email notifications.",
  "gdpr.contact.title": "Contact Information",
  "gdpr.contact.text": "For any questions or concerns regarding this GDPR Policy or our data protection practices, please contact:",
  "gdpr.contact.dpo": "Data Protection Officer",
  "gdpr.contact.company": "ACL-Smart Software",
  "gdpr.contact.email": "Email",
  "gdpr.contact.phone": "Phone"
};

// Romanian translations
const roTranslations = {
  // Header
  "nav.home": "Acasă",
  "nav.about": "Despre",
  "nav.services": "Servicii",

  // Hero
  "hero.title": "Soluții Software Inovatoare",
  "hero.subtitle": "Transformarea ideilor în soluții software inovatoare.",
  "hero.cta": "Explorează Serviciile Noastre",

  // About
  "about.title": "Despre ACL-Smart Software",
  "about.paragraph1": "Compania ACL-Smart Software operează în sectorul IT din România, concentrându-se pe dezvoltarea de soluții software inovatoare și servicii IT cuprinzătoare. Compania integrează expertiza tehnică cu perspectivele de afaceri pentru a oferi soluții care îmbunătățesc creșterea și eficiența.",
"about.paragraph2": "Oferind o gamă variată de servicii, ACL-Smart Software abordează provocările complexe prin software personalizat care răspunde și deseori depășește așteptările clienților. Compania pune accent pe o metodologie agilă, atenție meticuloasă la detalii și un angajament ferm față de calitate în toate ofertele sale.",
  "about.mission.title": "Misiunea Noastră",
  "about.mission.text": "Să capacităm afacerile prin soluții tehnologice inovatoare care stimulează creșterea și eficiența.",
  "about.vision.title": "Viziunea Noastră",
  "about.vision.text": "Să fim furnizorul principal de soluții software personalizate care transformă afacerile în era digitală.",

  // Services
  "services.title": "Serviciile Noastre",
  "services.subtitle": "ACL-Smart Software oferă o gamă completă de servicii IT concepute pentru a permite întreprinderilor să exceleze în era digitală.",
  "services.software.title": "Dezvoltare Software",
  "services.software.description": "Dezvoltare software personalizată care vă transformă afacerea. Construim soluții scalabile și sigure pentru a eficientiza operațiunile.",
  "services.consulting.title": "Consultanță și Arhitectură",
  "services.consulting.description": "Consultanță tehnică expertă pentru a vă ridica strategia. Ghidăm proiectarea și implementarea sistemelor pentru soluții robuste.",
  "services.mobile.title": "Dezvoltare Aplicații Mobile",
  "services.mobile.description": "Soluții inovatoare pentru aplicații mobile adaptate nevoilor afacerii dumneavoastră. Livrăm aplicații prietenoase și scalabile pentru platformele iOS și Android.",
  "services.web.title": "Soluții Web",
  "services.web.description": "Construiți o prezență online puternică cu soluțiile noastre web. Creăm site-uri web uimitoare și responsive care vă implică audiența.",

  // Footer
  "footer.company": "ACL-Smart Software",
  "footer.tagline": "Soluții software inovatoare pentru afaceri moderne.",
  "footer.address": "123 Tech Park, Strada Inovației, Cartierul de Afaceri, 10001",
  "footer.phone": "+40 758 154 490",
  "footer.email": "office@acl-smartsoftware.tech",
  "footer.services": "Servicii",
  "footer.software": "Dezvoltare Software",
  "footer.consulting": "Consultanță și Arhitectură",
  "footer.mobile": "Dezvoltare Aplicații Mobile",
  "footer.web": "Soluții Web",
  "footer.legal": "Legal",
  "footer.privacy": "Politica de Confidențialitate",
  "footer.gdpr": "Conformitate GDPR",
  "footer.anpc": "ANPC",
  "footer.copyright": "Toate drepturile rezervate.",

  // WhatsApp Chat
  "chat.title": "Discută cu noi",
  "chat.placeholder": "Scrie mesajul tău aici...",
  "chat.button": "Discută pe WhatsApp",
  "chat.welcome.title": "Bine ați venit la ACL-Smart Software!",
  "chat.welcome.message": "Suntem aici pentru nevoile dvs. digitale. Click pe iconița de chat pentru a lua legătura!",

  // Language Switcher
  "language.en": "Engleză",
  "language.ro": "Română",

  // Privacy Policy
  "privacy.title": "Politica de Confidențialitate pentru ACL-Smart Software",
  "privacy.lastUpdated": "Ultima actualizare: 05.02.2025",
  "privacy.introduction.title": "Introducere",
  "privacy.introduction.text": "Bine ați venit la ACL-Smart Software (\"noi\", \"nouă\" sau \"nostru\"). La ACL-Smart Software, ne angajăm să vă protejăm confidențialitatea și să asigurăm securitatea informațiilor dvs. personale. Această Politică de Confidențialitate descrie practicile noastre privind colectarea, utilizarea și protecția datelor atunci când utilizați serviciile noastre sau vizitați site-ul nostru web.",
  "privacy.infoCollect.title": "Informațiile pe care le colectăm",
  "privacy.infoCollect.personal.title": "Informații personale",
  "privacy.infoCollect.personal.intro": "Putem colecta următoarele tipuri de informații personale:",
  "privacy.infoCollect.personal.item1": "Nume și date de contact (de ex., adresă de email, număr de telefon, adresă poștală)",
  "privacy.infoCollect.personal.item2": "Informații de afaceri (de ex., numele companiei, titlul postului)",
  "privacy.infoCollect.personal.item3": "Credențiale de cont (de ex., nume de utilizator și parolă)",
  "privacy.infoCollect.personal.item4": "Informații de plată (de ex., detalii card de credit, adresă de facturare)",
  "privacy.infoCollect.personal.item5": "Orice alte informații pe care le furnizați voluntar",
  "privacy.infoCollect.automatic.title": "Informații colectate automat",
  "privacy.infoCollect.automatic.intro": "Când vizitați site-ul nostru web sau utilizați serviciile noastre, putem colecta automat:",
  "privacy.infoCollect.automatic.item1": "Adresa IP și identificatorii dispozitivului",
  "privacy.infoCollect.automatic.item2": "Tipul și versiunea browserului",
  "privacy.infoCollect.automatic.item3": "Sistemul de operare",
  "privacy.infoCollect.automatic.item4": "Date de jurnal și statistici de utilizare",
  "privacy.infoCollect.automatic.item5": "Cookie-uri și tehnologii similare de urmărire",
  "privacy.infoUse.title": "Cum utilizăm informațiile dvs.",
  "privacy.infoUse.intro": "Utilizăm informațiile colectate în diverse scopuri, inclusiv:",
  "privacy.infoUse.item1": "Furnizarea și îmbunătățirea serviciilor și produselor noastre IT",
  "privacy.infoUse.item2": "Personalizarea experienței utilizatorului",
  "privacy.infoUse.item3": "Procesarea tranzacțiilor și gestionarea conturilor",
  "privacy.infoUse.item4": "Comunicarea cu clienții despre servicii, actualizări și suport",
  "privacy.infoUse.item5": "Analizarea modelelor de utilizare pentru a ne îmbunătăți ofertele",
  "privacy.infoUse.item6": "Asigurarea securității și integrității sistemelor noastre",
  "privacy.infoUse.item7": "Respectarea obligațiilor legale",
  "privacy.dataSharing.title": "Partajarea și divulgarea datelor",
  "privacy.dataSharing.intro": "ACL-Smart Software poate partaja informațiile dvs. cu:",
  "privacy.dataSharing.item1": "Furnizori de servicii și subcontractanți care ne asistă în operațiunile noastre",
  "privacy.dataSharing.item2": "Procesatori de plăți pentru gestionarea tranzacțiilor financiare",
  "privacy.dataSharing.item3": "Autorități legale când este cerut de lege sau pentru a ne proteja drepturile",
  "privacy.dataSharing.item4": "Parteneri de afaceri, cu consimțământul dvs., pentru proiecte colaborative specifice",
  "privacy.dataSharing.note": "Nu vindem informațiile dvs. personale către terțe părți.",
  "privacy.dataSecurity.title": "Securitatea datelor",
  "privacy.dataSecurity.intro": "Implementăm măsuri de securitate standard în industrie pentru a vă proteja datele, inclusiv:",
  "privacy.dataSecurity.item1": "Criptarea informațiilor sensibile",
  "privacy.dataSecurity.item2": "Audituri de securitate regulate și evaluări de vulnerabilitate",
  "privacy.dataSecurity.item3": "Controale de acces și mecanisme de autentificare",
  "privacy.dataSecurity.item4": "Instruirea angajaților privind practicile de protecție a datelor",
  "privacy.userRights.title": "Drepturile și opțiunile dvs.",
  "privacy.userRights.intro": "În funcție de locația dvs., este posibil să aveți dreptul să:",
  "privacy.userRights.item1": "Accesați informațiile dvs. personale",
  "privacy.userRights.item2": "Corectați inexactitățile din datele dvs.",
  "privacy.userRights.item3": "Solicitați ștergerea datelor dvs.",
  "privacy.userRights.item4": "Obiectați la anumite activități de procesare a datelor",
  "privacy.userRights.item5": "Renunțați la comunicările de marketing",
  "privacy.userRights.note": "Pentru a exercita aceste drepturi, vă rugăm să ne contactați folosind informațiile furnizate mai jos.",
  "privacy.cookies.title": "Cookie-uri și tehnologii de urmărire",
  "privacy.cookies.text": "Utilizăm cookie-uri și tehnologii similare pentru a îmbunătăți experiența utilizatorului și a colecta date de utilizare. Puteți gestiona preferințele dvs. privind cookie-urile prin setările browserului dvs.",
  "privacy.changes.title": "Modificări ale acestei Politici de Confidențialitate",
  "privacy.changes.text": "Este posibil să actualizăm periodic această Politică de Confidențialitate. Vă vom notifica despre orice modificări semnificative prin postarea unui anunț vizibil pe site-ul nostru web sau prin trimiterea unei comunicări directe.",
  "privacy.contact.title": "Contactați-ne",
  "privacy.contact.text": "Dacă aveți întrebări, preocupări sau solicitări privind această Politică de Confidențialitate sau practicile noastre privind datele, vă rugăm să ne contactați la:",
  "privacy.contact.company": "ACL-Smart Software",
  "privacy.contact.email": "Email",
  "privacy.contact.phone": "Telefon",

  // GDPR Policy
  "gdpr.title": "Politica GDPR pentru ACL-Smart Software",
  "gdpr.lastUpdated": "Ultima actualizare: 05.02.2025",
  "gdpr.introduction.title": "Introducere",
  "gdpr.introduction.text": "Această Politică GDPR descrie modul în care ACL-Smart Software colectează, procesează și protejează datele personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR). Ne angajăm să protejăm drepturile de confidențialitate ale clienților, angajaților și partenerilor noștri.",
  "gdpr.dataCollection.title": "Colectarea și procesarea datelor",
  "gdpr.dataCollection.types.title": "Tipuri de date personale colectate",
  "gdpr.dataCollection.types.intro": "ACL-Smart Software colectează și procesează următoarele tipuri de date personale:",
  "gdpr.dataCollection.types.item1": "Nume și informații de contact",
  "gdpr.dataCollection.types.item2": "Adrese de email",
  "gdpr.dataCollection.types.item3": "Adrese IP",
  "gdpr.dataCollection.types.item4": "Date de utilizare legate de produsele noastre software",
  "gdpr.dataCollection.types.item5": "Informații de plată",
  "gdpr.dataCollection.purpose.title": "Scopul colectării datelor",
  "gdpr.dataCollection.purpose.intro": "Colectăm și procesăm date personale în următoarele scopuri:",
  "gdpr.dataCollection.purpose.item1": "Furnizarea și îmbunătățirea produselor și serviciilor noastre software",
  "gdpr.dataCollection.purpose.item2": "Suport pentru clienți și comunicare",
  "gdpr.dataCollection.purpose.item3": "Procesarea tranzacțiilor și plăților",
  "gdpr.dataCollection.purpose.item4": "Analizarea modelelor de utilizare pentru a îmbunătăți experiența utilizatorului",
  "gdpr.dataCollection.purpose.item5": "Respectarea obligațiilor legale",
  "gdpr.dataCollection.legal.title": "Baza legală pentru procesare",
  "gdpr.dataCollection.legal.intro": "Bazele noastre legale pentru procesarea datelor personale includ:",
  "gdpr.dataCollection.legal.item1": "Consimțământul persoanei vizate",
  "gdpr.dataCollection.legal.item2": "Necesitatea contractuală",
  "gdpr.dataCollection.legal.item3": "Interese legitime de afaceri",
  "gdpr.dataCollection.legal.item4": "Obligații legale",
  "gdpr.protection.title": "Măsuri de protecție a datelor",
  "gdpr.protection.intro": "ACL-Smart Software implementează măsuri tehnice și organizaționale adecvate pentru a asigura securitatea datelor personale, inclusiv:",
  "gdpr.protection.item1": "Criptare end-to-end pentru transmiterea și stocarea datelor",
  "gdpr.protection.item2": "Audituri de securitate regulate și evaluări de vulnerabilitate",
  "gdpr.protection.item3": "Controale de acces și mecanisme de autentificare",
  "gdpr.protection.item4": "Instruirea angajaților privind practicile de protecție și securitate a datelor",
  "gdpr.rights.title": "Drepturile persoanelor vizate",
  "gdpr.rights.intro": "În conformitate cu GDPR, persoanele au următoarele drepturi cu privire la datele lor personale:",
  "gdpr.rights.item1": "Dreptul de a accesa datele lor personale",
  "gdpr.rights.item2": "Dreptul la rectificarea datelor inexacte",
  "gdpr.rights.item3": "Dreptul la ștergere (\"dreptul de a fi uitat\")",
  "gdpr.rights.item4": "Dreptul de a restricționa procesarea",
  "gdpr.rights.item5": "Dreptul la portabilitatea datelor",
  "gdpr.rights.item6": "Dreptul de a obiecta la procesare",
  "gdpr.rights.contact": "Pentru a exercita aceste drepturi, persoanele pot contacta Ofițerul nostru pentru Protecția Datelor la office@acl-smartsoftware.tech",
  "gdpr.retention.title": "Păstrarea datelor",
  "gdpr.retention.text": "Păstrăm datele personale doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate sau conform cerințelor legale și reglementărilor aplicabile. Odată ce perioada de păstrare expiră, datele personale sunt șterse sau anonimizate în mod securizat.",
  "gdpr.sharing.title": "Partajarea datelor cu terțe părți",
  "gdpr.sharing.text": "ACL-Smart Software poate partaja date personale cu furnizori de servicii terți de încredere care ne asistă în operarea afacerii noastre și în furnizarea de servicii către clienții noștri. Aceste terțe părți sunt obligate contractual să protejeze datele personale în conformitate cu GDPR.",
  "gdpr.international.title": "Transferuri internaționale de date",
  "gdpr.international.text": "Dacă datele personale sunt transferate în afara Spațiului Economic European (SEE), ne asigurăm că sunt implementate garanții adecvate, cum ar fi Clauzele Contractuale Standard sau decizii de adecvare ale Comisiei Europene.",
  "gdpr.breach.title": "Notificarea încălcării datelor",
  "gdpr.breach.text": "În cazul unei încălcări a datelor personale, ACL-Smart Software va notifica autoritatea de supraveghere relevantă în termen de 72 de ore de la momentul în care a luat cunoștință de încălcare, acolo unde este posibil. Dacă încălcarea este susceptibilă să genereze un risc ridicat pentru drepturile și libertățile persoanelor, vom notifica, de asemenea, persoanele afectate fără întârzieri nejustificate.",
  "gdpr.changes.title": "Modificări ale acestei politici",
  "gdpr.changes.text": "Ne rezervăm dreptul de a actualiza această Politică GDPR după cum este necesar. Orice modificări vor fi comunicate clienților și partenerilor noștri prin intermediul site-ului nostru web sau prin notificări prin email.",
  "gdpr.contact.title": "Informații de contact",
  "gdpr.contact.text": "Pentru orice întrebări sau preocupări privind această Politică GDPR sau practicile noastre de protecție a datelor, vă rugăm să contactați:",
  "gdpr.contact.dpo": "Ofițerul pentru Protecția Datelor",
  "gdpr.contact.company": "ACL-Smart Software",
  "gdpr.contact.email": "Email",
  "gdpr.contact.phone": "Telefon"
};

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      ro: {
        translation: roTranslations
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;