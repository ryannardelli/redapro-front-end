
# Welcome to the RedaPro frontend documentation.

Modern interface built with React, Vite, TypeScript, and TailwindCSS, connected to the backend API of the essay correction platform.

## Overview

## Tech Stack & Technologies used
- React
- Vite
- TypeScript
- Tailwind
- ContextAPI
- Zod

## Architecture
The application is structured using a layered architecture with DDD principles, promoting clear separation between domain, UI, and infrastructure, while ensuring maintainability and scalability.

## Layers Overview

### Components
Reusable UI components, including feedback elements such as notifications, modals, and loaders. Components are used across pages to maintain consistent UI and user experience.

---

### Pages
Represent the main views or screens of the system. Pages assemble UI components and templates to render the interface.

---

### Layout
Contains layout components like headers, footers, and sidebars to provide consistent structure across the application.

---

### Templates
Base UI structures and layout templates used to standardize pages and sections.

---

### Hooks
Custom React hooks encapsulating reusable logic for state handling, data fetching, forms, and domain-specific behaviors.

---

### Services
Contain domain logic for the front-end, including API calls, data transformations, and orchestration of application operations. Acts as a bridge between UI and backend APIs.

---

### Adapters
Responsible for integrating with external services, transforming incoming or outgoing data to fit the application’s domain model.

---

### Models
Define the application data structures and types, ensuring consistency across components, services, and API communication.

---

### Provider
Context API providers that manage global state, offering a centralized way to store and access application-wide data.

---

### Reducer
Reducers that handle state updates for Context API, following predictable state management patterns.

---

### Schemas
Validation schemas (e.g., Zod, Yup) to ensure user input or API responses meet the expected structure before reaching domain logic.

---

### Types
Global TypeScript types and interfaces for type safety across the application.

---

### Utils
Reusable helper functions and utilities used across components, pages, and services.

---

## Project Structure
  ```bash
📁 src/
 ┣ 📁 components/     → Reusable components
 ┣ 📁 pages/          → System pages or screens
 ┣ 📁 assets/         → Static assets (images, icons, fonts)
 ┣ 📁 adapters/       → Adapters / integration with APIs or external formats
 ┣ 📁 layout/         → Layout components (header, footer, sidebar)
 ┣ 📁 hooks/          → Custom hooks
 ┣ 📁 types/          → Global types and interfaces
 ┣ 📁 schemas/        → Validation schemas (e.g., Zod, Yup)
 ┣ 📁 services/       → Services (APIs, Axios, configs)
 ┣ 📁 provider/       → Context API (global providers)
 ┣ 📁 reducer/        → Context API reducers
 ┣ 📁 models/         → Data models (types, interfaces, entities)
 ┣ 📁 router/         → Route configuration (React Router)
 ┣ 📁 templates/      → Base UI layouts or structures
 ┣ 📁 utils/          → Utility functions and helpers
 ┣ main.tsx           → Main entry file
 ┗ App.tsx            → Main routing and layout configuration
   ```

## Commit Convention)
### This project follows Conventional Commits:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting changes
- refactor: Code refactoring
- perf: Performance improvements
- test: Tests
- chore: Maintenance
- ci: CI/CD changes

### Issue Linking (fixes, closes, resolves)

#### Automatically close an issue
```bash
closes #12
   ```
#### Resolve an issue
  ```bash
resolves #87
   ```
#### Link multiple issues
  ```bash
fixes #3 #5 closes #9
   ```
## Getting Started
### 1. Clone the repository
  ```bash
git clone https://github.com/ryannardelli/redapro-front-end.git
   ```

### 2. Navigate to the project directory
  ```bash
cd front-end-redapro
   ```
### 3. Install dependencies
  ```bash
npm install
   ```

### 4. Run in development mode
  ```bash
npm run dev
   ```
