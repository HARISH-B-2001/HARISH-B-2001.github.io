const CONFIG = {
  github: {
    username: 'HARISH-B-2001', // Your GitHub org/user name.
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 14, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['HARISH-B-2001/HARISH-B-2001'], // Exclude specific projects here if needed.
        },
      },
      manual: {
        projects: [], // Leave empty if using automatic mode.
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Phytosense: Medicinal Plant Leaf Recognition Android App Using ML',
          description:
            'A machine-learning-powered Android app designed for instant recognition of medicinal plant leaves, promoting safe herbal remedies through image analysis.',
          imageUrl:
            'https://github.com/HARISH-B-2001/HARISH-B-2001.github.io/blob/main/src/assets/leaf_logo.png?raw=true',
          link: 'https://github.com/HARISH-B-2001/Medicinal-Leaf-Classification--Android--main', // Replace with actual project link if available.
        },
        {
          title: 'Monumental Katha: AR/VR App for Historical Recreation at Heritage Sites',
          description:
            '"Monumental Katha" utilizes Augmented Reality and 3D modeling to bring Indias monuments to life, offering tourists an interactive and educational experience, while overcoming language barriers and enhancing engagement at historical sites.',
          imageUrl:
            'https://github.com/HARISH-B-2001/HARISH-B-2001.github.io/blob/main/src/assets/logo.png?raw=true',
          link: 'https://github.com/HARISH-B-2001', // Replace with actual project link if available.
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Harish Balakrishnan',
    description: 'Innovative IT Student with a passion for technology, problem-solving, and contributing effectively in team environments.',
    imageURL: '', // Add your profile image URL here if needed.
  },
  social: {
    linkedin: 'harish-balakrishnan-205a72210',
    x: '', // Twitter/X handle (leave empty if not applicable).
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // YouTube channel (leave empty if not applicable).
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // Stack Overflow profile (leave empty if not applicable).
    skype: '',
    telegram: '',
    website: '', // Personal website (leave empty if not applicable).
    phone: '',
    email: 'harishbalakrishnanpersonal@gmail.com',
  },
  resume: {
    fileUrl: 'https://raw.githubusercontent.com/HARISH-B-2001/HARISH-B-2001.github.io/refs/heads/main/src/resume/Harish_Balakrishnan_Resume.pdf', // Replace with the actual file URL or leave empty to hide the button.
  },
  skills: [
    'Python',
    'Java',
    'HTML & CSS',
    'Unity',
    'SQL',
    'Problem-Solving',
    'Computer Literacy',
  ],
  experiences: [
    // Add work experience if applicable.
  ],
  certifications: [
    {
      name: 'Core & Advanced Java',
      body: 'Besant Technologies',
      year: '2025',
      link: '', // Add certification link if available.
    },
    {
      name: 'Full Stack Development with Python',
      body: 'Guvi',
      year: '2023',
      link: '', // Add certification link if available.
    },
    {
      name: 'AR/VR Development',
      body: '',
      year: '2022',
      link: '', // Add certification link if available.
    },
  ],
  educations: [
    {
      institution: 'KCG College of Technology',
      degree: 'B.Tech in Information Technology',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Swami Vivekananda Matriculation Higher Secondary School',
      degree: 'Higher Secondary Education (HSC)',
      from: '2020',
      to: '2020',
    },
  ],
  publications: [
    // Add publications if applicable.
  ],
  blog: {
    source: '', // Leave empty if you don't have a blog.
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '', // Add Google Analytics ID if needed.
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },


  enablePWA: true,
};

export default CONFIG;
