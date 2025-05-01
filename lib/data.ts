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
    "title": "RSL ERP Modules",
    "description": "Contributed to the development of ERP modules.",
    "fullDescription": "During my internship at RSL, I contributed to building key modules for their ERP application, focusing on data management, module integration, and streamlining internal processes.",
    "tags": ["React", "Node.js", "PostgreSQL", "ERP"],
    "image": "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://rsl-erp-modules.com",
    "github": "https://github.com/your-username/rsl-erp-modules",
    "featured": true
  },
  
  {
    "id": "edu-guide",
    "title": "EduGuide – Academic Guidance Platform",
    "description": "A personalized academic guidance platform for SSLC students.",
    "fullDescription": "Built with React.js and Express, EduGuide helps SSLC students choose courses based on assessments, guiding them through personalized suggestions for a clearer academic path.",
    "tags": ["React", "Express", "PostgreSQL", "Tailwind CSS"],
    "image": "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/6169/woman-hand-desk-office.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://example-edu-guide.com",
    "github": "https://github.com/your-username/edu-guide",
    "featured": true
  },
  {
    "id": "od-management-system",
    "title": "OD Management System",
    "description": "A departmental tool for managing leave requests and approvals.",
    "fullDescription": "Developed using React.js and Node.js, this tool helps manage attendance, leave requests, and approvals with full CRUD functionality and secure user authentication.",
    "tags": ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    "image": "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://example-od-system.com",
    "github": "https://github.com/your-username/od-management-system",
    "featured": true
  },
  {
    "id": "EVsync",
    "title": "EV-Sync",
    "description": "A smart EV companion app leveraging AI to optimize vehicle safety, battery consumption, and navigation.",
    "fullDescription": "EV-Sync is an intelligent electric vehicle (EV) companion app that uses AI to enhance vehicle safety, optimize battery consumption, and provide smart navigation. The app ensures a seamless and efficient riding experience, helping drivers make data-driven decisions for better EV management.",
    "tags": ["Next.js", "React", "Tailwind CSS", "AI", "Smart Navigation", "EV"],
    "image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://your-evsync.com",
    "github": "https://github.com/your-username/ev-sync",
    "featured": true
  }
  ,{
    "id": "CampusNest",
    "title": "Campus Nest",
    "description": "A comprehensive digital platform for academic collaboration, social engagement, and peer mentorship.",
    "fullDescription": "Campus Nest is a unified digital platform designed to address key challenges faced by students, such as fragmented communication, lack of centralized resources, and limited recognition for contributions. The platform features a dashboard that serves as a hub for clubs, events, open-source projects, and community recognition. Students can join clubs, participate in events, collaborate on projects, and engage in peer-to-peer learning. The platform includes an AI-powered Resource Library, a Q&A section, a community recognition system with XP points and badges, and personalized mentoring opportunities.",
    "tags": ["React", "Node.js", "AI", "Social Engagement", "Community", "Student Collaboration"],
    "image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://your-campus-nest.com",
    "github": "https://github.com/your-username/campus-nest",
    "featured": true
  }
  ,{
    "id": "CityVisionAR",
    "title": "City Vision AR",
    "description": "An augmented reality platform for visualizing city planning, built with Blender, Unity, and Vuforia Engine.",
    "fullDescription": "City Vision AR is an innovative augmented reality project designed to help city planners visualize and interact with urban landscapes in a 3D environment. The platform uses Blender for creating detailed 3D models of the city, Unity for integrating these models into an interactive AR space, and Vuforia Engine for enabling AR functionality on mobile devices. It allows users to explore and plan urban spaces, providing a dynamic tool for city development and decision-making.",
    "tags": ["Blender", "Unity", "Vuforia", "AR", "City Planning", "3D Modeling"],
    "image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://your-cityvisionar.com",
    "github": "https://github.com/your-username/city-vision-ar",
    "featured": true
  }
