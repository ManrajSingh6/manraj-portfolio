export interface ExperienceData {
  role: string;
  company: string;
  date: string;
  location: string;
  descriptionPoints: string[];
  imageSource: string;
}

export interface ProjectData {
  title: string;
  imagePath: string;
  description: string;
  badges: string[];
  liveLink?: string;
  repoLink: string;
}

export const EXPERIENCE_DATA: ExperienceData[] = [
  {
    role: "Full Stack Developer",
    company: "Calgary Hacks Hackathon",
    date: "March 2025",
    location: "Calgary, AB",
    descriptionPoints: [
      "Developed a custom CNN model to classify images of different wildlife species",
      "Architected a full-stack web application to allow users to upload images and view classification results",
      "TypeScript, Python, Express, Node, React, PostgreSQL, SupaBase",
    ],
    imageSource: "calgaryHacksIcon.jpg",
  },
  {
    role: "Software Developer Intern",
    company: "Energy Toolbase",
    date: "May 2023 - August 2024",
    location: "Calgary, AB",
    descriptionPoints: [
      "Modelling, intelligent control and monitoring of energy storage and photovoltaic systems!",
      "Feature development and testing containerized software",
      "TypeScript, GraphQL, React and Node",
    ],
    imageSource: "ETBIcon.png",
  },
  {
    role: "Computer Network & Web Development Intern",
    company: "Omnivir",
    date: "July 2022 - May 2023",
    location: "Remote",
    descriptionPoints: [
      "Developed full-stack applications",
      "Created E-commerce stores using Shopify and integrated online payment systems",
      "JavaScript, HTML and CSS",
    ],
    imageSource: "OmnivirIcon.jpg",
  },
  {
    role: "Developer",
    company: "HYL Hackathon",
    date: "March 2022 (24 hour hackathon)",
    location: "Calgary, AB",
    descriptionPoints: [
      "Worked in a team of two to create a desktop GUI application to teach young users about Java",
      "Java and Swing",
    ],
    imageSource: "HYL.jpg",
  },
];

export const PROJECT_DATA: ProjectData[] = [
  {
    title: "Health+",
    imagePath: "healthplusLogo.png",
    description:
      "Developed a Health Management System for admin, doctors, nurses and patients. Allowed all users to perform important operations (creating, reading, updating and deleting) on information based on their user type!",
    badges: ["MySQL", "JavaScript", "React", "Node/Express"],
    repoLink: "https://github.com/ManrajSingh6/CPSC471_Project",
  },
  {
    title: "The Loop",
    imagePath: "theloopLogo.png",
    description:
      "Implemented an app similar to Reddit! Users can create, browse, edit and delete posts belonging to various threads! Additionally developed a user dashboard to manage key information!",
    badges: ["MongoDB", "JavaScript", "React", "Node/Express", "AWS S3"],
    liveLink: "https://seng401-the-loop.onrender.com/",
    repoLink: "https://github.com/ManrajSingh6/SENG401_Group18_Project",
  },
  {
    title: "Zelda Item Tracker",
    imagePath: "zeldaItemTracker.png",
    description:
      "Developed a frontend app leveraging the hyrule-compendium API to view stats about different items from Zelda: Breath of The Wild!",
    badges: ["React", "JavaScript"],
    liveLink: "https://manrajsingh6.github.io/zelda-item-tracker/",
    repoLink: "https://github.com/ManrajSingh6/zelda-item-tracker",
  },
  {
    title: "Vehicle Classification Model",
    imagePath: "vehicleModelResults.png",
    description:
      "Developed a terminal-based application using Jupyter Notebook to classify types of vehicles when provided various input. Trained the KNN-model to have an accuracy of 94.6%.",
    badges: ["Python", "Matplotlib", "Sckit-learn", "Pandas"],
    repoLink:
      "https://github.com/ManrajSingh6/Machine-Learning-Prediction-Model-KNN-",
  },
  {
    title: "Weather Data Analyzer",
    imagePath: "weatherImg.png",
    description:
      "Used Python to open, organize and store 30 years of Calgary weather data. Performed statistical operations to analyze the data, then generated graphs for visual representation.",
    badges: ["Python", "Matplotlib", "Numpy", "Pandas"],
    repoLink: "https://github.com/ManrajSingh6/CSV-Weather-Data-Analysis",
  },
  {
    title: "Food Bank Order System",
    imagePath: "orderform.png",
    description:
      "Created a GUI app allowing users to order a food hamper based on family size. Developed a custom algorithm to generate hamper content to meet nutritional needs (97% efficient).",
    badges: ["Java", "Swing", "MySQL", "JUnit"],
    repoLink: "https://github.com/ManrajSingh6/Food-Bank-Order-System",
  },
];
