// Portfolio Data Configuration
// Edit this file to customize your portfolio content

export const siteConfig = {
  name: "Yegor Lushpin",
  title: "Electrical Engineering Student",
  subtitle: "University of Cincinnati | Co-op Available",
  description: "Electrical Engineering student passionate about embedded systems, battery technology, and iOS development. Available for 1st Co-op Fall 2026 and 2nd Co-op Summer 2027.",
  email: "lushpiev@mail.uc.edu",
  phone: "(859) 786-2491",
  location: "Cincinnati, Ohio",
  availability: "Available for 1st Co-op Fall 2026 and 2nd Co-op Summer 2027",
  social: {
    linkedin: "https://www.linkedin.com/in/yegorlushpin",
    github: "https://github.com/yegorlushpin",
    twitter: "",
  },
  resumeUrl: "/resume.pdf",
};

export const aboutData = {
  bio: `I'm an Electrical Engineering student at the University of Cincinnati with hands-on experience in high-voltage battery systems, iOS development, and scientific computing.

My work spans from designing temperature monitoring systems for Formula SAE electric race cars to developing NASA-supported citizen science applications. I thrive in collaborative environments where I can apply my technical skills to solve real-world engineering challenges.`,
  specialties: [
    "Battery Systems & HV Safety",
    "iOS Development (Swift)",
    "MATLAB Modeling",
    "PCB Design (KiCad)",
    "Embedded Systems",
    "Test & Validation",
  ],
  education: [
    {
      degree: "B.S. in Electrical Engineering",
      school: "University of Cincinnati",
      year: "Expected May 2030",
      description: "GPA: 2.91",
    },
    {
      degree: "High School Diploma, Summa Cum Laude",
      school: "Campbell County High School, Alexandria, KY",
      year: "Jun 2025",
      description: "GPA: 4.00",
    },
  ],
  certifications: [
    "Microsoft Office (Word, Excel, PowerPoint) - May 2023",
  ],
};

export const skillsData = {
  hardware: [
    { name: "Oscilloscope", level: 90 },
    { name: "Multimeter", level: 95 },
    { name: "Soldering", level: 85 },
    { name: "KiCad", level: 75 },
    { name: "Battery Systems", level: 80 },
    { name: "HV Safety", level: 80 },
  ],
  embedded: [
    { name: "C/C++", level: 80 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "Swift", level: 75 },
    { name: "MATLAB", level: 85 },
    { name: "LabVIEW", level: 70 },
  ],
  tools: [
    { name: "Visual Studio Code", level: 90 },
    { name: "Git", level: 85 },
    { name: "Linux", level: 80 },
    { name: "Microsoft Office", level: 95 },
    { name: "KiCad", level: 75 },
    { name: "MATLAB/Simulink", level: 85 },
  ],
  software: [
    { name: "Python", level: 85 },
    { name: "Git", level: 85 },
    { name: "Linux", level: 80 },
    { name: "Swift (iOS)", level: 75 },
    { name: "Java", level: 80 },
    { name: "C/C++", level: 80 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Bearcats Electric Racing - HV Accumulator",
    description: "Supported the planning, design, and integration of the high-voltage accumulator (battery pack) for a Formula SAE electric race car, focusing on electrical safety standards and performance specifications.",
    image: "/images/projects/placeholder-1.jpg",
    technologies: ["HV Systems", "FSAE", "KiCad", "Oscilloscope", "Battery Design"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "Battery Temperature Monitoring System",
    description: "Designed a temperature monitoring system to validate thermal performance of battery cells for the Formula SAE electric race car.",
    image: "/images/projects/placeholder-2.jpg",
    technologies: ["Sensors", "Data Acquisition", "Thermal Analysis", "Testing"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "SunSketcher iOS App",
    description: "NASA-supported citizen science smartphone app that lets anyone in the path of totality automatically photograph total solar eclipses, contributing precisely timed images that help researchers measure the Sun's size, shape, and internal dynamics.",
    image: "/images/projects/placeholder-3.jpg",
    technologies: ["Swift", "iOS", "NASA", "Server Integration", "Encryption"],
    category: "Software",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 4,
    title: "Eclipse Simulation Modeling",
    description: "Modeled eclipse simulations based on collected data in MATLAB in collaboration with NASA engineers and leading heliophysicists in the field.",
    image: "/images/projects/placeholder-4.jpg",
    technologies: ["MATLAB", "Data Analysis", "NASA", "Scientific Computing"],
    category: "Software",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 5,
    title: "Busbar & Fusible Link Design",
    description: "Drafted busbar and fusible link drawings for efficient manufacturing of critical overcurrent protection to comply with FSAE rules and electrical standards.",
    image: "/images/projects/placeholder-5.jpg",
    technologies: ["CAD", "Electrical Design", "FSAE", "Safety Systems"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title: "Fusible Link Validation",
    description: "Validated different fusible link dimensions for design research using an oscilloscope to ensure compliance with safety standards.",
    image: "/images/projects/placeholder-6.jpg",
    technologies: ["Oscilloscope", "Testing", "Validation", "Research"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Electrical Engineering Team Member",
    company: "Bearcats Electric Racing",
    location: "University of Cincinnati",
    period: "Aug 2025 - Present",
    description: "Supporting the design and integration of high-voltage battery systems for a Formula SAE electric race car.",
    achievements: [
      "Designed temperature monitoring system for battery cell thermal validation",
      "Drafted busbar and fusible link drawings for overcurrent protection",
      "Validated fusible link dimensions using oscilloscope measurements",
    ],
  },
  {
    id: 2,
    title: "Junior iOS Developer",
    company: "SunSketcher - Western Kentucky University",
    location: "NASA-supported Project",
    period: "Feb 2024 - Aug 2025",
    description: "Contributed to a NASA-supported citizen science app for photographing solar eclipses.",
    achievements: [
      "Programmed in Swift to configure encrypted backup to servers",
      "Modeled eclipse simulations in MATLAB with NASA engineers",
      "Collaborated with leading heliophysicists on data analysis",
    ],
  },
  {
    id: 3,
    title: "Crew Member",
    company: "Wendy's",
    location: "Alexandria, Kentucky",
    period: "Mar 2025 - Present",
    description: "Providing fast, friendly service in a high-volume restaurant setting.",
    achievements: [
      "Increased feedback survey amount by 125%",
      "Awarded first-ever Employee of the Month at the store",
      "Maintained 97-99% cleanliness score consistently",
    ],
  },
  {
    id: 4,
    title: "Team Leader",
    company: "Technology Student Association",
    location: "Campbell County High School",
    period: "Aug 2023 - May 2025",
    description: "Led a team in Engineering, Coding, and CAD design competitions at regional, state, and national levels.",
    achievements: [
      "Led team through regional, state, and national TSA competitions",
      "Coordinated task assignments, deadlines, and practice sessions",
      "Mentored teammates in competitive STEM environment",
    ],
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
