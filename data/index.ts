// import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Team", link: "#team" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Securing Systems with Strategic Insight",
    description:
      "SecureOut is a comprehensive cybersecurity platform designed to protect digital assets from modern threats. It combines advanced encryption, real-time threat detection, and robust user authentication to ensure secure operations for individuals and organizations. With a focus on usability and reliability, SecureOut offers tools like vulnerability scanning and detailed analytics to empower users with actionable insights for safeguarding their systems. Whether you're a developer, business, or security enthusiast, SecureOut provides a seamless and secure experience to protect what matters most.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Strengthening Security with Sophisticated Strategies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Advanced Security Solutions",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Exploring Innovative Security Solutions",
    description:
      "Delving into the future of cybersecurity by designing and implementing innovative security tools and practices. This initiative focuses on addressing emerging threats, enhancing defensive mechanisms, and pushing the boundaries of modern cybersecurity. Through comprehensive research, cutting-edge technology adoption, and collaboration, we aim to provide robust, scalable, and efficient solutions tailored to safeguard digital assets in a rapidly evolving threat landscape.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project with us? Contact us anytime.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "secureHTTPs",
    des: "A tool to analyze the security configuration of websites, checking SSL/TLS setup, Content Security Policy (CSP), and certificate expiration, with recommendations for improvements.",
    details:
      "secureHTTPs is a comprehensive tool that assesses a website's security by inspecting various components such as SSL/TLS configuration, Content Security Policy (CSP) headers, and the expiration date of SSL certificates. By checking the protocol version, cipher suite, and certificate status, the tool helps identify weaknesses in a website's security setup. It also provides actionable recommendations for enhancing security, ensuring that websites comply with best practices to protect against attacks like man-in-the-middle and cross-site scripting (XSS).",
    img: "/1.png", // Update to the relevant image path
    iconLists: ["/py.svg"], // Example icons for Python, SSL, and CSP
    link: "https://github.com/eros938/Web-Security-Scanner", // Added link to the GitHub repo
  },
  {
    id: 2,
    title: "Spamy",
    des: "A Gmail filtering tool that analyzes email headers, links, attachments, and sources to detect spam and phishing.",
    details:
      "Spamy is an advanced Gmail filtering tool designed to help users automatically detect and block spam and phishing emails. It works by analyzing the email headers, links, attachments, and the sources of incoming emails. The tool checks for common signs of malicious emails, such as suspicious sender addresses, unusual attachment types, and deceptive link behaviors. Spamy helps protect users from phishing attacks, unwanted advertising, and other harmful email-based threats, ensuring safer email communication.",
    img: "/spamy.svg",
    iconLists: ["/py.svg"],
    link: "https://github.com/president-xd/Spamy", // Added `https://`
  },
  {
    id: 3,
    title: "xNIDDY",
    des: "A Python-based Network Intrusion Detection System (NIDS) that analyzes TCP, UDP, and ICMP packet traffic for potential intrusions.",
    details:
      "xNIDDY is a Python-based Network Intrusion Detection System (NIDS) that monitors network traffic in real-time. It analyzes packets from various protocols, including TCP, UDP, and ICMP, to detect suspicious activities and potential intrusions. The system is designed to identify a range of malicious activities, such as Denial of Service (DoS) attacks, unauthorized access attempts, and unusual traffic patterns that could signal an ongoing attack. By providing real-time alerts and in-depth analysis, xNIDDY helps network administrators identify and mitigate security threats before they cause significant damage.",
    img: "/xniddyy.svg",
    iconLists: ["/py.svg"],
    link: "https://github.com/president-xd/xNIDDY", // Added `https://`
  },
  {
    id: 4,
    title: "CSP Analyzer",
    des: "A tool to evaluate and recommend improvements for website Content Security Policy (CSP) headers to strengthen security against attacks.",
    details:
      "The CSP Analyzer is a specialized tool that inspects the Content Security Policy (CSP) headers of websites. CSP is a security feature used to prevent a range of attacks, including Cross-Site Scripting (XSS) and data injection attacks. This tool evaluates the effectiveness of a website's CSP and highlights areas where improvements can be made. It checks for missing or incomplete directives and ensures that only trusted content sources are allowed. The CSP Analyzer helps web developers and security professionals strengthen their websites' defense mechanisms by ensuring that CSP headers are configured correctly and securely.",
    img: "/2.png",
    iconLists: ["/py.svg"],
    link: "https://github.com/president-xd/Cryptix", // Added `https://`
  },
];

