# Employee Management System (EMS)

A responsive, role-based Employee Management System built with **React 19**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Features

- **Role-Based Authentication**:
  - Distinct views and capabilities for **Admin** and **Employee** roles.
  - Persistent login state stored in `localStorage`.
- **Admin Dashboard**:
  - **Create & Assign Tasks**: Assign tasks with category, deadline, title, and detailed descriptions to specific employees.
  - **Live Task Overview**: Monitor real-time status of all employees' active, new, completed, and failed tasks.
- **Employee Dashboard**:
  - **Metrics & Counters**: Glanceable cards showing counts for New, Completed, Accepted, and Failed tasks.
  - **Task Lists & Action Cards**:
    - **New Task**: Accept incoming assigned tasks.
    - **Active Task**: Mark in-progress tasks as Completed or Failed.
    - **Completed Task** & **Failed Task**: Historical view of past work.
- **State Management**:
  - Centralized state using React Context API (`AuthContext` & `AuthProvider`).
  - Synced with browser `localStorage` for offline persistence.

---

## 🔑 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@me.com` | `123` |
| **Employee** | `e@e.com` | `123` |
| **Employee 2** | `employee2@example.com` | `123` |
| **Employee 3** | `employee3@example.com` | `123` |

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Bundler / Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: `@fontsource/manrope`
- **State & Storage**: React Context API & `localStorage`

---

## 📁 Project Structure

```text
src/
├── assets/                  # Icons and static images
├── components/
│   ├── Auth/
│   │   └── Login.jsx        # Login page with validation
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   ├── Other/
│   │   ├── AllTask.jsx      # Admin list of all employees and task counts
│   │   ├── CreateTask.jsx   # Admin task creation form
│   │   ├── Header.jsx       # Greeting header with Logout
│   │   └── TaskListNumbers.jsx # Summary cards for task counters
│   └── TaskList/
│       ├── AcceptTask.jsx   # Card for in-progress tasks
│       ├── CompleteTask.jsx # Card for completed tasks
│       ├── FailedTask.jsx   # Card for failed tasks
│       ├── NewTask.jsx      # Card for newly assigned tasks
│       └── TaskList.jsx     # Horizontal scroll task feed
├── context/
│   └── AuthProvider.jsx     # Context provider for employee & admin data
├── utils/
│   └── LocalStorage.jsx     # Local storage initialization and dummy datasets
├── App.jsx                  # Root component handling authentication & routing
├── index.css                # Global styles and Tailwind imports
└── main.jsx                 # Application entry point
```

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/spant671-ux/Employee-Management-System.git
cd Employee-Management-System
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
