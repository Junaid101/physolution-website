export type Locale = 'en' | 'de';

export type HeroContent = { kicker: string; title: string[]; intro: string; since: string; cta: string };
export type ServiceItem = { title: string; description: string };
export type ServicesContent = { kicker: string; title: string[]; intro: string; items: ServiceItem[] };
export type HistoryItem = { year: string; description: string };
export type AboutContent = { historyLabel: string; kicker: string; title: string[]; paragraphs: string[]; history: HistoryItem[] };
export type DataModelCard = { step: string; title: string; description: string };
export type DataModelContent = { kicker: string; title: string[]; intro: string; cards: DataModelCard[] };
export type TechnologyPrinciple = { step: string; title: string; description: string };
export type TechnologyItem = { category: string; label: string };
export type TechnologyContent = { kicker: string; title: string[]; intro: string; principles: TechnologyPrinciple[]; items: TechnologyItem[] };
export type ContactPageContent = { kicker: string; title: string; lead: string; company: string; address: string[]; phone: string; email: string; directionsLabel: string };
export type ContactContent = { kicker: string; title: string[]; intro: string; cta: string };
export type FooterContent = { description: string; navigationLabel: string; legalLabel: string; locationLabel: string; directionsLabel: string; imprintLabel: string; privacyLabel: string; technologyLabel: string; company: string; address: string[]; contactLabel: string; email: string; phone: string; legal: { label: string; path: string }[] };
export type LegalBlock =
  | { type: 'text'; value: string }
  | { type: 'field'; label: string; value: string }
  | { type: 'link'; label: string; value: string; href: string };
