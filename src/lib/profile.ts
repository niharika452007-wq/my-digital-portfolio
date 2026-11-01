// Every detail on the portfolio comes from this module, transcribed from the résumé.

export const profile = {
  fullName: 'Kalisetti Naga Geetha Niharika',
  firstName: 'Niharika',
  headline: 'Computer Science & Systems Engineering Undergraduate',
  roles: ['Software Developer', 'Cybersecurity Enthusiast', 'Problem Solver'],
  location: 'Vizianagaram, Andhra Pradesh',
  phone: '9493372118',
  email: 'niharika452007@gmail.com',
  photo: '/img/niharika.jpg',
  resume: '/Niharika-Kalisetti-Resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/niharika-kalisetti-9b59b23ab/',
    github: 'https://github.com/niharika452007-wq',
    leetcode: 'https://leetcode.com/u/ZRk6mJeDep/',
  },
  summary:
    'Computer Science and Systems Engineering undergraduate focused on software development and cybersecurity. Proficient in Java, Python, C, React.js, Node.js, Express.js, MongoDB, and REST APIs. Strong interest in problem solving, application development, and learning new technologies, seeking opportunities to apply programming and database fundamentals, develop practical skills, and learn through real-world projects. Interested in building useful technology solutions and growing as a software professional.',
  proficientIn: [
    'Java',
    'Python',
    'C',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
  ],
}

export const education = [
  {
    degree: 'B.Tech in Computer Science and Systems Engineering',
    school: 'Lendi Institute of Engineering and Technology',
    place: 'Vizianagaram, Andhra Pradesh',
    year: 'Expected 2028',
    score: null,
  },
  {
    degree: 'Intermediate (MPC)',
    school: 'APEX Junior College',
    place: null,
    year: '2024',
    score: '85.8',
  },
  {
    degree: 'SSC',
    school: 'AIM English Medium School',
    place: null,
    year: '2022',
    score: '85.2',
  },
]

export const skills = [
  { group: 'Programming Languages', items: ['Python', 'Java', 'SQL', 'C'] },
  {
    group: 'Web Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    group: 'Backend & APIs',
    items: ['Flask', 'REST APIs', 'Flask-CORS', 'JWT Authentication'],
  },
  { group: 'Databases', items: ['MySQL', 'SQLAlchemy'] },
  {
    group: 'AI & Tools',
    items: [
      'AI/LLM API Integration',
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
      'Canva',
    ],
  },
  {
    group: 'Other',
    items: [
      'Web Scraping',
      'Cheerio',
      'Scikit-learn',
      'Data Structures',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
] as const

export const projects = [
  {
    title: 'AI-Based Student Learning Assistant',
    kind: 'Full-Stack Web Application',
    stack: ['React.js', 'Python', 'AI/LLM API', 'SQL'],
    points: [
      'Developed an AI-powered learning platform that generates simplified topic explanations, concise study notes, and important exam-oriented questions.',
      'Implemented interactive quiz generation, answer explanations, and personalized learning support to help students prepare for academic and competitive examinations.',
      'Designed a responsive user interface and integrated AI-powered learning features to deliver an efficient and personalized study experience.',
    ],
  },
  {
    title: 'Kids Learning Game Platform',
    kind: 'Interactive Education Website',
    stack: [],
    points: [
      'Developed an interactive platform designed to make basic mathematics and logical learning more engaging for children.',
      'Designed user-friendly interfaces with interactive, question-based learning activities.',
    ],
  },
]

export const training = [
  { title: 'Palo Alto Cybersecurity', provider: 'EduSkills' },
  { title: 'Web Full Stack Developer', provider: 'EduSkills' },
  { title: 'Juniper Networking Cloud', provider: 'EduSkills' },
]

export const certifications = [
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    result: 'Pass (54)',
    year: '2025',
  },
]

export const leadership = [
  {
    role: 'Team Leader',
    context: 'DTI project',
    points: [
      'Coordinated with team members to plan and finalize the project.',
      'Collaborated with teammates to discuss project ideas, formats, and execution plans.',
    ],
  },
]

export const additional = {
  problemSolving: 'Python programming practice on LeetCode',
  languages: ['English', 'Telugu'],
}
