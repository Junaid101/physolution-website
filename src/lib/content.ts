export type Locale = 'en' | 'de';
export const content = {
  de: {
    nav: ['Leistungen', 'Über uns', 'Datenmodell'],
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
        ['Geschäftspartner-Stammdaten', 'Eine verlässliche Datenbasis schaffen'],
        ['Data Quality & MDM', 'Fehler erkennen und Qualität sichern'],
        ['Matching & Golden Records', 'Dubletten zusammenführen'],
        ['Stammdatenkonsolidierung', 'Verteilte Bestände vereinheitlichen'],
        ['Data Governance', 'Regeln und Verantwortung verankern'],
        ['ERP & Web Integration', 'Daten sauber in Prozesse bringen'],
        ['Analytics & Reporting', 'Daten verständlich nutzbar machen'],
        ['Identität & Risikodaten', 'Prüfungen und Entscheidungen unterstützen'],
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
        ['1996', 'Gründung der PhySolution GmbH.'],
        ['1997', 'Technologie- und Experten-Datenbanken als frühe Datenprojekte.'],
        ['Heute', 'Beratung und Umsetzung für Stammdaten und Geschäftspartnerdaten.'],
      ],
    },
    model: {
      kicker: '04 / Datenmodell',
      title: ['Vom Datenproblem', 'zum belastbaren Datensatz.'],
      intro:
        'Der entscheidende Schritt ist nicht, mehr Daten zu sammeln. Es geht darum, aus vorhandenen Daten eine eindeutige, geprüfte und nutzbare Grundlage für Geschäftsprozesse zu machen.',
      cards: [
        [
          '01 / VERSTEHEN',
          'Datenquellen',
          'Welche Systeme liefern Daten? Wo unterscheiden sich Strukturen, Formate und Verantwortlichkeiten?',
        ],
        [
          '02 / BEREINIGEN',
          'Data Quality',
          'Fehler, fehlende Angaben und uneinheitliche Werte erkennen, Regeln definieren und Daten standardisieren.',
        ],
        [
          '03 / ZUSAMMENFÜHREN',
          'Matching',
          'Dubletten und unterschiedliche Schreibweisen erkennen und zu belastbaren Golden Records verbinden.',
        ],
        [
          '04 / VERANKERN',
          'Governance',
          'Prozesse, Verantwortlichkeiten und technische Regeln so aufsetzen, dass Qualität nicht wieder verloren geht.',
        ],
      ],
    },
    tech: {
      kicker: '05 / Technologie',
      title: ['Technik muss', 'das Problem lösen.'],
      intro:
        'Wir starten nicht mit einem Tool, sondern mit dem konkreten Daten- und Prozessproblem. Bestehende Systeme werden eingebunden, Datenflüsse nachvollziehbar gemacht und technische Lösungen so aufgebaut, dass sie im Alltag betreibbar bleiben.',
      principles: [
        [
          '01',
          'Bestehendes nutzen',
          'ERP, Datenbanken und Websysteme gezielt verbinden, statt funktionierende Strukturen unnötig zu ersetzen.',
        ],
        [
          '02',
          'Qualität messbar machen',
          'Validierung, Regeln und Matching schaffen nachvollziehbare Ergebnisse statt manueller Bauchentscheidungen.',
        ],
        [
          '03',
          'Für den Alltag bauen',
          'Datenflüsse und Lösungen müssen verständlich, prüfbar und gemeinsam mit den Fachbereichen weiterentwickelbar sein.',
        ],
      ],
      items: [
        ['DATA', 'Master Data Management'],
        ['QUALITY', 'Data Quality & Matching'],
        ['ANALYTICS', 'Power BI & Analytics'],
        ['DATABASE', 'MS-SQL & Datenbanken'],
        ['INTEGRATION', 'ERP · Web · eCommerce'],
        ['GOVERNANCE', 'Data Governance'],
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
        ['Vertretungsberechtigung', '<strong>Geschäftsführer:</strong> Dr. Michael Speckmann'],
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
        ['Impressum', '/impressum/'],
        ['Datenschutz', '/datenschutz/'],
      ],
    },
    original: 'ORIGINAL WEBSITE ↗',
    top: 'BACK TO TOP ↑',
    websiteLabel: 'Zur Website ↗',
    statusLabel: 'Stand: 2026',
  },
  en: {
    nav: ['Services', 'About', 'Data model'],
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
        ['Business partner master data', 'Create one reliable data foundation'],
        ['Data Quality & MDM', 'Find errors and protect quality'],
        ['Matching & Golden Records', 'Resolve duplicate records'],
        ['Master data consolidation', 'Unify distributed data sets'],
        ['Data Governance', 'Establish rules and ownership'],
        ['ERP & Web Integration', 'Put data into the right processes'],
        ['Analytics & Reporting', 'Make data useful for decisions'],
        ['Identity & risk data', 'Support checks and decisions'],
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
        ['1996', 'PhySolution GmbH founded.'],
        ['1997', 'Early technology and expert database projects.'],
        ['Today', 'Consulting and implementation for master and business partner data.'],
      ],
    },
    model: {
      kicker: '04 / Data model',
      title: ['From a data problem', 'to a trusted record.'],
      intro:
        'The goal is not to collect more data. It is to turn existing data into an accurate, consistent and usable foundation for business processes.',
      cards: [
        [
          '01 / UNDERSTAND',
          'Data sources',
          'Identify the systems involved and understand differences in structures, formats and ownership.',
        ],
        [
          '02 / CLEAN',
          'Data Quality',
          'Find errors, missing values and inconsistencies, then define rules and standards for better data.',
        ],
        [
          '03 / CONNECT',
          'Matching',
          'Identify duplicates and different representations of the same partner and connect them into reliable golden records.',
        ],
        [
          '04 / SUSTAIN',
          'Governance',
          'Put processes, ownership and technical rules in place so data quality does not deteriorate again.',
        ],
      ],
    },
    tech: {
      kicker: '05 / Technology',
      title: ['Technology should', 'solve the problem.'],
      intro:
        'We do not start with a tool. We start with the data and process problem. Existing systems are connected, data flows become traceable and technical solutions are built to remain practical to operate.',
      principles: [
        [
          '01',
          'Use what works',
          'Connect ERP, databases and web systems where they add value instead of replacing working structures unnecessarily.',
        ],
        [
          '02',
          'Make quality measurable',
          'Validation, rules and matching create traceable results instead of manual guesswork.',
        ],
        [
          '03',
          'Build for real work',
          'Data flows and solutions should remain understandable, auditable and adaptable with the business.',
        ],
      ],
      items: [
        ['DATA', 'Master Data Management'],
        ['QUALITY', 'Data Quality & Matching'],
        ['ANALYTICS', 'Power BI & Analytics'],
        ['DATABASE', 'MS-SQL & Databases'],
        ['INTEGRATION', 'ERP · Web · eCommerce'],
        ['GOVERNANCE', 'Data Governance'],
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
        ['Authorised representatives', '<strong>Managing director:</strong> Dr. Michael Speckmann'],
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
        ['Imprint', '/impressum/'],
        ['Privacy policy', '/datenschutz/'],
      ],
    },
    original: 'ORIGINAL WEBSITE ↗',
    top: 'BACK TO TOP ↑',
    websiteLabel: 'Back to website ↗',
    statusLabel: 'Status: 2026',
  },
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}
