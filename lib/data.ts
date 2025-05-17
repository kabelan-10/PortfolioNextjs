import { 
  Project, 
  Skill, 
  Education, 
  Experience, 
  Social, 
  BlogPost, 
  GalleryItem 
} from './types';

export const projects: Project[] = [
  {
    "id": "rsl-erp-modules",
    "title": "RSL ERP Modules - (ONGOING)",
    "description": "Contributed to the development of ERP modules.",
    "fullDescription": "I contributed to building key modules for their ERP application, focusing on data management, module integration, and streamlining internal processes.This freelancing project is centered around developing a comprehensive Enterprise Resource Planning (ERP) system for RSL Alloy Coating Pvt. Ltd., a manufacturing company based in Chennai. The primary objective is to streamline and digitize core internal business operations by integrating various departments into a unified, centralized platform. Built using React.js for the frontend, Node.js with Express.js for the backend, and PostgreSQL for the database, the ERP system is designed to be modular, secure, and scalable. Key functionalities span across finance, human resources, logistics and manufacturing, supply chain management, and customer relationship management. As of now, the logistics and manufacturing module has been successfully completed, facilitating efficient tracking of inventory, dispatch coordination, and production processes. The remaining modules—finance, HR, SCM, and CRM—are currently under development, with each tailored to the company’s operational structure. The system also features robust CRUD operations, role-based authentication and authorization, and secure data handling, ensuring that information access is controlled and traceable. Currently at 40% completion, the ERP system promises to enhance operational transparency, optimize workflow efficiency, and support the company's long-term digital transformation.",
    "tags": ["React", "Node.js", "PostgreSQL", "ERP"],
    "image": "/Images/RSL/uom.png",
    "gallery": [
      "/Images/RSL/uom.png",
      "/Images/RSL/create.png",
      "/Images/RSL/uploadmaster.png",
      "/Images/RSL/uom2.png",
      "/Images/RSL/item.png",
      "/Images/RSL/view.png"
    ],
    "link": "",
    "github": "https://github.com/kabelan-10/RSLERP",
    "featured": true
  },
  
  {
    "id": "edu-guide",
    "title": "EduGuide – Academic Guidance Platform",
    "description": "A personalized academic guidance platform for SSLC students.",
    "fullDescription": "EduGuide: Post-SSLC Pathway Finder is a project designed to help SSLC students make informed decisions about their academic and career paths. The system features an interactive MCQ-based interest assessment that helps students identify their strengths and preferences, providing tailored course recommendations based on their responses. The platform is built with React for a dynamic and responsive frontend, PostgreSQL for efficient data storage and management, and Express.js for the backend. It includes comprehensive CRUD (Create, Read, Update, Delete) operations to handle assessments, store and manage user data, and provide personalized course suggestions. The system aims to guide students in exploring career options and academic courses that best match their interests, ensuring a well-rounded decision-making process. With its user-friendly interface and personalized guidance, EduGuide empowers students to plan their educational journey effectively, helping them make better-informed choices for their future.",
    "tags": ["React.js", "Express.js","Node.js", "PostgreSQL", "Tailwind CSS" , "Jwt"],
    "image": "/Images/eduguide/Homepage.png",
    "gallery": [
      "/Images/eduguide/Homepage.png",
      "/Images/eduguide/details.png",
      "/Images/eduguide/home2.png",
      "/Images/eduguide/home3.png",
      "/Images/eduguide/login.png",
      "/Images/eduguide/quizpage.png",
      "/Images/eduguide/register.png",
      "/Images/eduguide/result.png",
      "/Images/eduguide/resultpage.png",
      "/Images/eduguide/Screenshot 2024-11-07 010628.png",
    ],
    "link": "https://edu-guide-usid.vercel.app/",
    "github": "https://github.com/kabelan-10/EduGuide",
    "featured": true
  },
  {
    "id": "od-management-system",
    "title": "OD Management System",
    "description": "A departmental tool for managing leave requests and approvals.",
    "fullDescription": "This project, developed for the CSBS Department of Rajalakshmi Engineering College, is an all-in-one Leave, Permission, and On-Duty (OD) Management System aimed at simplifying and automating the leave and attendance management process. The system effectively streamlines OD management by integrating leave tracking, approval workflows, detailed reports, and accurate attendance calculation into a single platform. Built using React.js for the frontend, Express.js for the backend, and PostgreSQL as the database, the system ensures a seamless user experience and reliable performance. It includes robust CRUD (Create, Read, Update, Delete) operations, secure authentication and authorization to ensure data integrity and privacy, and modular RESTful APIs for easy scalability and future enhancements. The system allows users to submit leave requests, track approvals, and access attendance reports, while administrators can manage and approve leave applications with a few clicks. After thorough testing for functionality, security, and usability, the project is now ready for deployment, ensuring a streamlined and efficient way to manage leave, permissions, and on-duty records for the department.",
    "tags": ["React.js","Express.js" ,"Node.js", "PostgreSQL", "Tailwind CSS","Jwt"],
    "image": "/Images/OD/dashboard.png",
    "gallery": [
      "/Images/OD/dashboard.png",
      "/Images/OD/history.png",
      "/Images/OD/DCupload.png", 
      "/Images/OD/histroy2.png",
      "/Images/OD/danger.png",
      "/Images/OD/history3.png",
      "/Images/OD/Login.png",

    ],
    "link": "",
    "github": "https://github.com/kabelan-10/od_project_CSBS",
    "featured": true
  },
  {
    "id": "EVsync",
    "title": "EV-Sync",
    "description": "A smart EV companion app leveraging AI to optimize vehicle safety, battery consumption, and navigation.",
    "fullDescription": "EV-Sync is an intelligent electric vehicle (EV) companion app designed to enhance the driving experience by improving efficiency and user convenience. The app features customizable sound profiles, allowing users to select driving sounds that enhance both the driving experience and pedestrian safety. It fosters community engagement by providing a platform for EV owners to share experiences, tips, and plan group events. Additionally, the app utilizes AI to optimize battery performance by analyzing driving patterns, traffic conditions, and terrain to dynamically adjust power consumption, thereby extending battery life. EV-Sync also includes a peer-to-peer battery charge trading feature, enabling users to lend or borrow charge from nearby EVs or in-house charging stations, promoting sustainability and flexibility. Overall, EV-Sync is a comprehensive solution for EV management, ensuring a seamless, efficient, and community-driven driving experience. This is a team project focused on creating a holistic EV solution.",
    "tags": ["Node.js","Flask API","Python","Express.js", "React Native", "Tailwind CSS", "AI", "EV"],
    "image": "/Images/EV/navi.png",
    "gallery": [
      "/Images/EV/Community.png",
      "/Images/EV/Health.png",
      "/Images/EV/Home.png",
      "/Images/EV/Login.png",
      "/Images/EV/navi.png",
      "/Images/EV/P2P.png",
      "/Images/EV/Profile.png",
      "/Images/EV/Routing.png",
      "/Images/EV/sos.png",
      "/Images/EV/sos2.png",
      "/Images/EV/Speedo.png",
      "/Images/EV/trips.png",
      "/Images/EV/Chatbot.png",
    
    ],
    "link": "",
    "github": "https://github.com/kabelan-10/EVSync",
    "featured": true
  }
  ,{
    "id": "CampusNest",
    "title": "Campus Nest",
    "description": "A comprehensive digital platform for academic collaboration, social engagement, and peer mentorship.",
    "fullDescription": "Campus Nest is a team project aimed at creating a comprehensive digital platform that enhances student engagement by promoting academic collaboration, social interaction, and peer mentorship. The platform consolidates resources, communication, and recognition within a unified dashboard, allowing students to join interest-based clubs, participate in events, collaborate on open-source projects, and receive personalized academic support. It features a StudentHub for peer-to-peer Q&A, an AI-powered Resource Library for easy access to study materials, and a Community Recognition system that rewards active participation with XP points and badges. Additionally, Campus Nest enables peer mentorship by connecting students with complementary skills for project collaboration and fostering an inclusive and supportive learning environment. The platform’s integration of activity feeds, event updates, and messaging tools streamlines communication, ensuring an enriching experience for students.",
    "tags": ["React.js","Flask API","Express.js" ,"Node.js", "AI","Python",],
    "image": "/Images/HAPPYFOX/LeaderBoard.png",
    "gallery": [
      "/Images/HAPPYFOX/Calender.png",
      "/Images/HAPPYFOX/chatbot.png",
      "/Images/HAPPYFOX/Club AI.png",
      "/Images/HAPPYFOX/Clubs.png",
      "/Images/HAPPYFOX/HomePage.png",
      "/Images/HAPPYFOX/LeaderBoard.png",
      "/Images/HAPPYFOX/login.png",
      "/Images/HAPPYFOX/Open source.png",
      "/Images/HAPPYFOX/post q.png",
      "/Images/HAPPYFOX/Profile.png",
      "/Images/HAPPYFOX/Resource download.png",
      "/Images/HAPPYFOX/Resource upload.png",
      "/Images/HAPPYFOX/Resource.png",
      "/Images/HAPPYFOX/Skills.png",
      "/Images/HAPPYFOX/Thread1.png",
      "/Images/HAPPYFOX/Threads.png",
      "/Images/HAPPYFOX/chatbot (2).png",
    ],
    "link": "",
    "github": "https://github.com/kabelan-10/HappyFox",
    "featured": true
  }
  ,{
    "id": "CityVisionAR",
    "title": "City Vision AR",
    "description": "An augmented reality platform for visualizing city planning, built with Blender, Unity, and Vuforia Engine.",
    "fullDescription": "City Vision AR is an innovative augmented reality project designed to help city planners visualize and interact with urban landscapes in a 3D environment. The platform uses Blender for creating detailed 3D models of the city, Unity for integrating these models into an interactive AR space, and Vuforia Engine for enabling AR functionality on mobile devices. It allows users to explore and plan urban spaces, providing a dynamic tool for city development and decision-making.",
    "tags": ["Blender", "Unity", "Vuforia", "AR", "3D Modeling"],
    "image": "/Images/AR/AR top.png",
    "gallery": [
      "/Images/AR/AR app 1.jpg",
      "/Images/AR/AR app 2.jpg",
      "/Images/AR/AR app full.jpg",
      "/Images/AR/AR top.png"
    ],
    "link": "",
    "github": "",
    "featured": true
  }
,
{
  "id": "ForestExplorerVR",
  "title": "Forest Explorer VR",
  "description": "A VR exploration game set in a dense forest with hidden treasures, an old broken cabin, and mysteries to uncover, powered by Blender and XR interactive tools.",
  "fullDescription": "Forest Explorer VR is an immersive virtual reality exploration game that takes players through a dense, mysterious forest filled with hidden treasures, an abandoned cabin, and ancient secrets. Developed using Blender for 3D modeling and XR interactive tools for immersive VR experiences, players can navigate lush environments, solve puzzles, and uncover clues to find the lost treasures hidden within the forest. The game fully leverages VR technology to immerse players in a highly interactive and dynamic world, providing a captivating exploration experience.",
  "tags": ["VR", "Unity", "Blender", "XR", "3D Modeling"],
  "image": "/Images/VR/VR cabin out hands.png",
  "gallery": [
    "/Images/VR/VR cabin out hands.png",
    "/Images/VR/VR cabin Out.png",
    "/Images/VR/VR cabin pov 2.png",
    "/Images/VR/VR cabin pov.png",
    "/Images/VR/VR Cabin.png",
    "/Images/VR/VR POV day.png",
    "/Images/VR/VR pov sun.png",
    
  ],
  "link": "",
  "github": "",
  "featured": true
}
,{
  "id": "RSLAlloyCoating",
  "title": "RSL Alloy Coating Website",
  "description": "A tailored website for RSL Alloy Coating with features such as mailing, user-friendly UI, and service customization.",
  "fullDescription": "The RSL Alloy Coating website is designed to cater to the specific needs of the company, featuring a clean and modern UI, integrated mailing features for customer inquiries, and a smooth user experience. Built with React.js and styled with Tailwind CSS, the website includes service pages, company information, and a contact form to streamline communication. Additionally, an email integration feature allows users to easily send queries or requests directly through the website, ensuring efficient communication between the company and its clients.",
  "tags": ["React.js", "Tailwind CSS", "Mailing Features", "UI Design", "User Experience", "Website Development"],
  "image": "/Images/web/rslhome.png",
  "gallery": [
    "/Images/web/rslhome.png",
    "/Images/web/7.png",
    "/Images/web/contact.png",
    "/Images/web/9.png",
    "/Images/web/8.png",
    "/Images/web/6.png",
    "/Images/web/5.png",
    "/Images/web/4.png",
    "/Images/web/3.png",
    "/Images/web/2.png",
  ],
  "link": "https://www.rslalloy.com/",
  "github": "https://github.com/kabelan-10/RslWebsiteBuilding",
  "featured": false
}  
  ,
  {
    "id": "ideaforge",
    "title": "IdeaForge",
    "description": "A collaborative platform developed during the IdeaForge Hackathon for innovators and creators.",
    "fullDescription": "IdeaForge is a web-based platform built using Next.js and Tailwind CSS during the IdeaForge Hackathon conducted by the CSBS department of Rajalakshmi Engineering College. The platform facilitates idea submission, team collaboration, and project showcasing with features like real-time updates, intuitive UI, and a focus on student innovation.",
    "tags": ["Next.js", "React", "Tailwind CSS", "Hackathon", "Collaboration"],
    "image": "/Images/idea/home.png",
    "gallery": [
      "/Images/idea/home.png",
      "/Images/idea/event.png",
      "/Images/idea/3.png",
       "/Images/idea/4.png",
    ],
    "link": "https://ideaforgehackathon.netlify.app/",
    "github": "https://github.com/kabelan-10/ideaforge-website",
    "featured": false
  }
  ,
  
]
;

