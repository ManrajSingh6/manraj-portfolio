export interface experienceData {
    role: string;
    company: string;
    date: string;
    location: string;
    descriptionPoints: string[];
    imageSource: string;
}

export interface projectInfo {
    projectTitle: string;
    projectImagePath: string;
    projectDescription: string;
    projectBadges: string[];
    projectLiveLink?: string;
    projectGithubLink: string
}

export const allExperienceData: experienceData[] = [
    {
        role: "Current Software Developer Intern",
        company: "Energy Toolbase",
        date: "May 2023 - August 2024",
        location: "Calgary, AB",
        descriptionPoints: [
            "Modelling, intelligent control and monitoring of energy storage and photovoltaic systems!",
            "Feature development and testing containerized software",
            "TypeScript, Python, C#, GraphQL and Node"
        ],
        imageSource: "ETBIcon.png"
    },
    {
        role: "Computer Network & Web Development Intern",
        company: "Omnivir",
        date: "July 2022 - May 2023",
        location: "Remote",
        descriptionPoints: [
            "Developed full-stack applications",
            "Created E-commerce stores using Shopify and integrated online payment systems",
            "JavaScript, HTML and CSS"
        ],
        imageSource: "OmnivirIcon.jpg"
    },
    {
        role: "Developer",
        company: "HYL Hackathon",
        date: "March 2022 (24 hour hackathon)",
        location: "Calgary, AB",
        descriptionPoints: [
            "Worked in a team of two to create a desktop GUI application to teach young users about Java",
            "Java and Swing"
        ],
        imageSource: "HYL.jpg"
    }
]

export const projectData: projectInfo[] = [
    {
        projectTitle: 'Health+',
        projectImagePath: 'healthplusLogo.png',
        projectDescription: 'Developed a Health Management System for admin, doctors, nurses and patients. Allowed all users to perform important operations (creating, reading, updating and deleting) on information based on their user type!',
        projectBadges: ['MySQL', 'JavaScript', 'React', 'Node/Express'],
        projectGithubLink: 'https://github.com/ManrajSingh6/CPSC471_Project'
    },
    {
        projectTitle: 'The Loop',
        projectImagePath: 'theloopLogo.png',
        projectDescription: 'Implemented an app similar to Reddit! Users can create, browse, edit and delete posts belonging to various threads! Additionally developed a user dashboard to manage key information!',
        projectBadges: ['MongoDB', 'JavaScript', 'React', 'Node/Express', 'AWS S3'],
        projectLiveLink: 'https://seng401-the-loop.onrender.com/',
        projectGithubLink: 'https://github.com/ManrajSingh6/SENG401_Group18_Project'
    },
    {
        projectTitle: 'Zelda Item Tracker',
        projectImagePath: 'zeldaItemTracker.png',
        projectDescription: 'Developed a frontend app leveraging the hyrule-compendium API to view stats about different items from Zelda: Breath of The Wild!',
        projectBadges: ['React', 'JavaScript'],
        projectLiveLink: 'https://manrajsingh6.github.io/zelda-item-tracker/',
        projectGithubLink: 'https://github.com/ManrajSingh6/zelda-item-tracker'
    },
    {
        projectTitle: 'Vehicle Classification Model',
        projectImagePath: 'vehicleModelResults.png',
        projectDescription: 'Developed a terminal-based application using Jupyter Notebook to classify types of vehicles when provided various input. Trained the KNN-model to have an accuracy of 94.6%.',
        projectBadges: ['Python', 'Matplotlib', 'Sckit-learn', 'Pandas'],
        projectGithubLink: 'https://github.com/ManrajSingh6/Machine-Learning-Prediction-Model-KNN-'
    },
    {
        projectTitle: 'Weather Data Analyzer',
        projectImagePath: 'weatherImg.png',
        projectDescription: 'Used Python to open, organize and store 30 years of Calgary weather data. Performed statistical operations to analyze the data, then generated graphs for visual representation.',
        projectBadges: ['Python', 'Matplotlib', 'Numpy', 'Pandas'],
        projectGithubLink: 'https://github.com/ManrajSingh6/CSV-Weather-Data-Analysis'
    },
    {
        projectTitle: 'Food Bank Order System',
        projectImagePath: 'orderform.png',
        projectDescription: 'Created a GUI app allowing users to order a food hamper based on family size. Developed a custom algorithm to generate hamper content to meet nutritional needs (97% efficient).',
        projectBadges: ['Java', 'Swing', 'MySQL', 'JUnit'],
        projectGithubLink: 'https://github.com/ManrajSingh6/Food-Bank-Order-System'
    }
]