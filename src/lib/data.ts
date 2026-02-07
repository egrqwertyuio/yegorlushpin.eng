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
    github: "https://github.com/egrqwertyuio",
    twitter: "",
  },
  resumeUrl: "/resume.pdf",
};

export const aboutData = {
  bio: `My name is Yegor Lushpin, I am an Electrical Engineering student at the University of Cincinnati with hands-on experience in high-voltage battery systems, iOS development, and scientific computing.
  I have contributed to a NASA-supported citizen science app for photographing solar eclipses and am currently supporting the design and integration of high-voltage battery systems for a Formula SAE electric race car. 
  
  I am passionate about embedded systems, battery technology, and iOS development. However I am most eager about making a change in this world, my dream job is in Renewable and Clean Energy Systems. 
  
  I am eager to apply my skills in a co-op position starting Fall 2026.`,
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
    { name: "Oscilloscope", level: 50 },
    { name: "Multimeter", level: 70 },
    { name: "Soldering", level: 80 },
    { name: "KiCad", level: 60 },
    { name: "Battery Systems", level: 60 },
    { name: "HV Safety", level: 60 },
  ],
  embedded: [
    { name: "C/C++", level: 80 },
    { name: "Python", level: 90 },
    { name: "Java", level: 90 },
    { name: "Swift", level: 70 },
    { name: "MATLAB", level: 85 },
    { name: "LabVIEW", level: 70 },
  ],
  tools: [
    { name: "Visual Studio Code", level: 100 },
    { name: "Git", level: 80 },
    { name: "Linux", level: 60 },
    { name: "Microsoft Office", level: 95 },
    { name: "Seimens NX", level: 75 },
    { name: "Simulink", level: 80 },
  ],
  software: [
    { name: "Python", level: 90 },
    { name: "Git", level: 85 },
    { name: "Linux", level: 60 },
    { name: "Swift (iOS)", level: 70 },
    { name: "Java", level: 90 },
    { name: "C/C++", level: 80 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Busbar Design, Testing & HV Accumulator",
    description: "Drafted busbar and fusible link drawings for efficient manufacturing of critical overcurrent protection. Validated fusible link dimensions using oscilloscope measurements and supported HV accumulator integration for the Formula SAE electric race car.",
    image: "/images/projects/BearcatsEV/BusBars/image0.jpeg",
    gallery: [
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/image0.jpeg", alt: "Busbar assembly" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/image1.jpeg", alt: "Busbar testing" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/image2.jpeg", alt: "Fusible link" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/image3.jpeg", alt: "HV components" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/image4.jpeg", alt: "Assembly detail" },
      { type: "video" as const, src: "/images/projects/BearcatsEV/BusBars/linktesting.mov", alt: "Link testing video" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/BER_A1_BusBars_Nickel_Copper-images-0.jpg", alt: "Busbar drawing page 1" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/BusBars/BER_A1_BusBars_Nickel_Copper-images-1.jpg", alt: "Busbar drawing page 2" },
    ],
    technologies: ["HV Systems", "FSAE", "Oscilloscope", "CAD", "Safety Systems"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "SunSketcher - Eclipse Simulation",
    description: "Modeled eclipse simulations based on collected data in MATLAB in collaboration with NASA engineers and leading heliophysicists in the field.",
    image: "/images/projects/SunSketcher/MatLabSunSketcherGraph1.png",
    gallery: [
      { type: "image" as const, src: "/images/projects/SunSketcher/MatLabSunSketcherGraph1.png", alt: "Eclipse simulation graph 1" },
      { type: "image" as const, src: "/images/projects/SunSketcher/MatLabSunSketcherGraph2.png", alt: "Eclipse simulation graph 2" },
      { type: "image" as const, src: "/images/projects/SunSketcher/MatLabSunSketcherGraph3.png", alt: "Eclipse simulation graph 3" },
      { type: "image" as const, src: "/images/projects/SunSketcher/MatLabSunSketcherMoonGraph.png", alt: "Moon simulation graph" },
    ],
    technologies: ["MATLAB", "Data Analysis", "NASA", "Scientific Computing"],
    category: "Software",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "SunSketcher iOS App",
    description: "NASA-supported citizen science smartphone app that lets anyone in the path of totality automatically photograph total solar eclipses, contributing precisely timed images that help researchers measure the Sun's size, shape, and internal dynamics.",
    image: "/images/projects/SunSketcher/IOS Development.jpeg",
    gallery: [
      { type: "image" as const, src: "/images/projects/SunSketcher/IOS Development.jpeg", alt: "iOS Development" },
    ],
    technologies: ["Swift", "iOS", "NASA", "Server Integration", "Encryption"],
    category: "Software",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 4,
    title: "3D CAD Modeling - Battery Components",
    description: "Designed 3D models for battery pack components including spacers, washers, and HVIL receptacles for the Formula SAE electric race car.",
    image: "/images/projects/BearcatsEV/3dModels/ModuleSpacerBlock_4Assembly_dwg1.png",
    gallery: [
      { type: "image" as const, src: "/images/projects/BearcatsEV/3dModels/ModuleSpacerBlock_4Assembly_dwg1.png", alt: "Module spacer block assembly" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/3dModels/HVIL_recepticle_dwg1.png", alt: "HVIL receptacle drawing" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/3dModels/Spacers_4Lid_Assembly_dwg1.png", alt: "Spacers lid assembly" },
      { type: "image" as const, src: "/images/projects/BearcatsEV/3dModels/bbb_washer_dwg1.png", alt: "BBB washer drawing" },
    ],
    technologies: ["CAD", "3D Modeling", "FSAE", "Manufacturing"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: 5,
    title: "Heart PCB Design",
    description: "Personal project designing a heart-shaped PCB with integrated LED lighting, demonstrating PCB design and soldering skills.",
    image: "",
    gallery: [
      { type: "video" as const, src: "/images/projects/Personal Projects/heart pcb/heartpcb.MOV", alt: "Heart PCB demo" },
      { type: "image" as const, src: "/images/projects/Personal Projects/heart pcb/heartpcb.jpg", alt: "Heart PCB schematic" },
    ],
    technologies: ["KiCad", "PCB Design", "Soldering", "LED"],
    category: "Personal",
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
