export interface ResumeExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  org: string;
  bullets: string[];
}

export interface ResumeInvolvement {
  org: string;
  role: string;
  place: string;
  date: string;
}

/** Structured content mirroring the user's CV, so the resume page renders
 * real content in the site's own design system rather than embedding or
 * linking out to a bare PDF. Keep this in sync with public/files/osman-zakaria-cv.pdf
 * if either one changes. */
export const RESUME = {
  name: "Osman Zakaria",
  title: "QA Engineer / Software Engineer (Frontend and Automation)",
  phone: "0245000709",
  linkedin: "https://www.linkedin.com/in/osman-zakaria-6577b4247",
  github: "https://github.com/REGENCY-14/",
  pdfHref: "/files/osman-zakaria-cv.pdf",

  summary:
    "QA Engineer with a strong background in frontend development and a growing specialization in software testing, test automation, and quality assurance processes. Experienced in building scalable web applications while ensuring high-quality delivery through structured testing, bug tracking, and validation. Combines development expertise with QA practices to improve product reliability and user experience.",

  education: {
    school: "University of Mines and Technology, Tarkwa",
    period: "Graduated 2025",
    major: "Computer Science and Engineering",
    coursework: [
      "Object-Oriented Programming and Data Structures",
      "Intro to Design and Programming for Web (HTML & CSS)",
      "Intermediate Design and Programming for Web (PHP & SQL)",
      "Introduction to Database Systems",
      "Operating Systems",
      "Human and Computer Interaction",
    ],
  },

  experience: [
    {
      company: "Amalitech",
      location: "Kumasi, Ghana",
      role: "QA Developer",
      period: "November 2025 – Present",
      bullets: [
        "Designed and executed manual and automated test cases based on user stories and acceptance criteria",
        "Performed functional and regression testing to ensure application stability and quality",
        "Developed automated tests using Selenium, Selenide, and Rest Assured for UI and API validation",
        "Identified, documented, and tracked defects with clear reproduction steps and expected vs. actual results",
        "Collaborated with developers in an Agile environment to validate features and verify bug fixes",
      ],
    },
    {
      company: "Bismuth Incorporation",
      location: "Hybrid",
      role: "Frontend Developer",
      period: "September 2023 – 2025",
      bullets: [
        "Collaborated with the Bismuth Inc. team to build a modern company website, boosting user engagement by 60% using HTML, CSS, JavaScript, React.js, and Next.js; ensured responsive design and used Git for version control",
        "Developed a showcase website for Bit Labs, a Bismuth Inc. sub-company, to highlight its STEM training services",
      ],
    },
    {
      company: "Z-Treebiz",
      location: "Tamale, Ghana",
      role: "IT Specialist",
      period: "October 2019 – Present",
      bullets: [
        "Utilized Microsoft Excel for data entry, analysis, and reporting to support business operations",
        "Managed document creation and formatting in Microsoft Word while assisting with administrative tasks in a remote work environment",
      ],
    },
    {
      company: "DataTalks Club",
      location: "Remote",
      role: "Trainee",
      period: "September 2024 – January 2025",
      bullets: [
        "Completed a 4-month training in ML, deep learning, and AI with hands-on Python experience",
        "Developed AI projects and earned certification upon completion",
      ],
    },
  ] satisfies ResumeExperience[],

  projects: [
    {
      name: "BitLabs Showcase Website",
      org: "BitLab",
      bullets: [
        "Designed and developed a responsive website to showcase BitLabs' STEM training programs",
        "Implemented smooth navigation and interactive UI using HTML, Tailwind CSS, and JavaScript",
      ],
    },
    {
      name: "Bismuth Showcase Website",
      org: "Bismuth",
      bullets: [
        "Collaborated with a cross-functional team to build a modern company website for Bismuth Inc.",
        "Used React.js to implement dynamic content and improve performance",
        "Improved user interface design, resulting in a 60% increase in user engagement",
      ],
    },
    {
      name: "E-Commerce FAQ Retrieval System",
      org: "Streamlit",
      bullets: [
        "Developed an AI-powered FAQ retrieval system for e-commerce using a static database on Hugging Face for fast, accurate customer responses",
      ],
    },
  ] satisfies ResumeProject[],

  skills: {
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "PHP",
      "MySQL",
      "Excel",
      "Python",
    ],
    qa: [
      "Manual Testing (Functional, Regression, UI Testing)",
      "Test Case Design & Execution",
      "Bug Reporting & Tracking (Jira)",
      "API Testing (Postman)",
      "Test Planning & Test Scenarios",
      "SDLC & STLC Understanding",
    ],
  },

  involvement: [
    { org: "GMSA-UMaT", role: "Chief Editor", place: "University of Mines and Technology", date: "2023" },
    { org: "Robotics Club", role: "Treasurer", place: "St. James Seminary and Senior High School", date: "August 2021" },
  ] satisfies ResumeInvolvement[],
};