export const skills: Skill[] = [
  //Frontend
  { name: 'Java', icon: 'react', level: 90, category: 'frontend' },
  { name: 'React', icon: 'react', level: 90, category: 'frontend' },
  { name: 'React', icon: 'react', level: 80, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', level: 80, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', level: 95, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 70, category: 'frontend' },
  { name: 'Three.js', icon: 'threejs', level: 70, category: 'frontend' },
  { name: 'HTML/CSS', icon: 'html', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 90, category: 'frontend' },
  { name: 'BootStrap', icon: 'bootstrap', level: 80, category: 'frontend' },
  { name: 'Framer Motion', icon: 'framermotion', level: 80, category: 'frontend' },
  { name: 'Gsap', icon: 'gsap', level: 85, category: 'frontend' },
  // { name: 'Redux', icon: 'redux', level: 80, category: 'frontend' },
  //Backend
  { name: 'Node.js', icon: 'nodejs', level: 90, category: 'backend' },
  { name: 'Express', icon: 'express', level: 90, category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 90, category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', level: 80, category: 'backend' },
  // { name: 'GraphQL', icon: 'graphql', level: 70, category: 'backend' },
  // { name: 'Firebase', icon: 'firebase', level: 75, category: 'backend' },
  // { name: 'AWS', icon: 'aws', level: 60, category: 'backend' },
  { name: 'Docker', icon: 'docker', level: 50, category: 'backend' },
  //Design
  { name: 'Fl studio', icon: 'flstudio', level: 95, category: 'design' },
  { name: 'Figma', icon: 'figma', level: 85, category: 'design' },
  // { name: 'Adobe XD', icon: 'xd', level: 75, category: 'design' },
  { name: 'Blender', icon: 'blender', level: 70, category: 'design' },
  { name: 'Ableton', icon: 'ableton', level: 70, category: 'design' },
  { name: 'Canva', icon: 'canva', level: 90, category: 'design' },
  // { name: 'Photoshop', icon: 'photoshop', level: 70, category: 'design' },
  // { name: 'Illustrator', icon: 'illustrator', level: 65, category: 'design' },
  //Others
  // { name: 'GitHub', icon: 'github', level: 85, category: 'other' },
  { name: 'Git', icon: 'git', level: 85, category: 'other' },
  { name: 'Postman', icon: 'postman', level: 80, category: 'other' },
  { name: 'Vite', icon: 'vite', level: 70, category: 'other' },
  // { name: 'Agile/Scrum', icon: 'agile', level: 80, category: 'other' },
  // { name: 'Testing', icon: 'testing', level: 75, category: 'other' }
];

export const education: Education[] = [
  
  {
    "institution": "Rajalakshmi Engineering College",
    "degree": "Bachelor of Technology (B.Tech)",
    "field": "Computer Science and Business Systems",
    "from": "2022",
    "to": "Present",
    "description": "Graduated in Computer Science and Business Systems. Actively participated in hackathons and coding competitions, leading and contributing to various projects that enhanced both technical and leadership skills."
  }
  
  ,
  {
    "institution": "Alwin Memorial Public School",
    "degree": "Higher Secondary School (Grade 12)",
  "field": "Science",
  "from": "2020",
  "to": "2022",
  "description": "Completed higher secondary education with a focus on science subjects including Physics, Chemistry, Mathematics, and Biology (PCMB)."
  }
  ,
  {
    "institution": "Alwin International Public School",
    "degree": "Secondary School (Grade 10)",
    "field": "General Curriculum",
    "from": "2018",
    "to": "2020",
    "description": "Completed foundational education with a focus on core academic subjects. Participated in academic projects and school-level activities."
  }
  ,
];

export const experience: Experience[] = [
  {
    company: 'Google',
    position: 'Senior Frontend Developer',
    from: 'Jan 2021',
    to: 'Present',
    description: 'Leading the development of user interfaces for Google Cloud Platform. Implementing responsive designs and optimizing performance. Mentoring junior developers and conducting code reviews.'
  },
  {
    company: 'Microsoft',
    position: 'Software Engineer',
    from: 'Jun 2018',
    to: 'Dec 2020',
    description: 'Worked on Microsoft Teams frontend development. Implemented new features and improved existing functionality. Collaborated with cross-functional teams to deliver high-quality software products.'
  },
  {
    company: 'Amazon',
    position: 'Frontend Developer Intern',
    from: 'May 2017',
    to: 'Aug 2017',
    description: 'Developed web applications using React and Redux. Participated in the design and implementation of new features. Worked in an agile development environment.'
  }
];

export const socialLinks: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/kabelan-10', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/kabelan2005/', icon: 'linkedin' },
  // { platform: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
  // { platform: 'Instagram', url: 'https://instagram.com/yourusername', icon: 'instagram' },
  { platform: 'Gmail', url: 'ekabelan28@gmail.com', icon: 'email' }

];

