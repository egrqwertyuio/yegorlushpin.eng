// Portfolio Data Configuration
// Edit this file to customize your portfolio content

export const siteConfig = {
  name: "Yegor Lushpin",
  title: "Electrical Engineering Student",
  subtitle: "University of Cincinnati | TREW Automation Co-op '26",
  description: "Electrical Engineering student passionate about embedded systems, battery technology, and renewable energy. Accepted 1st Co-op at TREW Automation (Fall 2026) | Seeking 2nd Co-op Summer 2027.",
  email: "lushpiev@mail.uc.edu",
  phone: "(859) 786-2491",
  location: "Cincinnati, Ohio",
  availability: "1st Co-op: TREW Automation, Fall 2026 | Seeking 2nd Co-op Summer 2027",
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
  
  I am passionate about embedded systems, battery technology, and solving problems in general. However I am most passionate about making a change in this world, my dream job is in Renewable and Clean Energy Systems and adjacent industries. 

  I have accepted my 1st co-op position at TREW Automation in West Chester, OH starting Fall 2026, focused on electrical drawings and design. I am actively seeking a 2nd co-op for Summer 2027.
  
  I also love my dog, Gosha, he is a 2 years old squishy pug and he is the best. P.S. there is an easter egg somewhere on my page about him, can you find it?`,
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
    { name: "Multimeter", level: 60 },
    { name: "Soldering", level: 80 },
    { name: "KiCad", level: 50 },
    { name: "Battery Systems", level: 50 },
    { name: "HV Safety", level: 50 },
  ],
  embedded: [
    { name: "C/C++", level: 70 },
    { name: "Python", level: 80 },
    { name: "Java", level: 80 },
    { name: "Swift", level: 70 },
    { name: "MATLAB", level: 75 },
    { name: "LabVIEW", level: 60 },
  ],
  tools: [
    { name: "Visual Studio Code", level: 80 },
    { name: "Git", level: 80 },
    { name: "Linux", level: 60 },
    { name: "Microsoft Office", level: 95 },
    { name: "Seimens NX", level: 75 },
    { name: "Simulink", level: 60 },
  ],
  software: [
    { name: "Python", level: 80 },
    { name: "Git", level: 70 },
    { name: "Linux", level: 60 },
    { name: "Swift (iOS)", level: 60 },
    { name: "Java", level: 80 },
    { name: "C/C++", level: 70 },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Bearcats Electric Racing — Battery Systems",
    description: "EV4's high-voltage accumulator (busbars, fusible links, 3D-modeled pack components — 1st place at CEAS Expo 2026) and the EV5 cell-characterization program I'm running now to pick the next pack's cell and configuration.",
    image: "/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_Exploded_Labeled.jpg",
    gallery: [
      { type: "image" as const, src: "/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_Exploded_Labeled.jpg", alt: "EV4 accumulator labeled exploded view" },
      { type: "image" as const, src: "/images/projects/BearcatsElectricRacing/AccumulatorRenders/Accumulator_In_Chassis.jpg", alt: "Accumulator installed in the EV4 chassis" },
      { type: "image" as const, src: "/images/projects/BearcatsElectricRacing/SelfTesting/TestDashboard.jpg", alt: "EV5 cell test dashboard with live thermal map" },
      { type: "image" as const, src: "/images/projects/BearcatsElectricRacing/BusBars/image0.jpeg", alt: "Busbar assembly" },
    ],
    technologies: ["HV Systems", "FSAE", "Battery Pack Design", "CAD", "Cell Characterization"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: true,
    caseStudyUrl: "/ev4",
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
    id: 5,
    slug: "heart-pcb",
    title: "Heart PCB Design",
    description: "Custom heart-shaped PCB with integrated LED lighting — designed in KiCad, fabricated externally, and hand-soldered. A practical exercise covering the full PCB workflow from schematic capture to assembled board.",
    image: "/images/projects/Personal Projects/heart pcb/heart_pcb.png",
    gallery: [
      { type: "image" as const, src: "/images/projects/Personal Projects/heart pcb/heart_pcb.png", alt: "Heart PCB render" },
      { type: "video" as const, src: "/images/projects/Personal Projects/heart pcb/heartpcb.MOV", alt: "Heart PCB demo" },
      { type: "video" as const, src: "/images/projects/Personal Projects/heart pcb/Video_1.mov", alt: "Heart PCB video" },
      { type: "image" as const, src: "/images/projects/Personal Projects/heart pcb/heartpcb.jpg", alt: "Heart PCB schematic" },
      { type: "image" as const, src: "/images/projects/Personal Projects/heart pcb/Screenshot 2026-02-07 003930.png", alt: "Heart PCB screenshot" },
    ],
    technologies: ["KiCad", "PCB Design", "Soldering", "LED"],
    category: "Personal",
    github: "",
    demo: "",
    featured: false,
    details: {
      deliverables: [
        "Fully functional heart-shaped LED PCB with animated lighting patterns",
        "Single-layer board designed end-to-end in KiCad — schematic capture through Gerber export",
        "Externally fabricated via JLCPCB (5-pack) and hand-soldered SMD assembly",
        "Total build cost ~$11.50 (PCB, WS2812B LEDs, decoupling caps, USB power connector, standoffs)",
      ],
      role: "Solo build — I ran the entire PCB pipeline myself, from schematic and heart-outline layout in KiCad through routing, DRC, Gerber export, fab ordering, and hand-soldering every SMD component under magnification.",
      roleDetails: [
        "Sketched the heart silkscreen outline in KiCad's PCB editor and placed WS2812B LED footprints along the path",
        "Routed the daisy-chained data line and 5V/GND power rails, adding a 100nF bypass capacitor at every LED for supply-rail stability",
        "Ran DRC until it came back clean, then exported Gerbers and ordered a 5-pack from JLCPCB",
        "Hand-soldered all SMD components under magnification",
        "Verified power continuity and the data chain end-to-end, then tested LED animation sequences",
      ],
      issues: [
        {
          issue: "[Add a specific issue you ran into here]",
          fix: "[And how you diagnosed and fixed it]",
        },
      ],
    },
  },
  {
    id: 6,
    slug: "cyber-deck",
    title: "Cyber Deck",
    description: "A pocket AI memory device, three hardware generations deep: an ESP32 wearable HUD, then a Raspberry Pi 4 with fully local transcription, now a palm-sized Raspberry Pi Zero 2W field recorder — basically a smart microphone at this point. Near-final — just needs a 3D-printed enclosure.",
    image: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_InHand.jpg",
    gallery: [
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_InHand.jpg", alt: "Cyber Deck v3 (Raspberry Pi Zero 2W) held in hand — palm-sized" },
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_Components.jpg", alt: "Cyber Deck v3 components — 1.44in display HAT, lavalier mic, USB audio adapter" },
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_HardwareStack.jpg", alt: "Cyber Deck v3 hardware stack — display HAT, GPIO header, decoupling capacitors, battery" },
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v2/CyberDeck_V2_InHand.jpg", alt: "Cyber Deck v2 (Raspberry Pi 4) held in hand" },
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v2/CyberDeck_V2_StatusScreen.jpg", alt: "Cyber Deck v2 status screen — RAM, CPU, sync, Ollama" },
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v2/CyberDeck_V2_HardwareStack.jpg", alt: "Cyber Deck v2 hardware stack — Pi 4, touchscreen, UPS HAT" },
      { type: "image" as const, src: "/images/projects/Personal Projects/CyberGlass/image0.jpeg", alt: "Cyber Glass v1 (ESP32) prototype" },
    ],
    technologies: ["Raspberry Pi Zero 2W", "Raspberry Pi 4", "ESP32-S3", "Python", "faster-Whisper", "Ollama", "Syncthing"],
    category: "Personal",
    github: "",
    demo: "",
    featured: false,
    inProgress: true,
    stages: [
      {
        label: "V1 — Cyber Glass (ESP32)",
        status: "Retired",
        summary: "Wearable HUD prototype on an ESP32 — a transparent OLED meant to show live transcriptions and notes. The project that started the whole Cyber Deck lineage, retired once the ESP32 hit a hard compute ceiling.",
        gallery: [
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberGlass/image0.jpeg", alt: "Cyber Glass ESP32 prototype" },
        ],
        deliverables: [
          "Wearable HUD prototype — ESP32 driving a transparent OLED display",
          "Audio capture streamed over WiFi to a home Flask server for processing",
          "Working button input and display firmware",
        ],
        role: "Solo build — I wrote the full ESP32 firmware: audio capture, OLED display driver, a WiFi client talking to a Flask server at home, and button input handling. The original vision was a glasses attachment that could record conversations, transcribe them, and run GPS plus Edge AI locally on the glasses themselves.",
        issues: [
          {
            issue: "The ESP32 didn't have anywhere near enough compute to run speech transcription or an LLM locally — the whole \"Edge AI on the glasses\" vision was a hardware ceiling, not a software problem.",
            fix: "Confirmed there was no way to code around it — a microcontroller isn't going to run a language model. All intelligence had to live on a server at home, which meant the device only worked on home WiFi.",
          },
          {
            issue: "A device that only works on home WiFi isn't actually a memory device you can rely on out in the world.",
            fix: "Retired the ESP32 platform entirely and moved to a Raspberry Pi 4, which could run everything locally with no network dependency — the start of Cyber Deck v2.",
          },
        ],
      },
      {
        label: "V2 — Raspberry Pi 4",
        status: "Superseded",
        summary: "Pocket recorder on a Raspberry Pi 4 with fully local transcription and querying — no cloud, no server. Proved local AI could work, but the build was too bulky to actually carry around.",
        gallery: [
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v2/CyberDeck_V2_InHand.jpg", alt: "Cyber Deck v2 (Raspberry Pi 4) held in hand" },
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v2/CyberDeck_V2_StatusScreen.jpg", alt: "Cyber Deck v2 status screen — RAM, CPU, sync, Ollama" },
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v2/CyberDeck_V2_HardwareStack.jpg", alt: "Cyber Deck v2 hardware stack — Pi 4, touchscreen, UPS HAT" },
        ],
        deliverables: [
          "Pocket-sized recorder with fully on-device transcription (faster-Whisper)",
          "Local LLM (llama3.2 1B via Ollama) for summarization and querying",
          "Semantic search over past recordings via ChromaDB",
          "UPS-powered, auto-synced to my Obsidian vault via Syncthing",
          "First real recordings transcribed, indexed, and synced end-to-end — the core loop worked",
        ],
        role: "Solo build — I designed the on-device AI pipeline on a Raspberry Pi 4: wired up faster-Whisper for local speech-to-text, Ollama running llama3.2 1B for summarization and querying, ChromaDB for semantic search, a UPS HAT for power, and Syncthing to push everything to my Obsidian vault. The point was proving how much useful AI you can run on about $100 of hardware with no internet connection — and it's not a surveillance device: it doesn't record people without asking, it's a notes tool, not a wire.",
        issues: [
          {
            issue: "Whisper and the local LLM couldn't run at the same time in 4GB of RAM.",
            fix: "Restructured the pipeline to run everything sequentially instead of in parallel — transcribe, then summarize, one at a time.",
          },
          {
            issue: "GPIO conflicts between the touchscreen HAT and the UPS HAT took longer to debug than most of the software.",
            fix: "Worked through the pin conflicts HAT by HAT until both could coexist on the same header.",
          },
          {
            issue: "The finished build worked — first recordings were transcribed, indexed, and synced — but it was way too bulky to actually be a pocketable device.",
            fix: "That's what prompted the full switch to a Raspberry Pi Zero 2W for v3, targeting a genuinely palm-sized form factor.",
          },
        ],
      },
      {
        label: "V3 — Raspberry Pi Zero 2W",
        status: "Current — near-final",
        summary: "The finalized Cyber Deck — a palm-sized Raspberry Pi Zero 2W that does one job well: record reliably and hand audio to a laptop for transcription. Basically a smart microphone at this point. Just needs a 3D-printed enclosure.",
        gallery: [
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_InHand.jpg", alt: "Cyber Deck v3 (Raspberry Pi Zero 2W) held in hand — palm-sized" },
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_Components.jpg", alt: "Cyber Deck v3 components — 1.44in display HAT, lavalier mic, USB audio adapter" },
          { type: "image" as const, src: "/images/projects/Personal Projects/CyberDeck v3/CyberDeck_V3_HardwareStack.jpg", alt: "Cyber Deck v3 hardware stack — display HAT, GPIO header, decoupling capacitors, battery" },
        ],
        deliverables: [
          "Palm-sized, record-only field recorder on a Raspberry Pi Zero 2W",
          "Crash-safe WAV capture — periodically rewrites the file header so a power loss mid-recording leaves a valid, playable file",
          "4 mic-reactive \"vibe\" screens (green bar, hacker rain, waves, face) plus a full diagnostics view on a 1.44\" LCD",
          "PiSugar 2 UPS + RTC for battery power",
          "Power-aware Syncthing sync — only syncs on home WiFi with battery at 30% or above, fails safe to paused",
          "Basically a smart microphone at this point: record reliably, hand the WAV to a laptop, done",
        ],
        role: "Solo build — I rearchitected the whole system from scratch for the Zero 2W around one hard rule: recording is the sacred real-time task, and nothing else — display, sync, status polling — is ever allowed to interrupt it. Wrote the threaded Python app (audio monitor, display renderer, sync guard), the ST7735S display driver, the 4 mic-reactive UI screens, and the power/network-aware sync gate.",
        issues: [
          {
            issue: "Porting the same faster-Whisper + ChromaDB stack from v2 onto the Zero 2W's 512MB of RAM caused repeated OOM kills and brownouts mid-recording.",
            fix: "Cut local transcription entirely. The Pi's only job now is capturing audio reliably and handing WAVs to a laptop over Syncthing — all ML moved off-device, no heavy dependencies, no swapfile needed.",
          },
          {
            issue: "The display driver claimed a GPIO pin the kernel already owned, crashing on startup with `lgpio.error: 'GPIO busy'`.",
            fix: "Traced it to Raspberry Pi OS's default `dtparam=spi=on`, which keeps CE0 kernel-owned. Switching to `dtoverlay=spi0-0cs` in `/boot/firmware/config.txt` frees it for manual GPIO control — automated the fix in the setup script so it's not a one-off manual step.",
          },
          {
            issue: "A mic-reconnect watchdog bug — if the USB mic dropped out, the app retried reconnecting exactly once, then silently gave up and kept running with no audio input.",
            fix: "Fixed the watchdog to keep retrying indefinitely instead of giving up after one attempt, since a silent no-audio failure defeats the entire point of a recorder.",
          },
          {
            issue: "Hot-plugging the mic while running on battery power had caused a brownout before.",
            fix: "Added a startup check that verifies a capture device exists before the app runs at all — it refuses to start (with a clear error) rather than silently recording dead air.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "6dof-robotic-arm",
    title: "6DoF Robotic Arm",
    description: "6 degrees-of-freedom robotic arm with a fully 3D-printed structure and servo-driven joints. Capable of autonomous pick-and-place operations with a programmable control system.",
    image: "/images/projects/Personal Projects/6DoF Robot/IMG_2568.jpeg",
    gallery: [
      { type: "image" as const, src: "/images/projects/Personal Projects/6DoF Robot/IMG_2568.jpeg", alt: "6DoF Robot" },
      { type: "video" as const, src: "/images/projects/Personal Projects/6DoF Robot/Video.mov", alt: "6DoF Robot demo" },
    ],
    technologies: ["Arduino", "Servo Control", "3D Printing", "Robotics", "PCA9685"],
    category: "Personal",
    github: "",
    demo: "",
    featured: false,
    inProgress: true,
    details: {
      deliverables: [
        "Forward and inverse kinematics for precise end-effector position control",
        "Teach-and-playback mode: manually position the arm, record joint angles, replay the sequence",
        "Computer vision integration (webcam + OpenCV) for object detection and autonomous grasping",
        "Custom web UI or PS4 controller for manual joint-by-joint operation",
        "G-code compatible command interface for CNC-style programmatic paths",
        "Interchangeable end-effectors: gripper, suction cup, or pen for drawing",
      ],
      role: "Solo build — I 3D-printed the full structure, wired six MG996R servos through a PCA9685 driver off an Arduino Mega 2560, and am now building out the control software (kinematics, teach-and-playback).",
      issues: [
        {
          issue: "[Add a specific issue you ran into here]",
          fix: "[And how you diagnosed and fixed it]",
        },
      ],
    },
  },
  {
    id: 8,
    slug: "jarvis-ai-assistant",
    title: "Jarvis AI Assistant",
    description: "Iron Man-inspired personal AI assistant. Wake-word activated, speech-to-text input, LLM-backed reasoning, and synthesized voice responses — running locally on a PC.",
    image: "/images/projects/Personal Projects/jarvis/image0.jpeg",
    gallery: [
      { type: "image" as const, src: "/images/projects/Personal Projects/jarvis/image0.jpeg", alt: "Jarvis AI Assistant" },
      { type: "video" as const, src: "/images/projects/Personal Projects/jarvis/Video.mov", alt: "Jarvis demo" },
    ],
    technologies: ["Python", "Speech Recognition", "LLM API", "TTS", "NLP"],
    category: "Personal",
    github: "",
    demo: "",
    featured: false,
    details: {
      deliverables: [
        "Wake-word-activated voice pipeline running fully locally on PC",
        "Real-time speech-to-text via the Google Speech Recognition API",
        "LLM-backed intent parsing and contextual response generation",
        "Synthesized voice output via a custom JARVIS-style TTS pipeline",
        "Modular skill system: weather lookup, time/date, web search, system commands",
        "Packaged as a background service with a CLI interface",
      ],
      role: "Solo build — I designed and implemented the full modular pipeline from wake-word to voice response, and built out the skill-plugin system.",
      roleDetails: [
        "Implemented hotword detection to trigger the listening pipeline without always-on STT",
        "Integrated the Google Speech Recognition API for real-time transcription",
        "Connected the LLM backend to process intent and generate contextual responses",
        "Built the TTS pipeline with a customized voice for the JARVIS persona",
        "Added the modular skill system: weather lookup, time/date, web search, system commands",
        "Packaged the assistant as a background service with a CLI interface",
      ],
      issues: [
        {
          issue: "[Add a specific issue you ran into here]",
          fix: "[And how you diagnosed and fixed it]",
        },
      ],
    },
  },
  {
    id: 9,
    slug: "pmr-robot",
    title: "PMR Robot",
    description: "ENED 1002c class project — a LEGO Mindstorms EV3 Prototype Mover Robot (PMR) that autonomously follows a closed-loop line path, picks up bins of shredded material, classifies them by weight, and delivers them to the correct drop-off location.",
    image: "/images/projects/PMR/Subtask2Finalpicture.jpg",
    gallery: [
      { type: "image" as const, src: "/images/projects/PMR/Subtask2Finalpicture.jpg", alt: "PMR Robot final" },
      { type: "image" as const, src: "/images/projects/PMR/Subtask2Finalpicture2.jpg", alt: "PMR Robot final 2" },
      { type: "image" as const, src: "/images/projects/PMR/Subtask2picture.jpg", alt: "PMR Robot subtask 2" },
      { type: "image" as const, src: "/images/projects/PMR/Subtask1picture.png", alt: "PMR Robot subtask 1" },
      { type: "image" as const, src: "/images/projects/PMR/Subtask1picture2.png", alt: "PMR Robot subtask 1 alt" },
      { type: "image" as const, src: "/images/projects/PMR/NewLiftMechanism.jpg", alt: "New lift mechanism" },
      { type: "image" as const, src: "/images/projects/PMR/DesignProcess.jpg", alt: "Design process" },
      { type: "image" as const, src: "/images/projects/PMR/DesignProcess2.jpg", alt: "Design process 2" },
      { type: "image" as const, src: "/images/projects/PMR/DesignProcess3.jpg", alt: "Design process 3" },
    ],
    technologies: ["LEGO Mindstorms EV3", "LabVIEW", "Robotics", "Autonomous Systems"],
    category: "Hardware",
    github: "",
    demo: "",
    featured: false,
    details: {
      deliverables: [
        "Autonomous closed-loop line following via dual EV3 color sensors, handling both solid and dashed track lines",
        "Ultrasonic-triggered object detection and forklift-style pickup with chopstick forks",
        "Gyro-based weight classification distinguishing organic vs. metal bins",
        "Color-coded drop-off at 2 zones, then autonomous return to the start line",
        "Mean lap time of 33.69s with an 85% clean-run rate (17/20 trials) across 20 timed test runs",
      ],
      role: "I was Lead Programmer on a 4-person team (Baolong Phan — design & manufacturing, Ethan Myhal — testing & research, Andrew Sullivan — documentation). I designed and implemented the robot's full LabVIEW state machine — NAVIGATE, DETECT BOX, PICKUP, CLASSIFY WEIGHT, NAVIGATE TO DROP-OFF, DEPOSIT, and RETURN TO LINE — as a single master VI, and tuned every sensor threshold used to trigger transitions between states.",
      roleDetails: [
        "Programmed dual-sensor differential steering for line following (left sensor sees black → turn left, right → turn right, both → gap/intersection handling)",
        "Tuned the ultrasonic detection threshold (tested at 15cm and 10cm before settling on 5cm) for reliable pickup triggering",
        "Programmed the pickup sequence (stop → close forks → raise to carry height → confirm grip via motor stall detection) and tuned grab power (tested at 25 and 20 before settling on 40)",
        "Implemented gyro-based weight classification, setting the tilt-rate threshold that separates organic from metal bins",
        "Programmed color-zone detection for drop-off routing and the deposit/return sequences",
        "Ran and analyzed the Activity 9 statistical testing — 20 trials each for correction rate and lap time",
      ],
      issues: [
        {
          issue: "A single color sensor couldn't reliably follow dashed sections of the track — it lost the line at gaps and didn't recover consistently.",
          fix: "Rewrote the line-following logic around two color sensors instead of one, letting the robot detect which side it had drifted off the line and actively correct instead of stopping to search.",
        },
        {
          issue: "The robot would stop dead whenever both sensors saw black at once (intersections and wide gaps), which the original two-state steering logic didn't handle.",
          fix: "Added a dedicated case to the state machine for the dual-black condition instead of letting it fall through to the default stop behavior.",
        },
        {
          issue: "After depositing a box, the forklift would sometimes re-detect and re-pick it up.",
          fix: "Traced it to the arms not opening fully after deposit — extended the arm-open sequence to its full range so the box clears the forks completely before the robot backs away.",
        },
        {
          issue: "Line following worked in isolation and the pickup mechanism worked in isolation, but running them together on a live track surfaced failures neither subsystem test caught.",
          fix: "Moved to full end-to-end integration testing earlier in the schedule instead of validating subsystems separately — the approach behind our Activity 9 statistical testing (33.69s mean lap time, 85% clean-run rate).",
        },
      ],
    },
  },
  {
    id: 11,
    slug: "esp32-smart-flower-pot",
    title: "ESP32-CAM Smart Flower Pot",
    description: "IoT birthday gift — an ESP32-CAM detects a face, triggers LED animations, and displays personalized messages on an LCD. Fully remote-controllable via a cloud-connected Next.js web dashboard.",
    image: "",
    gallery: [],
    technologies: ["ESP32-CAM", "ESP32-C3", "MQTT", "Next.js", "Face Detection"],
    category: "Personal",
    github: "",
    demo: "",
    featured: false,
    details: {
      deliverables: [
        "Face-detection pipeline reliably triggering LED animations and personalized LCD messages",
        "Remote web dashboard for uploading new messages and live camera access",
        "Dual-MCU firmware (ESP32-CAM for vision, ESP32-C3 for peripherals) synced over UART",
        "MQTT-over-TLS integration via HiveMQ Cloud for remote control",
        "3D-printed enclosure housing both PCBs, the LCD, and internal wiring",
      ],
      role: "Solo build — I architected the dual-MCU split, wrote firmware for both chips, and built the Next.js dashboard end-to-end.",
      roleDetails: [
        "Defined the dual-MCU architecture to offload vision processing from peripheral control",
        "Wrote PlatformIO firmware for the ESP32-CAM: face-detection pipeline using its built-in ML model + UART TX on detection",
        "Wrote PlatformIO firmware for the ESP32-C3: UART RX handler, LED PWM animations (pulse, wave, sparkle, heartbeat), I2C LCD driving",
        "Integrated MQTT with TLS over HiveMQ Cloud for reliable remote command delivery",
        "Built the Next.js + Tailwind web dashboard with preset message slots and a LED pattern selector, deployed to Vercel",
        "3D-printed the flower pot enclosure and validated the full pipeline: face in frame → UART trigger → LED animation + LCD message update",
      ],
      issues: [
        {
          issue: "[Add a specific issue you ran into here]",
          fix: "[And how you diagnosed and fixed it]",
        },
      ],
    },
  },
];

export const experienceData = [
  {
    id: 0,
    title: "Electrical Engineering Co-op",
    company: "TREW Automation",
    location: "West Chester, Ohio",
    period: "Aug 2026 - Dec 2026",
    description: "Accepted 1st co-op position focused on electrical drawings and design at an automation and controls engineering firm.",
    achievements: [
      "Accepted offer — starting Fall 2026",
      "Focus: electrical drawings, designs, and automation systems",
    ],
    upcoming: true,
  },
  {
    id: 1,
    title: "Junior Tractive Battery Engineer",
    company: "Bearcats Electric Racing",
    location: "University of Cincinnati",
    period: "Aug 2025 - Present",
    description: "Supporting the design and integration of high-voltage battery systems for a Formula SAE electric race car.",
    achievements: [
      "Won 1st Place (Student Organization category) at CEAS Expo 2026, presented by Marmon Holdings",
      "Completed EV4 CAN DAQ system — Raspberry Pi with CAN HAT reads live frames from can0 at 500 kbps, decodes signals via DBC files using cantools, logs timestamped CSVs, streams batched data to InfluxDB Cloud, and visualizes live telemetry in Grafana dashboards",
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

export const testimonialsData: {
  id: number;
  name: string;
  relationship: string;
  rating: number;
  comment: string;
  date: string;
}[] = [
  {
    id: 1,
    name: "Peter Bohlen",
    relationship: "Teammate",
    rating: 5,
    comment: "Extremely proactive in seeking out action items to assist the electronics, battery and powertrain teams of Bearcats Electric Racing. A self stater who seeks out connections with other engineers who can offer a new perspective. Extremely diligent in his areas of interest",
    date: "2026-06",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