export const testimonials = [
  {
    quote:
      "SecureOUT's expertise in cyber security is both profound and transformative. Their strategic insights and hands-on approach have been critical in advancing our institution's security posture. The team's ability to navigate complex challenges with precision and foresight is a testament to their exceptional skills. SecureOUT's contributions to the field are invaluable, making them a respected entity among peers.",
    name: "Dr Kashif Khifayat",
    title: "Director of National Center for Cyber Security",
  },
  {
    quote:
      "SecureOUT's expertise in cyber security is unmatched. Their ability to identify vulnerabilities and implement robust solutions was instrumental in securing our infrastructure. Their commitment to staying ahead of emerging threats is truly commendable.",
    name: "Sangeen Khattak",
    title: "Security Researcher at NCCS, Pakistan",
  },
  {
    quote:
      "SecureOUT's passion for cyber security shines through in every project they undertake. Their innovative approach and dedication to safeguarding our digital landscape have set new standards in the industry. SecureOUT is not just a consultancy; they are guardians of our most valuable data.",
    name: "Hilmand Khan",
    title: "CEO at TechBase",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloud",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "app",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Network Security Solutions",
    desc: "Our expertise in network security includes advanced Intrusion Detection Systems (IDS), Firewall Management, and Network Traffic Analysis. We design and deploy robust defenses to safeguard network infrastructures from unauthorized access and cyber threats, ensuring secure operations for our clients.",
    className: "md:col-span-2",
    thumbnail: "/nmap.svg",
  },
  {
    id: 2,
    title: "Red Teaming and Penetration Testing",
    desc: "Our Red Team specializes in web application and hardware penetration testing. We simulate real-world cyberattacks to identify vulnerabilities, assess security controls, and provide actionable insights to fortify defenses. This service ensures organizations are prepared against evolving cyber threats.",
    className: "md:col-span-2",
    thumbnail: "/Burpsuit.svg",
  },
  {
    id: 3,
    title: "Malware Analysis and Threat Intelligence",
    desc: "We offer in-depth malware analysis services to identify and neutralize malicious software targeting your systems. Our team specializes in reverse engineering, threat hunting, and providing actionable intelligence to strengthen defenses against sophisticated attacks.",
    className: "md:col-span-2",
    thumbnail: "/netguard.svg",
  },
  {
    id: 4,
    title: "Web and Software Security",
    desc: "We offer end-to-end web and software security services, focusing on vulnerability assessments, secure application development, and patch management. By identifying potential risks early, we help clients build resilient software and web systems that stand up to modern threats.",
    className: "md:col-span-2",
    thumbnail: "/cloud.svg",
  },
  {
    id: 5,
    title: "Hardware Security",
    desc: "Our team delivers expert hardware security solutions, including vulnerability assessments for hardware systems and securing IoT devices. By ensuring robust protection of physical assets, we mitigate risks in increasingly connected environments.",
    className: "md:col-span-2",
    thumbnail: "/app.svg",
  },
  {
    id: 6,
    title: "Custom Cybersecurity Training",
    desc: "We provide customized cybersecurity training programs for organizations to foster a culture of security awareness. These programs include hands-on workshops on ethical hacking, penetration testing, and best practices for mitigating cyber risks.",
    className: "md:col-span-2",
    thumbnail: "/host.svg",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Mohsin Mukhtiyar",
    role: "Founder",
    img: "/mohsinn.jpeg", // Ensure this path is correct
    description:
      "Network security specialist with expertise in securing systems, monitoring threats, and implementing robust cybersecurity measures.",
    linkedin: "https://www.linkedin.com/in/mohsin-lashari/",
    github: "#", // Add the GitHub link if applicable
    twitter: "#", // Add the Twitter link if applicable
    skills: [
      // { icon: "/security.svg", name: "Network Security" },
      // { icon: "/firewall.svg", name: "Firewall Management" },
      // { icon: "/linux.svg", name: "Linux Security" },
    ],
  },
  {
    id: 2,
    name: "Khizar Ali Shah",
    role: "Hardware Penetration Tester",
    img: "/khizar.jpg", // Ensure this path is correct
    description:
      "Hardware penetration tester with expertise in identifying vulnerabilities in hardware systems and ensuring robust security measures.",
    linkedin: "https://www.linkedin.com/in/khizar-ali-shah-410214233",
    github: "https://github.com/eros938",
    twitter: "#", // Add the Twitter link if applicable
    skills: [
      // { icon: "/hardware.svg", name: "Hardware Security" },
      // { icon: "/pentest.svg", name: "Penetration Testing" },
    ],
  },
  {
    id: 3,
    name: "Abdul Wahab Khan",
    role: "Hardware & Network Security",
    img: "/wahab.jpg", // Ensure this path is correct
    description:
      "Enthusiast in hardware and network security with a strong foundation in programming and securing critical systems.",
    linkedin: "https://www.linkedin.com/in/abdul-wahab-khan-312069270/",
    github: "#", // Add the GitHub link if applicable
    twitter: "#", // Add the Twitter link if applicable
    skills: [
      // { icon: "/hardware.svg", name: "Hardware Security" },
      // { icon: "/network.svg", name: "Network Security" },
      // { icon: "/programming.svg", name: "Programming" },
    ],
  },
  {
    id: 4,
    name: "Mudasir Shah",
    role: "Web Dev and Pentester",
    img: "/mudasirshah.jpeg", // Ensure this path is correct
    description:
      "Web Dev & Pentester skilled in Node.js, Express, and web security, focusing on secure apps and vulnerability identification",
    linkedin: "https://www.linkedin.com/in/mudasir-shah-1b6400279/",
    github: "https://github.com/el-noir",
    twitter: "#",
    skills: [
      // { icon: "/nodejs.svg", name: "Node.js" },
      // { icon: "/js.svg", name: "JavaScript" },
      // Additional skills can be uncommented as needed.
    ],
  },
  {
    id: 5,
    name: "Mazhar Saeed",
    role: "Software & Web Pen-tester",
    img: "/mazharsaeed.jpg", // Ensure this path is correct
    description:
      "Experienced in software testing and web penetration testing, with a focus on identifying and fixing vulnerabilities in applications.",
    linkedin: "https://www.linkedin.com/in/mazhar-saeed-8414682a7/", // Replace with the correct LinkedIn URL
    github: "", // Add the GitHub link if applicable
    twitter: "#", // Add the Twitter link if applicable
    skills: [
      // { icon: "/testing.svg", name: "Software Testing" },
      // { icon: "/pentest.svg", name: "Web Penetration Testing" },
    ],
  },
  {
    id: 6,
    name: "Ali Ijaz",
    role: "Malware Analyst",
    img: "/ali.jpg", // Ensure this path is correct
    description:
      "Malware Analyst focused on detecting, analyzing, and mitigating malware threats to enhance system security.",
    linkedin: "https://www.linkedin.com/in/ali-ijaz-098940228/",
    github: "#",
    twitter: "#",
    skills: [
      // { icon: "/security.svg", name: "Malware Analysis" },
      // { icon: "/security.svg", name: "Cybersecurity" },
      // { icon: "/network.svg", name: "Network Security" },
    ],
  },
  {
    id: 7,
    name: "Qazi Awais Qarni",
    role: "Social Media Handler",
    img: "/qazi.jpeg", // Ensure this path is correct
    description:
      "Managing and curating engaging social media content for digital presence and brand growth.",
    linkedin: "https://www.linkedin.com/in/shahid-ali-148b11251/",
    github: "#",
    twitter: "#",
    skills: [
      // { icon: "/social.svg", name: "Social Media Management" },
      // { icon: "/content.svg", name: "Content Creation" },
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/SecureOUT",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/secureout/",
  },
];
