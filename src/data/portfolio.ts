export interface SkillCategory {
  id: 'systemes' | 'conteneurisation' | 'cloud' | 'developpement' | 'outils';
  label: string;
  summary: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  context: string;
  shortDescription: string;
  stack: string[];
  details: string[];
  environment: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ProfileData {
  fullName: string;
  headline: string;
  subHeadline: string;
  photoUrl: string;
  cvUrl: string;
  cvDownloadFilename: string;
  linkedinUrl: string;
  linkedinDisplay: string;
  about: {
    lead: string;
    paragraphs: string[];
    facts: Array<{ label: string; value: string }>;
  };
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    location: string;
  };
}

export const PORTFOLIO_DATA: ProfileData = {
  fullName: 'Sami Djeffal',
  headline: 'Stagiaire Ingénieur DevOps | Administration systèmes Linux | Infrastructure',
  subHeadline:
    "Étudiant en 4e année Expert DevOps à l'EPSI Lyon, titulaire d'un Master 2 en génie logiciel. Disponible immédiatement pour un stage conventionné de 2 à 6 mois à Lyon et dans sa métropole.",
  photoUrl: '/assets/aistudio/photo_cv_fe6d44b3.jpg',
  cvUrl: '/assets/aistudio/CV_Sami_DJEFFAL_DevOps_Junior_v30_926e35c7.pdf',
  cvDownloadFilename: 'CV_Sami_Djeffal_DevOps.pdf',
  linkedinUrl: 'https://www.linkedin.com/in/djeffal-sami-89312b448/',
  linkedinDisplay: 'linkedin.com/in/djeffal-sami-89312b448',
  about: {
    lead: "Étudiant en 4e année de la formation Expert DevOps à l'EPSI Lyon, titulaire d'un Master 2 en génie logiciel.",
    paragraphs: [
      "Recherche un stage conventionné de 2 à 6 mois à Lyon et dans sa métropole, avec une disponibilité immédiate (novembre 2026 - septembre 2027).",
      "Mon double cursus en génie logiciel et en ingénierie DevOps me permet d'intervenir aussi bien sur l'automatisation des déploiements, la conteneurisation et le durcissement de serveurs Linux que sur le développement d'applications web complètes."
    ],
    facts: [
      { label: 'Formation', value: '4e année Expert DevOps · EPSI Lyon' },
      { label: 'Diplôme', value: 'Master 2 en génie logiciel' },
      { label: 'Contrat recherché', value: 'Stage conventionné (2 à 6 mois)' },
      { label: 'Disponibilité', value: 'Novembre 2026 – Septembre 2027' },
    ],
  },
  skillCategories: [
    {
      id: 'systemes',
      label: 'Systèmes',
      summary: 'Administration, scripting et sécurisation de serveurs',
      items: ['Linux / Ubuntu', 'Bash', 'Configuration de VPS (SSH, UFW)'],
    },
    {
      id: 'conteneurisation',
      label: 'Conteneurisation',
      summary: 'Isolation applicative, orchestration locale et persistance',
      items: ['Docker', 'Docker Compose', 'Volumes et réseaux'],
    },
    {
      id: 'cloud',
      label: 'Cloud & IaC',
      summary: "Provisionnement d'infrastructure et environnements cloud",
      items: ['Terraform', 'AWS', 'Azure'],
    },
    {
      id: 'developpement',
      label: 'Développement',
      summary: 'Conception full-stack et bases de données relationnelles',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'PHP',
        'Java',
        'MySQL',
        'PostgreSQL',
      ],
    },
    {
      id: 'outils',
      label: 'Outils & CI/CD',
      summary: 'Gestion de versions et pipelines d’intégration continue',
      items: ['Git', 'GitHub', 'GitLab', 'GitLab CI', 'GitHub Actions'],
    },
  ],
  projects: [
    {
      id: 'hyperledger-fabric',
      title: 'Plateforme privée Hyperledger Fabric',
      context: 'Mémoire Master 2',
      shortDescription:
        'Déploiement Docker sous Linux, Next.js, intégration LLM.',
      stack: ['Docker', 'Linux', 'Hyperledger Fabric', 'Next.js', 'LLM'],
      environment: 'Architecture conteneurisée sous Linux',
      details: [
        "Déploiement d'un réseau blockchain permissionné Hyperledger Fabric conteneurisé via Docker sous environnement Linux.",
        "Développement de l'interface web d'administration et de consultation avec Next.js.",
        "Intégration d'un modèle de langage (LLM) pour l'assistance à l'analyse et à l'interaction avec la plateforme.",
      ],
    },
    {
      id: 'ecommerce-vps',
      title: 'Application e-commerce personnelle',
      context: 'Projet personnel',
      shortDescription:
        'React, Node.js, MySQL, déployée sur VPS Ubuntu avec UFW.',
      stack: ['React', 'Node.js', 'MySQL', 'Ubuntu VPS', 'SSH', 'UFW'],
      environment: 'Hébergement VPS Ubuntu auto-administré',
      details: [
        'Conception complète du front-end en React et de l’API back-end en Node.js connectée à une base de données MySQL.',
        'Provisionnement et administration complète sur un VPS Ubuntu : accès sécurisé par clés SSH et filtrage réseau via pare-feu UFW.',
        'Mise en production autonome avec gestion des processus et persistance des données.',
      ],
    },
    {
      id: 'ecommerce-equipe',
      title: 'E-commerce en équipe',
      context: 'Projet collaboratif',
      shortDescription: 'Front-end React, back-end PHP et MySQL.',
      stack: ['React', 'PHP', 'MySQL', 'Git'],
      environment: 'Développement collaboratif full-stack',
      details: [
        "Développement de l'interface client réactive avec React en coordination avec l'équipe.",
        'Architecture back-end en PHP et modélisation relationnelle sous MySQL.',
        'Travail en équipe structuré autour de Git pour le suivi des fonctionnalités et la revue de code.',
      ],
    },
  ],
  experiences: [
    {
      id: 'sonatrach',
      period: '2024, 2025–2026',
      role: 'Stages',
      company: 'Sonatrach',
      location: 'Algérie',
      description: 'Service administration réseau, requêtes SOAP.',
      highlights: [
        'Immersion au sein du service administration réseau sur deux périodes distinctes (2024 et 2025–2026).',
        "Manipulation et intégration de requêtes SOAP dans le cadre des échanges inter-applicatifs.",
        "Contribution à l'exploitation quotidienne et à la compréhension des architectures réseau d'entreprise.",
      ],
    },
    {
      id: 'algerie-telecom',
      period: '2024',
      role: 'Stage',
      company: 'Algérie Télécom',
      location: 'Algérie',
      description: 'Service réseau.',
      highlights: [
        "Observation et participation aux opérations du service réseau d'un opérateur télécom national.",
        "Approfondissement pratique des concepts de routage, connectivité et maintenance d'infrastructure.",
      ],
    },
  ],
  contact: {
    email: 'samidjeffal2020@gmail.com',
    phone: '+33 7 45 93 00 70',
    phoneHref: 'tel:+33745930070',
    location: 'Lyon (69) et métropole',
  },
};
