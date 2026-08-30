// ============================================================
//  ALL OF MY PORTFOLIO TEXT LIVES IN THIS ONE FILE.
//  Change something here and it changes on the website.
//  Anything marked CHANGE ME is a placeholder.
// ============================================================

// --- Basic info about me ---------------------------------
export const personalInfo = {
  name: 'Natan Abera',
  initials: 'NA', // shown in the logo and the round avatar
  role: 'Full-Stack Developer',
  tagline:
    'I build web apps from the database all the way to the browser. I like clean code, fast pages, and projects that actually get finished.',

  email: 'natanaba8@gmail.com',
  phone: '+251 910491517',
  location: 'Addis Ababa, Ethiopia',
}

// --- My social links -------------------------------------
// "icon" has to be one of: github, linkedin, twitter, email
export const socialLinks = [
  { name: 'GitHub', url: '#', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: 'email' },
]

// --- The three numbers in the hero ------------------------
export const stats = [
  { number: '2+', label: 'Years coding' },
  { number: '12', label: 'Projects built' },
  { number: '5', label: 'Happy clients' },
]

// --- The About section ------------------------------------
// Each string in the list becomes its own paragraph.
export const aboutParagraphs = [
  "Hi! I'm Natan, a full-stack developer who got into programming because I wanted to build the kind of websites I liked using. That curiosity turned into a habit, and now I spend most of my time either shipping something new or breaking something to learn how it works.",
  'On the frontend I mostly work with React and plain CSS. On the backend I use Node.js with Express and either PostgreSQL or MongoDB, depending on what the project needs. I care a lot about making things responsive, accessible and quick to load.',
  "Right now I'm looking for a team where I can keep learning from people who are better than me. If that sounds like your team, my inbox is open.",
]

// The small list of facts in the card next to the paragraphs
export const aboutFacts = [
  { label: 'Based in', value: 'Addis Ababa, Ethiopia' },
  { label: 'Focus', value: 'React + Node.js' },
  { label: 'Learning', value: 'TypeScript & Docker' },
  { label: 'Languages', value: 'Amharic, English' },
]

// --- The Skills section -----------------------------------
export const skillGroups = [
  {
    title: 'Frontend',
    description: 'The part people actually see and click on.',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    description: 'The part that does the real work behind the scenes.',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    title: 'Tools',
    description: 'Everything else I use to get the job done.',
    skills: ['Git & GitHub', 'Postman', 'Figma', 'Vercel', 'VS Code', 'Jest'],
  },
]

// --- The Projects section ---------------------------------
// "category" is used by the filter buttons, so keep it as one of:
// 'Full-Stack', 'Frontend', 'Backend'
export const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'Full-Stack',
    description:
      'A full online store with a product catalogue, a shopping cart and Stripe checkout. Admins get a small dashboard where they can add products and see orders.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Full-Stack',
    description:
      'A team task board with drag and drop lists, live updates over WebSockets and login with email or Google. This one taught me a lot about state management.',
    tech: ['React', 'Socket.io', 'MongoDB', 'JWT'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Frontend',
    description:
      'A weather dashboard that shows a 7 day forecast for any city. It saves your favourite cities in localStorage so they are still there when you come back.',
    tech: ['React', 'CSS', 'OpenWeather API'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project-three',
  },
  {
    id: 4,
    title: 'Project Four',
    category: 'Backend',
    description:
      'A URL shortener API with rate limiting, click analytics and custom short codes. It is small, but it was my first time writing proper tests for everything.',
    tech: ['Node.js', 'Express', 'Redis', 'Jest'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project-four',
  },
  {
    id: 5,
    title: 'Project Five',
    category: 'Frontend',
    description:
      'A music player interface built to practice layout and keyboard shortcuts. No backend, just a lot of CSS and a playlist of songs I like.',
    tech: ['React', 'CSS', 'Howler.js'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project-five',
  },
  {
    id: 6,
    title: 'Project Six',
    category: 'Full-Stack',
    description:
      'A markdown blog where posts are written in the editor and saved to the database. It has tags, search and a reading time estimate on every post.',
    tech: ['React', 'Express', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/yourusername/project-six',
  },
]

// The buttons above the projects grid
export const projectFilters = ['All', 'Full-Stack', 'Frontend', 'Backend']

// --- The links in the navbar ------------------------------
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  {name: 'Test Project', href: '#testproject'},
  { name: 'Contact', href: '#contact' },
]
