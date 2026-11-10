const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDesc: "Create a responsive landing page for the company website.",
        taskDate: "2026-11-11",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update UI Components",
        taskDesc: "Improve the navbar, buttons and footer components.",
        taskDate: "2026-11-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDesc: "Prepare wireframes for the upcoming dashboard.",
        taskDate: "2026-11-08",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Mobile Layout",
        taskDesc: "Resolve responsiveness issues on smaller screens.",
        taskDate: "2026-11-09",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review Color Palette",
        taskDesc: "Review and finalize the brand color palette.",
        taskDate: "2026-11-13",
        category: "Design"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login API",
        taskDesc: "Develop authentication endpoints for the application.",
        taskDate: "2026-11-11",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDesc: "Configure the database and establish initial connections.",
        taskDate: "2026-11-07",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement JWT",
        taskDesc: "Add JWT-based authentication and authorization.",
        taskDate: "2026-11-12",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Documentation",
        taskDesc: "Complete API documentation for all endpoints.",
        taskDate: "2026-11-09",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDesc: "Improve database query performance.",
        taskDate: "2026-11-14",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Test Cases",
        taskDesc: "Write test cases for the user registration module.",
        taskDate: "2026-11-06",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Login Flow",
        taskDesc: "Test login functionality with valid and invalid credentials.",
        taskDate: "2026-11-11",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Verification",
        taskDesc: "Verify reported bugs after developer fixes.",
        taskDate: "2026-11-12",
        category: "Quality Assurance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Cross Browser Testing",
        taskDesc: "Complete compatibility testing across major browsers.",
        taskDate: "2026-11-09",
        category: "Testing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare QA Report",
        taskDesc: "Prepare a report covering testing results and issues.",
        taskDate: "2026-11-14",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Banner",
        taskDesc: "Design promotional banners for the upcoming campaign.",
        taskDate: "2026-11-11",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Posts",
        taskDesc: "Prepare social media creatives for this week's posts.",
        taskDate: "2026-11-07",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Campaign Research",
        taskDesc: "Research competitors and identify marketing opportunities.",
        taskDate: "2026-11-13",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDesc: "Prepare and schedule the promotional email campaign.",
        taskDate: "2026-11-09",
        category: "Marketing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Monthly Analytics",
        taskDesc: "Analyze campaign performance and engagement metrics.",
        taskDate: "2026-11-15",
        category: "Analytics"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Dashboard",
        taskDesc: "Build an interactive dashboard for employee management.",
        taskDate: "2026-11-11",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDesc: "Initialize the project and configure dependencies.",
        taskDate: "2026-11-06",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Integrate Charts",
        taskDesc: "Integrate charts to display employee performance statistics.",
        taskDate: "2026-11-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Optimization",
        taskDesc: "Improve application loading speed and rendering performance.",
        taskDate: "2026-11-09",
        category: "Optimization"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Final Review",
        taskDesc: "Review the complete application before deployment.",
        taskDate: "2026-11-15",
        category: "Review"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin);
}