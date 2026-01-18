export type EducationItem = {
  position: string;
  company: string;
  duration: string;
  cgpa?: string;
  location?: string;
  details?: string[];
  logo: string;
  techStack?: string[];
  link?: string;
};

export const EDUCATION: EducationItem[] = [
  {
    position: "Bachelor of Technology | CSE",
    company: "NIMS Institute of Engineering & Technology",
    duration: "2022–2026",
    cgpa: "8.8",
    location: "Jaipur, Rajasthan",
    logo: "/nims.png",
    techStack: [
      "Data Structures",
      "Algorithms",
      "Web Development",
      "AI/ML",
      "Database Systems",
    ],
    details: [
      "Gained strong foundational knowledge in Computer Science and Engineering.",
      "Worked on multiple projects involving MERN stack, web development, and AI/ML applications.",
      "Actively participated in college technical activities and workshops.",
    ],
    link: "https://nims.edu.in/",
  },
];
