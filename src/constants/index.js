import { kaggle, python, pandas, pytorch } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "Machine-learning",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Machine-learning",
    }
];

export const experiences = [
    {
        title: "Competition: ICR-Identifying Age-Related Condition (Rank 2004/6430).",
        company_name: "Kaggle",
        icon: kaggle,
        iconBg: "#accbe1",
        date: "May 2023 - Aug 2023",
        points: [
            "Developed a RandomForestRegression Model with sklearn module to predict age-related condition",
            "Adjusted model parameters to hyperparameters to avoid over-fitting",
            "Implemented KFOLD to evaluate the model on multiple set of data to detect issues related to underfitting or overfitting.",
            "Handled imbalanced data by weight-sampling to achieve more accurate results",
        ],
    },
    {
        title: "Competition: Stanford Ribonanza RNA Folding (Rank 354/755)",
        company_name: "Kaggle",
        icon: kaggle,
        iconBg: "#fbc3bc",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Developed Sinusoidal positional embedding module to incorporate positional information into RNA module with pytorch to predict RNA structure.",
            "Utilized K-fold to cross validate RNA model to improve prediction result.",
            "Tracked training process with a simple process bar created with python tqdm module.",
            "Organized and diversified workload for a team of 3 to deliver the project within deadlines.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/tltommu',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tommy-lam-a9579524a/',
    }
];

export const projects = [
    {
        iconUrl: kaggle,
        theme: 'btn-back-red',
        name: 'Competition: Stanford Ribonanza RNA Folding (Rank 354/755)',
        description: 'Developed Sinusoidal positional embedding module to incorporate positional information into RNA module with pytorch to predict RNA structure.',
        link: 'https://www.kaggle.com/competitions/stanford-ribonanza-rna-folding/leaderboard',
    },
    {
        iconUrl: kaggle,
        theme: 'btn-back-green',
        name: 'Competition: ICR-Identifying Age-Related Condition (Rank 2004/6430).',
        description: 'Developed a RandomForestRegression Model with sklearn module to predict age-related condition.',
        link: 'https://www.kaggle.com/competitions/icr-identify-age-related-conditions/leaderboard',
    },
    {
        iconUrl: html,
        theme: 'btn-back-blue',
        name: 'Simple Crud App',
        description: 'Designed and built a simple web-app allow user to create, edit, update and delete post',
        link: 'https://yellow-sky-094200410.4.azurestaticapps.net/',
    },
];