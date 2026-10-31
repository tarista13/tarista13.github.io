export type Role = {
  title: string;
  type: string;
  dates: string;
  summary: string;
  details?: string[];
};

export type Project = {
  title: string;
  type: string;
  techStack: string[];
  description: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  links: { label: "Live" | "GitHub"; href: string }[];
};

export const resumeHref = "/resume/Arista_Tyler_Resume.pdf";
export const projectArchiveHref = "https://github.com/tarista13?tab=repositories";

export const socials = {
  github: "https://github.com/tarista13",
  linkedin: "https://www.linkedin.com/in/tyler-arista/",
  instagram: "https://www.instagram.com/t_arista13/",
  twitter: "https://twitter.com/t_arista13",
  email: "mailto:tylerarista@gmail.com",
};

export const experience = {
  company: "Steelcase",
  location: "Grand Rapids, MI",
  logo: "/steelcaseLogo.png",
  roles: [
    {
      title: "Applications Engineer, Associate",
      type: "Full-time",
      dates: "May 2025 – Present",
      summary:
        "Primary technical contact for SAP TM across the end-to-end transportation process and its integrations with RoadVision, MacroPoint, project44, and OpenText EDI, resolving production incidents through ABAP debugging and root-cause analysis.",
      details: [
        "Restored carrier tracking after ~500 MacroPoint messages failed by tracing a changed vendor certificate and reprocessing the backlog, and isolated a RoadVision access issue across SAP, VPN, and network layers to prevent missed pickups.",
        "Authored functional specs and led testing for SAP TM and EWM developments during a large-scale SAP transformation, build ABAP enhancements, maintain a .NET reporting app and Selenium test suite, and onboarded two engineers on SAP TM.",
      ],
    },
    {
      title: "Software Engineer Intern",
      type: "Internship",
      dates: "May 2024 – May 2025",
      summary:
        "Developed features for a full-stack ASP.NET MVC application (C#, SQL) supporting custom product orders for 700+ dealers and 1,000+ requests per month, and integrated it with ServiceNow to automatically create incidents during custom quoting.",
    },
    {
      title: "IT Security Intern",
      type: "Internship",
      dates: "May 2023 – Aug 2023",
      summary:
        "Implemented a password protection standard for ~12,700 users by deploying and configuring password protection proxies and domain controllers, reducing exposure to compromised credentials.",
    },
  ] satisfies Role[],
};

export const education = {
  school: "Calvin University",
  degree: "B.S. Computer Science | Data Science Minor",
  logo: "/Calvin_Knights.webp",
  coursework: [
    "Web Development",
    "Database Management",
    "AI & Machine Learning",
    "Predictive Analytics",
    "Applied Data Analysis",
    "Software Engineering",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C#", "TypeScript/JavaScript", "ABAP","Python", "SQL"] },
  { group: "Frameworks", items: ["ASP.NET Core/MVC", "Angular", "React", "Node.js"] },
  { group: "SAP & Integration", items: ["SAP TM", "SAP CPI", "ABAP debugging", "REST APIs", "EDI"] },
  { group: "Data", items: ["SQL Server", "PostgreSQL", "Firebase", "SQLite"] },
  {
    group: "Tools",
    items: ["Git", "Azure DevOps", "Azure", "CI/CD", "Selenium", "ServiceNow", "Postman"],
  },
];

export const projects: Project[] = [
  {
    title: "Calvin Electronic Medical Record",
    type: "Senior Project",
    techStack: ["Angular", "Node.js", "Firebase"],
    description:
      "Built OB/GYN and pediatric assessment modules for a nursing-education EMR, with structured clinical data entry, data retrieval, and PDF export for clinical simulations. Met weekly with nursing faculty to turn real clinical workflows into production-ready code.",
    image: "/calvinEMR.png",
    imageAlt: "Calvin EMR Project",
    links: [{ label: "Live", href: "https://calvin-emr.web.app/about-us" }],
  },
  {
    title: "Personal Finance Dashboard",
    type: "Personal",
    techStack: ["Next.js", "Django", "Plaid API"],
    description:
      "A full-stack web app that helps users track spending, savings, and transactions in one place. Built with Django, Plaid API, and Recharts, it securely connects to bank accounts and visualizes income, expenses, and net worth through interactive charts.",
    image: "/financeDashboard.png",
    imageAlt: "Django Project",
    links: [{ label: "GitHub", href: "https://github.com/tarista13/finance_dashboard" }],
  },
  {
    title: "Brick Breaker",
    type: "CS108 Final Project",
    techStack: ["Python"],
    description:
      "Designed and implemented a Gui-based Python application that allows the user to play a brick breaker game that implements a file-based leaderboard.",
    image: "/brickBreaker.png",
    imageAlt: "Bricker Breaker Application",
    imageFit: "contain",
    links: [{ label: "GitHub", href: "https://github.com/tarista13/Brick-Breaker" }],
  },
];
