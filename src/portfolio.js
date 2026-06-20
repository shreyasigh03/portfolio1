/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anu Shreeya Singh",
  title: "Hi, I'm Anu Shreeya Singh",
  subTitle: emoji(
    "A B.Tech CSE student specializing in Data Science & AI, working at the intersection of full-stack development and applied AI to build practical, system-driven products."
  ),
  resumeLink: "/anu-shreeya-singh-resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shreyasigh03",
  linkedin: "https://www.linkedin.com/in/anu-shreeya-singh-6aa2a5328",
  gmail: "shreyasigh03@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "https://www.instagram.com/shhreyahehe",
  commudle: "https://commudle.com/users/anushreeyasingh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full-stack development with a growing focus on AI, data-driven systems, and practical problem solving.",
  skills: [
    emoji("⚡ Building responsive and interactive web applications using modern frontend technologies"),
    emoji("⚡ Developing full-stack applications with clean backend logic and APIs"),
    emoji("⚡ Exploring AI, data science concepts, and system-driven problem solving"),
    emoji("⚡ Actively learning DSA and backend technologies to strengthen core foundations")
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL / Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SRM University, Sonipat, Haryana",
      logo: require("./assets/images/srmuh logo.png"),
      subHeader: "B.Tech in Computer Science Engineering (Data Science & Artificial Intelligence)",
      duration: "2022 – Present",
      desc: "Currently in 3rd year (6th semester), focusing on full-stack development, data science, and applied AI.",
      descBullets: [
        "CGPA: 7.2",
        "Core focus on Data Science, AI, and software engineering fundamentals"
      ]
    },
    {
      schoolName: "Himalaya Public Senior Secondary School, Delhi",
      logo: require("./assets/images/hps logo.png"),
      subHeader: "Class XII – Science Stream",
      duration: "2020 – 2021",
      desc: "Completed senior secondary education with a science background.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Web Developer Intern",
      company: "InternPE",
      companylogo: null,
      date: "Feb 2026 – Mar 2026",
      desc: "Working as a full-stack web developer intern, contributing to real-world web applications and improving both frontend and backend functionality.",
      descBullets: [
        "Developing responsive frontend features using modern web technologies",
        "Working on backend logic, APIs, and basic database integration"
      ]
    },
    {
      role: "Core Team Member – Web Developer",
      company: "Ailytics (College Technical Club)",
      companylogo: null,
      date: "2025 – Present",
      desc: "Active core team member contributing to web development initiatives and technical activities within the college club.",
      descBullets: [
        "Built and maintained web components for club initiatives",
        "Collaborated with team members on technical planning and execution"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Selected projects showcasing full-stack development and applied AI work",
  projects: [
    {
        image: null,
       projectName: "VISITRA",
       projectDesc: "AI-based Smart Visitor Management System featuring OTP email verification, admin approval workflows, real-time visitor monitoring, and automated notifications using Nodemailer.",
       footerLink: [
         {
           name: "Live Demo",
           url: "#"
         },
         {
           name: "Source Code",
           url: "https://github.com/shreyasigh03/visitor-management"
         }
       ]
    },  
    {
      image: null,
      projectName: "OPTIVION",
      projectDesc:
        "An interactive project exploring analog and light-based computation for AI. Visualizes wave interference, analog signals, and machine-learning decision boundaries to build intuition for physics-inspired AI systems.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://lnkd.in/gfJQY4-3"
        },
        {
          name: "Source Code",
          url: "https://lnkd.in/gU9frdw7"
        }
      ]
    },
    {
      image: null,
      projectName: "INTERNOVA",
      projectDesc:
        "An AI-powered virtual internship platform that streamlines the internship lifecycle by connecting students with opportunities, providing AI guidance, and helping organizations manage interns efficiently.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/shreyasigh03/internova"
        }
      ]
    },
    {
      image: null,
      projectName: "TINKER",
      projectDesc:
        "A Python-based personal desktop assistant (ongoing) that works via voice commands to open applications, manage schedules, and assist users hands-free, similar to a desktop Siri.",
      footerLink: [
        {
          name: "Status: Ongoing",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🧾"),
  subtitle:
    "Relevant certifications and programs supporting my full-stack and AI learning journey",

  achievementsCards: [
    {
      title: "Full-Stack Developer Certification",
      subtitle: "Internforte — Covered frontend and backend fundamentals with hands-on projects.",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    },
    {
      title: "Credit-Linked Data Science Program",
      subtitle: "Masai School × IIT Guwahati — 9-month program covering Python, Data Analysis, SQL, Machine Learning, problem solving, and industry-based projects.",
      footerLink: [
    {
      name: "View Certificate",
      url: "#"
    }
  ]
},
    {
      title: "Netflix Clone using HTML & CSS",
      subtitle: "LetsUpgrade — Built a Netflix UI clone using HTML and CSS.",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    },
    {
      title: "JavaScript Bootcamp",
      subtitle: "LetsUpgrade — JavaScript fundamentals and practical exercises.",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    },
    {
      title: "Introduction to Python",
      subtitle: "ULSA — Python basics and problem-solving foundations.",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    },
    {
      title: "InternForte Certificate of Completion",
      subtitle: "Completed internship-related learning and tasks.",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Show resume section
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to internships, collaborations, and opportunities. Feel free to reach out.",
  number: "+91 7011614596",
  email_address: "shreyasigh03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