,
{
  "id": "ForestExplorerVR",
  "title": "Forest Explorer VR",
  "description": "A VR exploration game set in a dense forest with hidden treasures, an old broken cabin, and mysteries to uncover, powered by Blender and XR interactive tools.",
  "fullDescription": "Forest Explorer VR is an immersive virtual reality exploration game that takes players through a dense, mysterious forest filled with hidden treasures, an abandoned cabin, and ancient secrets. Developed using Blender for 3D modeling and XR interactive tools for immersive VR experiences, players can navigate lush environments, solve puzzles, and uncover clues to find the lost treasures hidden within the forest. The game fully leverages VR technology to immerse players in a highly interactive and dynamic world, providing a captivating exploration experience.",
  "tags": ["VR", "Unity", "Blender", "XR", "Exploration", "Puzzle", "Adventure", "3D Modeling"],
  "image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "gallery": [
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ],
  "link": "https://your-forestexplorervr.com",
  "github": "https://github.com/your-username/forest-explorer-vr",
  "featured": true
}
,{
  "id": "RSLAlloyCoating",
  "title": "RSL Alloy Coating Website",
  "description": "A tailored website for RSL Alloy Coating with features such as mailing, user-friendly UI, and service customization.",
  "fullDescription": "The RSL Alloy Coating website is designed to cater to the specific needs of the company, featuring a clean and modern UI, integrated mailing features for customer inquiries, and a smooth user experience. Built with React.js and styled with Tailwind CSS, the website includes service pages, company information, and a contact form to streamline communication. Additionally, an email integration feature allows users to easily send queries or requests directly through the website, ensuring efficient communication between the company and its clients.",
  "tags": ["React.js", "Tailwind CSS", "Mailing Features", "UI Design", "User Experience", "Website Development"],
  "image": "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "gallery": [
    "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ],
  "link": "https://your-rsl-alloy-coating-website.com",
  "github": "https://github.com/your-username/rsl-alloy-coating-website",
  "featured": false
}  
  ,
  {
    "id": "portfolio-website",
    "title": "Portfolio Website",
    "description": "An interactive portfolio website showcasing my skills and projects.",
    "fullDescription": "Built using Next.js and Tailwind CSS, my portfolio includes interactive animations, a smooth UI, and features like a parallax effect and cursor-reactive elements to showcase my full-stack development projects and personal work.",
    "tags": ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    "image": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "gallery": [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    "link": "https://yourportfolio.com",
    "github": "https://github.com/your-username/portfolio",
    "featured": false
  },
  
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
    title: 'Modern Dashboard Design',
    image: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'UI Design',
    description: 'A clean, modern dashboard design with data visualization components and user-friendly navigation.'
  },
  {
    id: 'gallery-2',
    title: 'E-commerce Mobile App',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Mobile Design',
    description: 'Mobile e-commerce application with a focus on product discovery and seamless checkout experience.'
  },
  {
    id: 'gallery-3',
    title: 'Travel Blog Website',
    image: 'https://images.pexels.com/photos/7078045/pexels-photo-7078045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Design',
    description: 'A visually stunning travel blog showcasing destinations, photography, and personal stories.'
  },
  {
    id: 'gallery-4',
    title: 'Finance App Interface',
    image: 'https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'UI Design',
    description: 'Personal finance application with expense tracking, budgeting tools, and investment insights.'
  },
  {
    id: 'gallery-5',
    title: 'Landing Page Design',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Design',
    description: 'Conversion-optimized landing page for a SaaS product with clear value proposition and call-to-action.'
  },
  {
    id: 'gallery-6',
    title: 'Social Media Marketing',
    image: 'https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Marketing',
    description: 'Social media campaign designs with consistent branding and engaging visual content.'
  },
  {
    id: 'gallery-7',
    title: 'Product Photography',
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Photography',
    description: 'Professional product photography with attention to lighting, composition, and detail.'
  },
  {
    id: 'gallery-8',
    title: 'Brand Identity Design',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Branding',
    description: 'Comprehensive brand identity including logo, color palette, typography, and application examples.'
  }
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