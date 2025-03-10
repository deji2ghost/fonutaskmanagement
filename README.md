# Task Management App

## Overview
This is a simple **Task Management App** built using **React** with state management handled by **Redux Toolkit** and styled using **Styled Components**. The app allows users to:

- **Add New Tasks**
- **Mark Tasks as Completed or Active**
- **Delete Tasks**
- **Filter Tasks** by status (**All, Active, Completed**)
- **Persist Tasks** using **Local Storage**

The project follows best practices for React development, ensuring clean, maintainable, and well-documented code.

## Features
### 📌 Task Management
- **Adding Tasks**: Users can enter a task title and description to add a new task.
- **Completing Tasks**: Users can mark tasks as either **completed** or **active**.
- **Deleting Tasks**: Users can remove tasks from the list.
- **Filtering Tasks**: Users can filter tasks based on their status (**All, Active, Completed**).

### 🛠️ Technologies Used
- **React** (Frontend Framework)
- **TypeScript**
- **Redux Toolkit** (State Management)
- **Styled Components** (CSS-in-JS Styling)
- **Local Storage** (Data Persistence)
- **Jest & React Testing Library** (Unit Testing)

## 🏗️ Project Setup
### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Installation
1. **Clone the repository:**
   ``
   git clone https://github.com/deji2ghost/fonutaskmanagement.git
   cd task-management-app
   ```
2. **Install dependencies:**
   npm install

3. **Run the development server:**
   ```sh
   npm run dev
   ```
4. **Run tests:**
   ```sh
   npm test
   ```

## 🧪 Testing
This project includes unit tests using **Jest** and **React Testing Library**. Run the tests with:
```sh
npm test
```

## 📂 Project Structure
```
📦 task-management-app
├── 📂 src
│   ├── 📂 components  # Reusable UI components
│       ├── 📂 tests      # Styled Components
|       ├── 📂 tests    # Unit tests
│   ├── 📂 store       # Redux Toolkit slices & store
│   ├── 📂 pages       # Application pages
│   ├── 📂 utils       # Utility functions (e.g., Local Storage helpers)
│   ├── App.tsx       # Main application entry
│   ├── index.tsx     # Root file
│   └── ...
          
├── package.json      # Project dependencies
├── README.md         # Documentation
└── ...
```

## 🚀 Future Improvements
- Add drag-and-drop functionality for task reordering
- Implement user authentication
- Enhance UI/UX with animations

---
Feel free to contribute or report any issues! 😊 Happy coding! 🚀

