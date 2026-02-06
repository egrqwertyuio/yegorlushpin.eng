// Portfolio Data Configuration
// Edit this file to customize your portfolio content

export const siteConfig = {
  name: "Yegor Lushpin",
  title: "Electrical Engineer",
  subtitle: "Embedded Systems Specialist",
  description: "Passionate electrical engineer specializing in embedded systems, PCB design, and IoT solutions. Transforming innovative ideas into cutting-edge hardware.",
  email: "yegor@example.com",
  location: "Your Location",
  availability: "Open to opportunities",
  social: {
    linkedin: "https://linkedin.com/in/yegorlushpin",
    github: "https://github.com/yegorlushpin",
    twitter: "",
  },
  resumeUrl: "/resume.pdf",
};

export const aboutData = {
  bio: `I'm an Electrical Engineer with a passion for embedded systems and hardware development.
  With expertise spanning from PCB design to firmware development, I bring ideas to life through
  innovative hardware solutions. My work focuses on creating efficient, reliable, and cutting-edge
  electronic systems that push the boundaries of what's possible.`,
  specialties: [
    "PCB Design & Layout",
    "Microcontroller Programming",
    "Firmware Development",
    "IoT Solutions",
    "Signal Processing",
    "Power Electronics",
  ],
  education: [
    {
      degree: "B.S. in Electrical Engineering",
      school: "University Name",
      year: "20XX",
      description: "Focus on embedded systems and digital electronics",
    },
  ],
  certifications: [
    "Certification Name 1",
    "Certification Name 2",
  ],
};

export const skillsData = {
  hardware: [
    { name: "PCB Design", level: 90 },
    { name: "Schematic Capture", level: 95 },
    { name: "FPGA Development", level: 75 },
    { name: "Signal Processing", level: 80 },
    { name: "Power Electronics", level: 85 },
    { name: "RF Design", level: 70 },
  ],
  embedded: [
    { name: "C/C++", level: 95 },
    { name: "ARM Cortex-M", level: 90 },
    { name: "Arduino", level: 95 },
    { name: "ESP32/ESP8266", level: 90 },
    { name: "STM32", level: 85 },
    { name: "RTOS", level: 80 },
  ],
  tools: [
    { name: "KiCad", level: 90 },
    { name: "Altium Designer", level: 85 },
    { name: "MATLAB/Simulink", level: 80 },
    { name: "Oscilloscope", level: 95 },
    { name: "Logic Analyzer", level: 90 },
    { name: "Soldering/Rework", level: 95 },
  ],
  software: [
    { name: "Python", level: 85 },
    { name: "Git", level: 90 },
    { name: "Linux", level: 85 },
    { name: "Docker", level: 70 },
    { name: "CI/CD", level: 75 },
    { name: "Documentation", level: 90 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "IoT Environmental Monitor",
    description: "A comprehensive IoT system for monitoring temperature, humidity, air quality, and other environmental parameters with cloud connectivity.",
    image: "/images/projects/placeholder-1.jpg",
    technologies: ["ESP32", "MQTT", "PCB Design", "Sensors", "Python"],
    category: "IoT",
    github: "https://github.com/username/project1",
    demo: "",
    featured: true,
  },
  {
    id: 2,
    title: "Custom Motor Controller",
    description: "High-efficiency brushless DC motor controller with FOC algorithm implementation for precision robotics applications.",
    image: "/images/projects/placeholder-2.jpg",
    technologies: ["STM32", "Power Electronics", "PCB", "C++", "FOC"],
    category: "Hardware",
    github: "https://github.com/username/project2",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Home Hub",
    description: "Centralized smart home controller supporting multiple protocols including Zigbee, Z-Wave, and WiFi for seamless device integration.",
    image: "/images/projects/placeholder-3.jpg",
    technologies: ["Raspberry Pi", "Zigbee", "Node.js", "PCB", "3D Printing"],
    category: "IoT",
    github: "https://github.com/username/project3",
    demo: "",
    featured: true,
  },
  {
    id: 4,
    title: "Portable Oscilloscope",
    description: "Battery-powered portable oscilloscope with 50MHz bandwidth, touch screen interface, and data logging capabilities.",
    image: "/images/projects/placeholder-4.jpg",
    technologies: ["ARM Cortex-M4", "ADC", "LCD", "KiCad", "USB"],
    category: "Hardware",
    github: "https://github.com/username/project4",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "Automated Grow System",
    description: "Fully automated hydroponic grow system with environmental control, nutrient dosing, and remote monitoring via mobile app.",
    image: "/images/projects/placeholder-5.jpg",
    technologies: ["Arduino", "Sensors", "Relays", "Firebase", "PCB"],
    category: "IoT",
    github: "https://github.com/username/project5",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title: "CAN Bus Analyzer",
    description: "Professional-grade CAN bus analyzer and debugger for automotive applications with protocol decoding and signal analysis.",
    image: "/images/projects/placeholder-6.jpg",
    technologies: ["STM32", "CAN", "USB", "Qt", "PCB Design"],
    category: "Hardware",
    github: "https://github.com/username/project6",
    demo: "",
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Senior Embedded Engineer",
    company: "Company Name",
    location: "City, Country",
    period: "2022 - Present",
    description: "Leading embedded systems development for IoT products, including firmware architecture, PCB design review, and team mentorship.",
    achievements: [
      "Designed and implemented firmware for 5+ product lines",
      "Reduced power consumption by 40% through optimization",
      "Mentored junior engineers on best practices",
    ],
  },
  {
    id: 2,
    title: "Electrical Engineer",
    company: "Previous Company",
    location: "City, Country",
    period: "2019 - 2022",
    description: "Developed embedded solutions for industrial automation, focusing on motor control and sensor integration.",
    achievements: [
      "Designed custom motor controllers for precision applications",
      "Implemented communication protocols (CAN, Modbus, I2C)",
      "Created test fixtures and production tooling",
    ],
  },
  {
    id: 3,
    title: "Junior Engineer",
    company: "First Company",
    location: "City, Country",
    period: "2017 - 2019",
    description: "Started career developing embedded firmware and assisting with PCB design for consumer electronics.",
    achievements: [
      "Developed firmware for microcontroller-based products",
      "Assisted in schematic capture and PCB layout",
      "Created technical documentation and user manuals",
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
