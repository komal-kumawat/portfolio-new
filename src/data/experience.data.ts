export type ExperienceItem = {
  company: string;
  position: string;
  duration: string;
  location: string;
  details: string[];
  link?: string;
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "IBM",
    position: "Software Intern",
    duration: "June 2024 - Aug 2024",
    location: "Remote",
    details: [
      "Built a full-stack MERN web application with Tailwind CSS to promote SDG-3: Good Health & Well-being, focusing on mental and physical wellness.",
      "Designed and deployed an interactive UI that improved content accessibility, leading to 30% faster navigation and higher user engagement.",
      "Implemented a scalable backend with MongoDB & Express, supporting 100+ daily active users and enabling smooth content delivery for awareness campaigns.",
    ],
  },
  {
    company: "IIT Ropar",
    position: "Research Intern",
    duration: "Mar 2024",
    location: "Ropar",
    details: [
      "Developed ConvSFNet, a novel deep learning architecture combining ConvNeXt, SE blocks, and FPN for disaster image analysis.",
      "Benchmarked on the MEDIC dataset, outperforming models like DenseNet121, ResNet50, and EfficientNet-B1.",
      "Improved average F1-score by 2.41%, excelling in severe damage classification for real-time disaster response.",
    ],
  },
];