export const blogPosts: BlogPost[] = [
  {
    id: 'building-modern-uis',
    title: 'Building Modern User Interfaces with React and Tailwind CSS',
    excerpt: 'Learn how to create stunning user interfaces by combining React components with the utility-first approach of Tailwind CSS.',
    content: `
      Building modern user interfaces requires a combination of powerful libraries and frameworks. React provides the component-based architecture, while Tailwind CSS offers a utility-first approach to styling.

      ## Getting Started

      First, set up a new React project using Create React App or Next.js:

      \`\`\`bash
      npx create-next-app my-project
      \`\`\`

      Then, install Tailwind CSS:

      \`\`\`bash
      npm install -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      \`\`\`

      ## Component Design

      When designing components, think in terms of reusability and composition. Break down your UI into small, manageable pieces that can be combined to create complex interfaces.

      ## Styling with Tailwind

      Tailwind's utility classes allow you to style elements directly in your markup, without switching between files:

      \`\`\`jsx
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Card Title</h2>
        <p className="text-gray-600">Card content goes here...</p>
      </div>
      \`\`\`

      ## Conclusion

      By combining React's component model with Tailwind's utility classes, you can create beautiful, responsive interfaces efficiently.
    `,
    date: '2025-03-15',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'John Doe',
    tags: ['React', 'Tailwind CSS', 'Frontend', 'UI Design']
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large Scale Applications',
    excerpt: 'Discover the best practices and patterns for using TypeScript in large-scale applications.',
    content: `
      TypeScript has become the standard for building large-scale JavaScript applications, offering static typing, better tooling, and improved developer experience.

      ## Type Definitions

      Always define proper types for your data structures:

      \`\`\`typescript
      interface User {
        id: string;
        name: string;
        email: string;
        role: 'admin' | 'user' | 'guest';
        settings?: UserSettings;
      }

      interface UserSettings {
        theme: 'light' | 'dark';
        notifications: boolean;
      }
      \`\`\`

      ## Function Signatures

      Be explicit about function parameters and return types:

      \`\`\`typescript
      function fetchUserData(userId: string): Promise<User> {
        // Implementation...
      }
      \`\`\`

      ## Generic Types

      Use generics for reusable components and functions:

      \`\`\`typescript
      function createState<T>(initial: T): [T, (newState: T) => void] {
        // Implementation...
      }

      const [user, setUser] = createState<User | null>(null);
      \`\`\`

      ## Type Guards

      Implement type guards for runtime type checking:

      \`\`\`typescript
      function isUser(obj: any): obj is User {
        return (
          obj &&
          typeof obj.id === 'string' &&
          typeof obj.name === 'string' &&
          typeof obj.email === 'string'
        );
      }
      \`\`\`

      ## Conclusion

      By following these best practices, you can build more maintainable and robust applications with TypeScript.
    `,
    date: '2025-02-22',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Jane Smith',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices']
  },
  {
    id: 'nextjs-app-router',
    title: 'Understanding Next.js App Router for Server Components',
    excerpt: 'Explore the new App Router in Next.js and learn how to leverage Server Components for better performance.',
    content: `
      Next.js introduced the App Router as a new routing paradigm, bringing Server Components and improved layouts to the framework.

      ## Server Components

      React Server Components allow rendering on the server, reducing the JavaScript sent to the client:

      \`\`\`jsx
      // app/page.jsx - a Server Component by default
      async function HomePage() {
        const data = await fetchData(); // Server-side fetch
        return <div>{data.map(item => <Card key={item.id} {...item} />)}</div>;
      }
      
      export default HomePage;
      \`\`\`

      ## App Router Structure

      The App Router uses a file-system based routing structure:

      \`\`\`
      app/
      ├── layout.jsx       // Root layout
      ├── page.jsx         // Home page
      ├── about/
      │   └── page.jsx     // About page
      ├── blog/
      │   ├── layout.jsx   // Blog layout
      │   ├── page.jsx     // Blog index
      │   └── [slug]/
      │       └── page.jsx // Blog post page
      \`\`\`

      ## Client Components

      For interactive parts of your app, use the "use client" directive:

      \`\`\`jsx
      'use client';
      
      import { useState } from 'react';
      
      export default function Counter() {
        const [count, setCount] = useState(0);
        return (
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
        );
      }
      \`\`\`

      ## Data Fetching

      Fetch data directly in server components:

      \`\`\`jsx
      async function BlogPage() {
        const posts = await fetch('https://api.example.com/posts')
          .then(res => res.json());
        
        return (
          <div>
            <h1>Blog</h1>
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        );
      }
      \`\`\`

      ## Conclusion

      The App Router and Server Components represent the future of Next.js, offering improved performance and developer experience.
    `,
    date: '2025-01-18',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Alex Johnson',
    tags: ['Next.js', 'React', 'Server Components', 'Performance']
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Modern Calender Design',
    image: '/Images/Gallery1/Calender.png',
    category: 'Web UI',
    description: 'A clean, modern Calender design with data visualization components and user-friendly navigation.'
  },
  {
    id: 'gallery-2',
    title: 'Coffee shop',
    image: '/Images/Gallery1/CoffeeShop.png',
    category: 'Modeling',
    description: 'Rendered Coffee shop model in blender'
  },
  {
    id: 'gallery-3',
    title: 'AR city view',
    image: '/Images/Gallery1/AR app 1.jpg',
    category: 'Modeling',
    description: 'AR model , city view'
  },
  {
    id: 'gallery-4',
    title: 'AR city model',
    image: '/Images/Gallery1/AR app full.jpg',
    category: 'Modeling',
    description: 'AR model , city view.'
  },
  {
    id: 'gallery-5',
    title: 'AR model city top',
    image: '/Images/Gallery1/AR top.png',
    category: 'Modeling',
    description: 'AR model , city view.'
  },
  {
    id: 'gallery-6',
    title: 'Community UI - EV Sync',
    image: '/Images/Gallery1/Community.png',
    category: 'Mobile UI',
    description: 'Community UI from EV Sync'
  },
  {
    id: 'gallery-7',
    title: 'Student DashBoard',
    image : '/Images/Gallery1/dashboard.png',
    category: 'Web UI',
    description: 'Comprehensive student dashboard from OD App'
  },
  {
    id: 'gallery-8',
    title: 'IdeaForge 1.0 - EVENT',
    image: '/Images/Gallery1/event.png',
    category: 'Web UI',
    description: 'Landing page of IdeaForge 1.0 hackathon by CSBS - REC'
  },
  {
    id: 'gallery-9',
    title: 'EV Sync Homepage',
    image: '/Images/Gallery1/Home (2).png',
    category: 'Mobile UI',
    description: 'Homepage of EV sync App - Raptee'
  },
  {
    id: 'gallery-10',
    title: 'IdeaForge 1.0',
    image: '/Images/Gallery1/home.png',
    category: 'Web UI',
    description: 'Landing page of IdeaForge 1.0 hackathon by CSBS - REC'
  },
  {
    id: 'gallery-11',
    title: 'EDUGUIDE - info',
    image: '/Images/Gallery1/home2.png',
    category: 'Web UI',
    description: 'Information page of EduGuide app'
  },
  {
    id: 'gallery-12',
    title: 'EduGuide',
    image: '/Images/Gallery1/Homepage.png',
    category: 'Web UI',
    description: 'Home page of EduGuide App'
  },
  {
    id: 'gallery-13',
    title: 'Modern House render',
    image: '/Images/Gallery1/house1.png',
    category: 'Modeling',
    description: 'rendered image of modern house in blender'
  },
  {
    id: 'gallery-14',
    title: 'ERP Items',
    image: '/Images/Gallery1/item.png',
    category: 'Web UI',
    description: 'Items page of RSL ERP'
  },
  {
  id: 'gallery-15',
  title: 'Community - Campus NEST',
  image: '/Images/Gallery1/LeaderBoard.png',
  category: 'Web UI',
  description: 'Community page from Campus NEST App'
},
{
  id: 'gallery-16',
  title: 'SOS - EV sync',
  image: '/Images/Gallery1/sos.png',
  category: 'Mobile UI',
  description: 'SOS page of EV sync'
},
{
  id: 'gallery-17',
  title: 'Campus NEST - Threads',
  image: '/Images/Gallery1/Threads.png',
  category: 'Web UI',
  description: 'Threads page from Campus NEST'
},
// {
//   id: 'gallery-18',
//   title: 'Campus NEST - Threads',
//   image: '/Images/Gallery1/Threads.png',
//   category: 'Web UI',
//   description: 'Threads page from campus NEST'
// },
{
  id: 'gallery-19',
  title: 'Trips - EV sync',
  image: '/Images/Gallery1/trips.png',
  category: 'Mobile UI',
  description: 'Trips page of EV Sync App'
},
{
  id: 'gallery-20',
  title: 'UOM - RSL ERP',
  image: '/Images/Gallery1/uom.png',
  category: 'Web UI',
  description: 'Units of measurements page of RSL ERP'
},
{
  id: 'gallery-21',
  title: 'Contact - RSL',
  image: '/Images/web/contact.png',
  category: 'Web UI',
  description: 'Contact page of RSL alloy coating pvt ltd offical page'
},
{
  id: 'gallery-22',
  title: 'RSL Alloy Coating Pvt Ltd',
  image: '/Images/web/rslhome.png',
  category: 'Web UI',
  description: 'Home page and offical page of RSL alloy coating private limited'
},
{
  id: 'gallery-23',
  title: 'Forest Explorer VR - night',
  image: '/Images/VR/VR cabin out hands.png',
  category: 'VR',
  description: 'Open world forest exploration VR game during night'
},
{
  id: 'gallery-24',
  title: 'Forest Explorer VR',
  image: '/Images/VR/VR cabin pov 2.png',
  category: 'VR',
  description: 'Open world forest exploration VR game '
},
{
  id: 'gallery-25',
  title: 'Forest Explorer VR - Day',
  image: '/Images/VR/VR POV day.png',
  category: 'VR',
  description: 'Open world forest exploration VR game during day'
},
// {
//   id: 'gallery-26',
//   title: 'Brand Identity Design',
//   image: '',
//   category: 'Branding',
//   description: 'Comprehensive brand identity including logo, color palette, typography, and application examples.'
// },
// {
//   id: 'gallery-27',
//   title: 'Brand Identity Design',
//   image: '',
//   category: 'Branding',
//   description: 'Comprehensive brand identity including logo, color palette, typography, and application examples.'
// },
// {
//   id: 'gallery-28',
//   title: 'Brand Identity Design',
//   image: '',
//   category: 'Branding',
//   description: 'Comprehensive brand identity including logo, color palette, typography, and application examples.'
// },
// {
//   id: 'gallery-29',
//   title: 'Brand Identity Design',
//   image: '',
//   category: 'Branding',
//   description: 'Comprehensive brand identity including logo, color palette, typography, and application examples.'
// },
// {
//   id: 'gallery-30',
//   title: 'Brand Identity Design',
//   image: '',
//   category: 'Branding',
//   description: 'Comprehensive brand identity including logo, color palette, typography, and application examples.'
// }

];

export const personalInfo = {
  name: 'KABELAN E',
  title: 'Full Stack Developer',
  email: 'ekabelan28@gmail.com',
  phone: '+91 73059 05157',
  location: 'Chennai, India',
  bio: `Creative and detail-oriented Full Stack Developer and pre-final year Computer Science and Business Systems student with practical experience in building scalable and user-focused web applications. Proficient in the PERN stack (PostgreSQL, Express.js, React.js, Node.js), MongoDB, Java, and modern JavaScript frameworks including Next.js and React Native. I specialize in delivering efficient, clean, and maintainable solutions tailored to real-world needs.

I approach each project with a focus on user experience, performance optimization, and clean, maintainable code. Whether working independently or as part of a team, I strive to deliver high-quality solutions that exceed client expectations.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or making music.`,
};