export type ImpressumSection = { title: string; blocks: LegalBlock[] };
export type ImpressumContent = { kicker: string; title: string; lead: string; sections: ImpressumSection[] };
export type SiteContent = { nav: { services: string; about: string; dataModel: string }; contactLabel: string; hero: HeroContent; services: ServicesContent; about: AboutContent; model: DataModelContent; tech: TechnologyContent; impressum: ImpressumContent; contactPage: ContactPageContent; contact: ContactContent; footer: FooterContent; original: string; top: string; websiteLabel: string; statusLabel: string };
export const content = {
  de: {
    nav: { services: 'Leistungen', about: 'Über uns', dataModel: 'Datenmodell' },
    contactLabel: "Let's Talk",
    hero: {
      kicker: '01 / Wenn Stammdaten zum Problem werden',
      title: ['Datenchaos kostet', 'Zeit.', 'Fehler.', 'Vertrauen.'],
      intro:
        'Wenn Geschäftspartnerdaten in mehreren Systemen liegen, Dubletten entstehen und niemand sicher sagen kann, welche Daten stimmen, wird aus einer Datenfrage schnell ein Prozessproblem. PhySolution bringt Struktur in Stammdaten, Prozesse und Systeme.',
      since: 'SEIT 1996 · STAMMDATEN & PROZESSE',
      cta: '[ Problem verstehen ]',
    },
    services: {
      kicker: '02 / Leistungen',
      title: ['Weniger Reibung.', 'Mehr verlässliche Daten.'],
      intro:
        'Wir arbeiten dort, wo schlechte Stammdaten im Alltag spürbar werden: bei manuellen Prüfungen, doppelten Datensätzen, uneinheitlichen Informationen und Prozessen, die sich nicht sauber über Systeme hinweg abbilden lassen.',
      items: [
        { title: 'Geschäftspartner-Stammdaten', description: 'Eine verlässliche Datenbasis schaffen' },
        { title: 'Data Quality & MDM', description: 'Fehler erkennen und Qualität sichern' },
        { title: 'Matching & Golden Records', description: 'Dubletten zusammenführen' },
        { title: 'Stammdatenkonsolidierung', description: 'Verteilte Bestände vereinheitlichen' },
        { title: 'Data Governance', description: 'Regeln und Verantwortung verankern' },
        { title: 'ERP & Web Integration', description: 'Daten sauber in Prozesse bringen' },
        { title: 'Analytics & Reporting', description: 'Daten verständlich nutzbar machen' },
        { title: 'Identität & Risikodaten', description: 'Prüfungen und Entscheidungen unterstützen' },
      ],
    },
    about: {
      historyLabel: 'Erfahrung',
      kicker: '03 / Über uns',
      title: ['Nicht nur Daten', 'bereinigen.', 'Probleme lösen.'],
      paragraphs: [
        'Stammdatenprobleme sind selten nur ein technisches Problem. Sie entstehen an den Schnittstellen zwischen Fachbereich, Prozessen, Systemen und Verantwortlichkeiten.',
        'Seit 1996 verbindet PhySolution technische Beratung mit Projektmanagement. Wir betrachten nicht nur einzelne Datensätze, sondern den Prozess dahinter: Wo entstehen Fehler? Warum bleiben sie bestehen? Und was muss sich ändern, damit die Qualität dauerhaft erhalten bleibt?',
        'Unsere Erfahrung reicht von Technologie- und Wissensdatenbanken bis zur Beratung rund um Stammdaten-, Antrags- und Geschäftspartnerprozesse.',
        'Heute unterstützen wir Unternehmen dabei, Datenbestände zu verstehen, zu konsolidieren und in belastbare Prozesse zu überführen.',
      ],
      history: [
        { year: '1996', description: 'Gründung der PhySolution GmbH.' },
        { year: '1997', description: 'Technologie- und Experten-Datenbanken als frühe Datenprojekte.' },
        { year: 'Heute', description: 'Beratung und Umsetzung für Stammdaten und Geschäftspartnerdaten.' },
      ],
    },
    model: {
      kicker: '04 / Datenmodell',
      title: ['Vom Datenproblem', 'zum belastbaren Datensatz.'],
      intro:
        'Der entscheidende Schritt ist nicht, mehr Daten zu sammeln. Es geht darum, aus vorhandenen Daten eine eindeutige, geprüfte und nutzbare Grundlage für Geschäftsprozesse zu machen.',
      cards: [
        { step: '01 / VERSTEHEN', title: 'Datenquellen', description: 'Welche Systeme liefern Daten? Wo unterscheiden sich Strukturen, Formate und Verantwortlichkeiten?' },
        { step: '02 / BEREINIGEN', title: 'Data Quality', description: 'Fehler, fehlende Angaben und uneinheitliche Werte erkennen, Regeln definieren und Daten standardisieren.' },
        { step: '03 / ZUSAMMENFÜHREN', title: 'Matching', description: 'Dubletten und unterschiedliche Schreibweisen erkennen und zu belastbaren Golden Records verbinden.' },
        { step: '04 / VERANKERN', title: 'Governance', description: 'Prozesse, Verantwortlichkeiten und technische Regeln so aufsetzen, dass Qualität nicht wieder verloren geht.' },
      ],
    },
    tech: {
      kicker: '05 / Technologie',
      title: ['Technik muss', 'das Problem lösen.'],
      intro:
        'Wir starten nicht mit einem Tool, sondern mit dem konkreten Daten- und Prozessproblem. Bestehende Systeme werden eingebunden, Datenflüsse nachvollziehbar gemacht und technische Lösungen so aufgebaut, dass sie im Alltag betreibbar bleiben.',
      principles: [
        { step: '01', title: 'Bestehendes nutzen', description: 'ERP, Datenbanken und Websysteme gezielt verbinden, statt funktionierende Strukturen unnötig zu ersetzen.' },
        { step: '02', title: 'Qualität messbar machen', description: 'Validierung, Regeln und Matching schaffen nachvollziehbare Ergebnisse statt manueller Bauchentscheidungen.' },
        { step: '03', title: 'Für den Alltag bauen', description: 'Datenflüsse und Lösungen müssen verständlich, prüfbar und gemeinsam mit den Fachbereichen weiterentwickelbar sein.' },
      ],
      items: [
        { category: 'DATA', label: 'Master Data Management' },
        { category: 'QUALITY', label: 'Data Quality & Matching' },
        { category: 'ANALYTICS', label: 'Power BI & Analytics' },
        { category: 'DATABASE', label: 'MS-SQL & Datenbanken' },
        { category: 'INTEGRATION', label: 'ERP · Web · eCommerce' },
        { category: 'GOVERNANCE', label: 'Data Governance' },
      ],
    },
    impressum: {
      kicker: 'Legal / Impressum',
      title: 'Impressum',
      lead: 'Gesetzlich erforderliche Angaben zum Unternehmen, Betreiber dieser Website und zur rechtlichen Verantwortung der PhySolution GmbH.',
sections: [
        {
          title: 'Unternehmen / Betreiber',
          blocks: [
            { type: 'field', label: 'Unternehmen', value: 'PhySolution - Technische Unternehmensberatung und Projektmanagement GmbH' },
            { type: 'text', value: 'Ringstr. 11' },
            { type: 'text', value: '76356 Weingarten (Baden)' },
          ],
        },
        {
          title: 'Kontakt',
          blocks: [
            { type: 'link', label: 'Telefon', value: '+49 163 4283018', href: 'tel:+491634283018' },
            { type: 'link', label: 'E-Mail', value: 'info@physolution.com', href: 'mailto:info@physolution.com' },
            { type: 'link', label: 'Website', value: 'www.physolution.com', href: '/de/' },
          ],
        },
        {
          title: 'Handelsregister & Unternehmensform',
          blocks: [
            { type: 'text', value: 'Eingetragen im Handelsregister.' },
            { type: 'field', label: 'Registergericht', value: 'Amtsgericht Mannheim' },
            { type: 'field', label: 'Registernummer', value: 'HRB 719194' },
            { type: 'field', label: 'Rechtsform', value: 'Gesellschaft mit beschränkter Haftung (GmbH)' },
          ],
        },
        {
          title: 'Vertretungsberechtigung',
          blocks: [{ type: 'field', label: 'Geschäftsführer', value: 'Dr. Michael Speckmann' }],
        },
        {
          title: 'Umsatzsteuer-Identifikationsnummer',
          blocks: [
            { type: 'field', label: 'USt-IdNr.', value: 'DE177396297' },
            { type: 'field', label: 'St-Nr.', value: '34 416 17391' },
          ],
        },
        {
          title: 'Verantwortlich für den Inhalt',
          blocks: [
            { type: 'text', value: 'Verantwortlich für die Inhalte dieser Website ist die PhySolution GmbH, vertreten durch die jeweils vertretungsberechtigte Geschäftsführung.' },
          ],
        },
        {
          title: 'Streitbeilegung',
          blocks: [
            { type: 'text', value: 'Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Soweit gesetzlich vorgeschrieben, informieren wir über die zuständige Verbraucherschlichtungsstelle und unsere Teilnahmebereitschaft nach den jeweils geltenden gesetzlichen Bestimmungen.' },
          ],
        },
        {
          title: 'Haftung für Inhalte',
          blocks: [
            { type: 'text', value: 'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen gesetzlichen Vorschriften verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.' },
          ],
        },
        {
          title: 'Haftung für Links',
          blocks: [
            { type: 'text', value: 'Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss und übernehmen für diese externen Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Links nach Prüfung entfernen.' },
          ],
        },
        {
          title: 'Urheberrecht',
          blocks: [
            { type: 'text', value: 'Die durch die Betreiber dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers. Soweit Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.' },
          ],
        },
      ],
    },
    contactPage: {
      kicker: 'Kontakt / PhySolution',
      title: 'Kontakt',
      lead: 'Sie möchten über ein konkretes Daten-, Stammdaten- oder Prozessproblem sprechen? Sie erreichen uns direkt über die folgenden Kontaktdaten.',
      company: 'PhySolution - Technische Unternehmensberatung und Projektmanagement GmbH',
      address: ['Ringstr. 11', '76356 Weingarten (Baden)', 'Deutschland'],
      phone: '+49 163 4283018',
      email: 'info@physolution.com',
      directionsLabel: 'Anfahrt',
    },
    contact: {
      kicker: '06 / Kontakt',
      title: ['Wo verlieren Sie', 'heute Zeit', 'durch Daten?'],
      intro:
        'Dubletten, manuelle Prüfungen, widersprüchliche Geschäftspartnerdaten oder ein Prozess, der zwischen mehreren Systemen hängen bleibt? Beschreiben Sie uns die Situation. Wir sprechen über das Problem — nicht über eine Standardlösung.',
      cta: '[ Gespräch beginnen ]',
    },
    footer: {
      description:
        'Technische Beratung und Projektmanagement für verlässliche Stammdaten, klare Prozesse und belastbare Datenstrukturen.',
      navigationLabel: 'Navigation',
      legalLabel: 'Rechtliches',
      locationLabel: 'Standort',
      directionsLabel: 'Anfahrt',
      imprintLabel: 'Impressum',
      privacyLabel: 'Datenschutz',
      technologyLabel: 'Technologie',
      company: 'PHYSOLUTION GMBH',
      address: ['Ringstr. 11', '76356 Weingarten (Baden)', 'Deutschland'],
      contactLabel: "Let's Talk",
      email: 'info@physolution.com',
      phone: '+49 163 4283018',
      legal: [
        { label: 'Impressum', path: '/impressum/' },
        { label: 'Datenschutz', path: '/datenschutz/' },
      ],
    },
    original: 'ORIGINAL WEBSITE ↗',
    top: 'BACK TO TOP ↑',
    websiteLabel: 'Zur Website ↗',
    statusLabel: 'Stand: 2026',
  },
  en: {
    nav: { services: 'Services', about: 'About', dataModel: 'Data model' },
    contactLabel: "Let's Talk",
    hero: {
      kicker: '01 / When master data becomes a problem',
      title: ['Data chaos costs', 'time.', 'accuracy.', 'trust.'],
      intro:
        'When business partner data lives in multiple systems, duplicates accumulate and nobody can be sure which record is right, a data issue quickly becomes a process issue. PhySolution brings structure to master data, processes and systems.',
      since: 'SINCE 1996 · MASTER DATA & PROCESSES',
      cta: '[ Understand the problem ]',
    },
    services: {
      kicker: '02 / Services',
      title: ['Less friction.', 'More reliable data.'],
      intro:
        'We work where poor master data becomes visible in day-to-day operations: manual checks, duplicate records, inconsistent information and processes that do not move cleanly across systems.',
      items: [
        { title: 'Business partner master data', description: 'Create one reliable data foundation' },
        { title: 'Data Quality & MDM', description: 'Find errors and protect quality' },
        { title: 'Matching & Golden Records', description: 'Resolve duplicate records' },
        { title: 'Master data consolidation', description: 'Unify distributed data sets' },
        { title: 'Data Governance', description: 'Establish rules and ownership' },
        { title: 'ERP & Web Integration', description: 'Put data into the right processes' },
        { title: 'Analytics & Reporting', description: 'Make data useful for decisions' },
        { title: 'Identity & risk data', description: 'Support checks and decisions' },
      ],
    },
    about: {
      historyLabel: 'Experience',
      kicker: '03 / About',
      title: ['Do not just', 'clean the data.', 'Solve the problem.'],
      paragraphs: [
        'Master data problems are rarely just technical. They emerge at the interfaces between business teams, processes, systems and ownership.',
        'Since 1996, PhySolution has combined technical consulting with project management. We look beyond individual records to the process behind them: Where do errors originate? Why do they persist? And what needs to change so quality lasts?',
        'Our experience spans technology and knowledge databases as well as consulting around master data, application and business partner processes.',
        'Today, we help organisations understand, consolidate and turn distributed data into reliable operational processes.',
      ],
      history: [
        { year: '1996', description: 'PhySolution GmbH founded.' },
        { year: '1997', description: 'Early technology and expert database projects.' },
        { year: 'Today', description: 'Consulting and implementation for master and business partner data.' },
      ],
    },
    model: {
      kicker: '04 / Data model',
      title: ['From a data problem', 'to a trusted record.'],
      intro:
        'The goal is not to collect more data. It is to turn existing data into an accurate, consistent and usable foundation for business processes.',
      cards: [
        { step: '01 / UNDERSTAND', title: 'Data sources', description: 'Identify the systems involved and understand differences in structures, formats and ownership.' },
        { step: '02 / CLEAN', title: 'Data Quality', description: 'Find errors, missing values and inconsistencies, then define rules and standards for better data.' },
        { step: '03 / CONNECT', title: 'Matching', description: 'Identify duplicates and different representations of the same partner and connect them into reliable golden records.' },
        { step: '04 / SUSTAIN', title: 'Governance', description: 'Put processes, ownership and technical rules in place so data quality does not deteriorate again.' },
      ],
    },
    tech: {
      kicker: '05 / Technology',
      title: ['Technology should', 'solve the problem.'],
      intro:
        'We do not start with a tool. We start with the data and process problem. Existing systems are connected, data flows become traceable and technical solutions are built to remain practical to operate.',
      principles: [
        { step: '01', title: 'Use what works', description: 'Connect ERP, databases and web systems where they add value instead of replacing working structures unnecessarily.' },
        { step: '02', title: 'Make quality measurable', description: 'Validation, rules and matching create traceable results instead of manual guesswork.' },
        { step: '03', title: 'Build for real work', description: 'Data flows and solutions should remain understandable, auditable and adaptable with the business.' },
      ],
      items: [
        { category: 'DATA', label: 'Master Data Management' },
        { category: 'QUALITY', label: 'Data Quality & Matching' },
        { category: 'ANALYTICS', label: 'Power BI & Analytics' },
        { category: 'DATABASE', label: 'MS-SQL & Databases' },
        { category: 'INTEGRATION', label: 'ERP · Web · eCommerce' },
        { category: 'GOVERNANCE', label: 'Data Governance' },
      ],
    },
    impressum: {
      kicker: 'Legal / Imprint',
      title: 'Imprint',
      lead: 'Legally required company information, website operator details and information on the legal responsibility of PhySolution GmbH.',
sections: [
        {
          title: 'Company / Website operator',
          blocks: [
            { type: 'field', label: 'Company', value: 'PhySolution - Technische Unternehmensberatung und Projektmanagement GmbH' },
            { type: 'text', value: 'Ringstr. 11' },
            { type: 'text', value: '76356 Weingarten (Baden)' },
          ],
        },
        {
          title: 'Contact',
          blocks: [
            { type: 'link', label: 'Phone', value: '+49 163 4283018', href: 'tel:+491634283018' },
            { type: 'link', label: 'Email', value: 'info@physolution.com', href: 'mailto:info@physolution.com' },
            { type: 'link', label: 'Website', value: 'www.physolution.com', href: '/en/' },
          ],
        },
        {
          title: 'Commercial Register & Corporate Structure',
          blocks: [
            { type: 'text', value: 'Registered in the commercial register.' },
            { type: 'field', label: 'Register court', value: 'Mannheim Local Court (Amtsgericht Mannheim)' },
            { type: 'field', label: 'Registration number', value: 'HRB 719194' },
            { type: 'field', label: 'Legal form', value: 'German limited liability company (GmbH)' },
          ],
        },
        {
          title: 'Authorised representatives',
          blocks: [{ type: 'field', label: 'Managing director', value: 'Dr. Michael Speckmann' }],
        },
        {
          title: 'VAT identification number',
          blocks: [
            { type: 'field', label: 'VAT ID', value: 'DE177396297' },
            { type: 'field', label: 'Tax number', value: '34 416 17391' },
          ],
        },
        {
          title: 'Responsible for website content',
          blocks: [
            { type: 'text', value: 'The content of this website is the responsibility of PhySolution GmbH, represented by its authorised managing director(s).' },
          ],
        },
        {
          title: 'Dispute resolution',
          blocks: [
            { type: 'text', value: 'We are neither legally required nor generally willing to participate in dispute resolution proceedings before a consumer arbitration board. Where legally required, we provide the information on the competent consumer arbitration body and our willingness to participate in accordance with applicable law.' },
          ],
        },
        {
          title: 'Liability for content',
          blocks: [
            { type: 'text', value: 'As a service provider, we are responsible for our own content on these pages under general statutory law. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating unlawful activity. Statutory obligations to remove or block information remain unaffected.' },
          ],
        },
        {
          title: 'Liability for links',
          blocks: [
            { type: 'text', value: 'Our website may contain links to external third-party websites. We have no influence over their content and cannot accept liability for external content. The respective provider or operator is responsible for the content of linked pages. Upon becoming aware of legal infringements, we will review and remove affected links where appropriate.' },
          ],
        },
        {
          title: 'Copyright & intellectual property',
          blocks: [
            { type: 'text', value: 'Content and works created by the website operator are subject to German copyright law. Reproduction, processing, distribution or other exploitation beyond the limits of copyright law requires prior written consent from the respective rights holder. Third-party copyrights are respected where content was not created by the operator.' },
          ],
        },
      ],
    },
    contactPage: {
      kicker: 'Contact / PhySolution',
      title: 'Contact',
      lead: 'Would you like to discuss a specific data, master data or process challenge? You can reach us directly using the contact details below.',
      company: 'PhySolution - Technische Unternehmensberatung und Projektmanagement GmbH',
      address: ['Ringstr. 11', '76356 Weingarten (Baden)', 'Germany'],
      phone: '+49 163 4283018',
      email: 'info@physolution.com',
      directionsLabel: 'Directions',
    },
    contact: {
      kicker: '06 / Contact',
      title: ['Where is data', 'costing you time', 'today?'],
      intro:
        'Duplicates, manual checks, conflicting business partner data or a process stuck between systems? Tell us what is happening. We will talk about the problem — not a standard solution.',
      cta: '[ Start a conversation ]',
    },
    footer: {
      description:
        'Technical consulting and project management for reliable master data, clear processes and robust data structures.',
      navigationLabel: 'Navigation',
      legalLabel: 'Legal & compliance',
      locationLabel: 'Location',
      directionsLabel: 'Directions',
      imprintLabel: 'Imprint',
      privacyLabel: 'Privacy policy',
      technologyLabel: 'Technology',
      company: 'PHYSOLUTION GMBH',
      address: ['Ringstr. 11', '76356 Weingarten (Baden)', 'Germany'],
      contactLabel: 'CONTACT',
      email: 'info@physolution.com',
      phone: '+49 163 4283018',
      legal: [
        { label: 'Imprint', path: '/impressum/' },
        { label: 'Privacy policy', path: '/datenschutz/' },
      ],
    },
    original: 'ORIGINAL WEBSITE ↗',
    top: 'BACK TO TOP ↑',
    websiteLabel: 'Back to website ↗',
    statusLabel: 'Status: 2026',
  },
} satisfies Record<Locale, SiteContent>;

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
