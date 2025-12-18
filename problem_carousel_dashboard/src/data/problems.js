export const problems = [
  {
    title: "Privacy-Preserving AI-Driven SOS Campus Safety & Emergency Response",
    problemStatement:
      "Design a software-only, privacy-preserving SOS platform to enable rapid emergency reporting and intelligent incident response across large educational campuses.",
    sdgs: ["SDG 3", "SDG 5", "SDG 16"],
    problemDescription:
      "Educational campuses face challenges in responding quickly and effectively to emergencies such as medical incidents, harassment, accidents, or security threats. The platform should allow users to trigger alerts and use AI to interpret text/voice inputs, assess urgency, prioritize incidents, and coordinate responses—without continuous tracking or long-term storage of personal/location data.",
    domain: ["AI & Machine Learning", "Emergency Management", "Privacy-Preserving Systems"],
    sampleTools: ["React", "Node.js", "Python (spaCy/Whisper/TensorFlow)", "PostgreSQL"],
  },
  {
    title: "Privacy-Preserving Campus Visitor Entry Management",
    problemStatement:
      "Develop a software-based visitor entry system for large campuses that ensures access control and security without collecting or storing personal visitor data.",
    sdgs: ["SDG 11", "SDG 16"],
    problemDescription:
      "Large campuses handle thousands of visitors daily. Build a privacy-by-design system that categorizes entrants and enforces access control using ephemeral identifiers, decentralized validation, and centralized policy enforcement without storing personal information.",
    domain: ["Software Systems Design", "Privacy Engineering", "Access Control"],
    sampleTools: ["React", "Redis/PostgreSQL", "QR/session IDs", "Token-based auth"],
  },
  {
    title: "Privacy-Aware Intelligent Fraud Detection for Vulnerable Banking Users",
    problemStatement:
      "Design a proactive, privacy-aware fraud detection system to protect digitally vulnerable banking users from social engineering attacks.",
    sdgs: ["SDG 1", "SDG 8", "SDG 9"],
    problemDescription:
      "Rural, elderly, and low-digital-literacy users are targeted by phishing and impersonation. The system should detect suspicious behaviour in real time by analysing transaction context, behavioural patterns, and communication cues, while minimising data retention and avoiding intrusive profiling.",
    domain: ["Cybersecurity", "FinTech", "Behavioral ML"],
    sampleTools: ["Python (Scikit-learn/TensorFlow)", "Django/FastAPI", "PostgreSQL", "Chart.js/D3.js"],
  },
  {
    title: "Privacy-Preserving AI-Based Learning Platform for Hearing-Impaired Users",
    problemStatement:
      "Create a privacy-preserving learning platform that enables hearing-impaired users to learn using sign-language-based and visual content in regional languages.",
    sdgs: ["SDG 4", "SDG 10"],
    problemDescription:
      "Design a platform that converts text and speech into sign-language and visual learning formats, supports interactive lessons and assessments, and enables two-way communication while minimising data collection and ensuring secure content delivery.",
    domain: ["EdTech", "Accessibility", "AI Content Transformation"],
    sampleTools: ["React/Flutter", "OpenCV", "Python ML", "Firebase"],
  },
  {
    title: "Privacy-Preserving Multilingual Assistive Communication & Navigation",
    problemStatement:
      "Develop a privacy-preserving assistive platform to help hearing- and visually-impaired users communicate and navigate public spaces independently.",
    sdgs: ["SDG 3", "SDG 4", "SDG 10", "SDG 11"],
    problemDescription:
      "Build a multilingual assistive platform that provides real-time text, speech, sign-language, visual, and haptic conversions across Indian regional languages while avoiding continuous tracking and storing minimal personal data.",
    domain: ["Assistive Technology", "Accessibility", "Multilingual Systems"],
    sampleTools: ["Flutter/React Native", "Speech-to-Text APIs", "i18n libraries", "Node.js/Firebase"],
  },
  {
    title: "Blockchain-Based Supply Chain Transparency for Agricultural Produce",
    problemStatement:
      "Design a blockchain-based platform to ensure transparency and fairness in agricultural supply chains from farm to consumer.",
    sdgs: ["SDG 2", "SDG 12", "SDG 8"],
    problemDescription:
      "Create a decentralized system that tracks agricultural produce using blockchain so farmers, distributors, and retailers can verify transactions and consumers can trace origin, quality, and pricing—reducing fraud and improving fairness.",
    domain: ["Blockchain", "Supply Chain", "AgriTech"],
    sampleTools: ["Ethereum/Hyperledger", "Solidity", "React", "QR/IPFS"],
  },
];
