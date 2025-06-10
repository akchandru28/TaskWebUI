# Task Manager - Web UI Frontend

This is a **React 19** + **TypeScript** frontend application built using **Ant Design**. It connects to a backend service (Java + MongoDB) and allows users to manage tasks with ease.

>  Major focus: **Usability** and **Accessibility**

---

##  Features

-  Create a new task (name, owner, optional shell command)
-  View all tasks in a table
-  Search tasks by name
-  Delete a task
-  Run shell commands and view output in a modal popup

---

##  Tech Stack

- **React 19**
- **TypeScript**
- **Ant Design** (UI components)
- **Axios** (API calls)
- **MongoDB** (via backend)
- **Java Spring Boot** (backend API)

---

##  Folder Structure
src/
│
├── components/
│ ├── TaskForm.tsx # Form to create new task
│ ├── TaskTable.tsx # Table view with search/delete/run
│ └── CommandModal.tsx # Modal to show command output
│
├── api/
│ └── TaskService.ts # Axios API functions
│
├── types/
│ └── Task.ts # Type definitions
│
└── App.tsx # Main layout and app flow

1. Clone the repo:
git clone https://github.com/akchandru28/TaskWebUI.git
cd taskwebui

2.Install dependencies:
npm install

3.Start the app
npm run dev


The app runs on http://localhost:3030

Make sure the backend server is running at http://localhost:8080.


