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
export type ImpressumSection = { title: string; html: string };
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
      title: { category: 'Weniger Reibung.', label: 'Mehr verlässliche Daten.' },
      intro:
        'Wir arbeiten dort, wo schlechte Stammdaten im Alltag spürbar werden: bei manuellen Prüfungen, doppelten Datensätzen, uneinheitlichen Informationen und Prozessen, die sich nicht sauber über Systeme hinweg abbilden lassen.',
      items: [
        { title: 'Geschäftspartner-Stammdaten', description: 'Eine verlässliche Datenbasis schaffen' },
        { category: 'Data Quality & MDM', label: 'Fehler erkennen und Qualität sichern' },
        { category: 'Matching & Golden Records', label: 'Dubletten zusammenführen' },
        { category: 'Stammdatenkonsolidierung', label: 'Verteilte Bestände vereinheitlichen' },
        { category: 'Data Governance', label: 'Regeln und Verantwortung verankern' },
        { category: 'ERP & Web Integration', label: 'Daten sauber in Prozesse bringen' },
        { category: 'Analytics & Reporting', label: 'Daten verständlich nutzbar machen' },
        { category: 'Identität & Risikodaten', label: 'Prüfungen und Entscheidungen unterstützen' },
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
        { category: '1997', label: 'Technologie- und Experten-Datenbanken als frühe Datenprojekte.' },
        { category: 'Heute', label: 'Beratung und Umsetzung für Stammdaten und Geschäftspartnerdaten.' },
      ],
    },
    model: {
      kicker: '04 / Datenmodell',
      title: { category: 'Vom Datenproblem', label: 'zum belastbaren Datensatz.' },
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
      title: { category: 'Technik muss', label: 'das Problem lösen.' },
      intro:
        'Wir starten nicht mit einem Tool, sondern mit dem konkreten Daten- und Prozessproblem. Bestehende Systeme werden eingebunden, Datenflüsse nachvollziehbar gemacht und technische Lösungen so aufgebaut, dass sie im Alltag betreibbar bleiben.',
      principles: [
        { step: '01', title: 'Bestehendes nutzen', description: 'ERP, Datenbanken und Websysteme gezielt verbinden, statt funktionierende Strukturen unnötig zu ersetzen.' },
        { step: '02', title: 'Qualität messbar machen', description: 'Validierung, Regeln und Matching schaffen nachvollziehbare Ergebnisse statt manueller Bauchentscheidungen.' },
        { step: '03', title: 'Für den Alltag bauen', description: 'Datenflüsse und Lösungen müssen verständlich, prüfbar und gemeinsam mit den Fachbereichen weiterentwickelbar sein.' },
      ],
      items: [
        { title: 'DATA', description: 'Master Data Management' },
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
        [
          'Unternehmen / Betreiber',
          '<strong>PhySolution - Technische Unternehmensberatung und Projektmanagement GmbH</strong><br>Ringstr. 11<br>76356 Weingarten (Baden)',
        ],
        [
          'Kontakt',
          '<strong>Telefon:</strong> <a href="tel:+491634283018">+49 163 4283018</a><br><strong>E-Mail:</strong> <a href="mailto:info@physolution.com">info@physolution.com</a><br><strong>Website:</strong> <a href="/de/">www.physolution.com</a>',
        ],
        [
          'Handelsregister & Unternehmensform',
          'Eingetragen im Handelsregister.<br><strong>Registergericht:</strong> Amtsgericht Mannheim<br><strong>Registernummer:</strong> HRB 719194<br><strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung (GmbH)',
        ],
        { category: 'Vertretungsberechtigung', label: '<strong>Geschäftsführer:</strong> Dr. Michael Speckmann' },
        [
          'Umsatzsteuer-Identifikationsnummer',
          '<strong>USt-IdNr.:</strong> DE177396297<br><strong>St-Nr.:</strong> 34 416 17391',
        ],
        [
          'Verantwortlich für den Inhalt',
          'Verantwortlich für die Inhalte dieser Website ist die PhySolution GmbH, vertreten durch die jeweils vertretungsberechtigte Geschäftsführung.',
        ],
        [
          'Streitbeilegung',
          'Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Soweit gesetzlich vorgeschrieben, informieren wir über die zuständige Verbraucherschlichtungsstelle und unsere Teilnahmebereitschaft nach den jeweils geltenden gesetzlichen Bestimmungen.',
        ],
        [
          'Haftung für Inhalte',
          'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen gesetzlichen Vorschriften verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.',
        ],
        [
          'Haftung für Links',
          'Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss und übernehmen für diese externen Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende Links nach Prüfung entfernen.',
        ],
        [
          'Urheberrecht',
          'Die durch die Betreiber dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers. Soweit Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.',
        ],
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
        { category: 'Impressum', label: '/impressum/' },
        { category: 'Datenschutz', label: '/datenschutz/' },
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
      title: { category: 'Less friction.', label: 'More reliable data.' },
      intro:
        'We work where poor master data becomes visible in day-to-day operations: manual checks, duplicate records, inconsistent information and processes that do not move cleanly across systems.',
      items: [
        { title: 'Business partner master data', description: 'Create one reliable data foundation' },
        { category: 'Data Quality & MDM', label: 'Find errors and protect quality' },
        { category: 'Matching & Golden Records', label: 'Resolve duplicate records' },
        { category: 'Master data consolidation', label: 'Unify distributed data sets' },
        { category: 'Data Governance', label: 'Establish rules and ownership' },
        { category: 'ERP & Web Integration', label: 'Put data into the right processes' },
        { category: 'Analytics & Reporting', label: 'Make data useful for decisions' },
        { category: 'Identity & risk data', label: 'Support checks and decisions' },
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
        { category: '1997', label: 'Early technology and expert database projects.' },
        { category: 'Today', label: 'Consulting and implementation for master and business partner data.' },
      ],
    },
    model: {
      kicker: '04 / Data model',
      title: { category: 'From a data problem', label: 'to a trusted record.' },
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
      title: { category: 'Technology should', label: 'solve the problem.' },
      intro:
        'We do not start with a tool. We start with the data and process problem. Existing systems are connected, data flows become traceable and technical solutions are built to remain practical to operate.',
      principles: [
        { step: '01', title: 'Use what works', description: 'Connect ERP, databases and web systems where they add value instead of replacing working structures unnecessarily.' },
        { step: '02', title: 'Make quality measurable', description: 'Validation, rules and matching create traceable results instead of manual guesswork.' },
        { step: '03', title: 'Build for real work', description: 'Data flows and solutions should remain understandable, auditable and adaptable with the business.' },
      ],
      items: [
        { title: 'DATA', description: 'Master Data Management' },
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
        [
          'Company / Website operator',
          '<strong>PhySolution - Technische Unternehmensberatung und Projektmanagement GmbH</strong><br>Ringstr. 11<br>76356 Weingarten (Baden)',
        ],
        [
          'Contact',
          '<strong>Phone:</strong> <a href="tel:+491634283018">+49 163 4283018</a><br><strong>Email:</strong> <a href="mailto:info@physolution.com">info@physolution.com</a><br><strong>Website:</strong> <a href="/en/">www.physolution.com</a>',
        ],
        [
          'Commercial Register & Corporate Structure',
          'Registered in the commercial register.<br><strong>Register court:</strong> Mannheim Local Court (Amtsgericht Mannheim)<br><strong>Registration number:</strong> HRB 719194<br><strong>Legal form:</strong> German limited liability company (GmbH)',
        ],
        { category: 'Authorised representatives', label: '<strong>Managing director:</strong> Dr. Michael Speckmann' },
        [
          'VAT identification number',
          '<strong>VAT ID:</strong> DE177396297<br><strong>Tax number:</strong> 34 416 17391',
        ],
        [
          'Responsible for website content',
          'The content of this website is the responsibility of PhySolution GmbH, represented by its authorised managing director(s).',
        ],
        [
          'Dispute resolution',
          'We are neither legally required nor generally willing to participate in dispute resolution proceedings before a consumer arbitration board. Where legally required, we provide the information on the competent consumer arbitration body and our willingness to participate in accordance with applicable law.',
        ],
        [
          'Liability for content',
          'As a service provider, we are responsible for our own content on these pages under general statutory law. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating unlawful activity. Statutory obligations to remove or block information remain unaffected.',
        ],
        [
          'Liability for links',
          'Our website may contain links to external third-party websites. We have no influence over their content and cannot accept liability for external content. The respective provider or operator is responsible for the content of linked pages. Upon becoming aware of legal infringements, we will review and remove affected links where appropriate.',
        ],
        [
          'Copyright & intellectual property',
          'Content and works created by the website operator are subject to German copyright law. Reproduction, processing, distribution or other exploitation beyond the limits of copyright law requires prior written consent from the respective rights holder. Third-party copyrights are respected where content was not created by the operator.',
        ],
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
        { category: 'Imprint', label: '/impressum/' },
        { category: 'Privacy policy', label: '/datenschutz/' },
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
