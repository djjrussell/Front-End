# Todo App Frontend

A modern, responsive web application built with Next.js 14, TypeScript, and Tailwind CSS for managing todo tasks with a sleek dark theme interface.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling with custom dark theme
- **Responsive Design** optimized for desktop and mobile devices
- **Real-time Task Management** with instant UI updates
- **Loading States** and error handling for better UX
- **Color-coded Tasks** for visual organization
- **Progress Tracking** with completion indicators

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **HTTP Client**: Fetch API
- **Development**: ESLint, Prettier

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**

## 🚀 Getting Started

### Installing dependencies

```bash
npm install
```

Create .env.local file
Create a .env.local file in the root directory:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```
Start the development server
```bash
npm run dev
```
The application will start on http://localhost:3000

Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```
Utilities
```bash
npm run type-check   # Check TypeScript types
Project Structure
```

```bash
./
├── app/
│   ├── create/          # Create task page
│   ├── edit/[id]/       # Edit task page (dynamic route)
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   ├── loading.tsx      # Global loading UI
│   └── error.tsx        # Global error UI
├── components/          # Reusable UI components
│   ├── TaskCard.tsx     # Individual task display
│   ├── TaskList.tsx     # Task list container
│   ├── TaskTabs.tsx     # Task statistics tabs
│   ├── Header.tsx       # Application header
│   ├── Spinner.tsx      # Loading spinner
│   ├── CreateTaskButton.tsx
│   └── ErrorMessage.tsx
├── lib/
│   └── api.ts           # API client with error handling
├── types/
│   └── index.ts         # TypeScript type definitions
├── package.json
└── next.config.js
```

🏗️ Architecture
This frontend follows modern React patterns with Next.js App Router:

App Router: Utilizes Next.js 14's file-based routing system
Component Architecture: Modular, reusable React components
Type Safety: Full TypeScript integration throughout
State Management: React hooks for local state management
API Integration: Centralized API client with proper error handling
Loading States: Skeleton loaders and spinners for better UX

🎨 Design System
Theme
Dark Theme: Primary background #1A1A1A for modern appearance
Typography: Clean, readable fonts with proper hierarchy
Spacing: Consistent spacing using Tailwind's spacing scale
Task Colors
Blue: Default tasks
Green: Completed or nature-related tasks
Yellow: Important or urgent tasks
Red: High priority tasks
Purple: Creative tasks
Pink: Personal tasks
Indigo: Work-related tasks
Gray: Low priority tasks


🔌 API Integration
The frontend communicates with the backend through a centralized API client:

typescript
```bash
// Example API usage
const tasks = await taskApi.getTasks();
const newTask = await taskApi.createTask({ title: "New task", color: "blue" });
const updatedTask = await taskApi.updateTask(1, { completed: true });
await taskApi.deleteTask(1);
```