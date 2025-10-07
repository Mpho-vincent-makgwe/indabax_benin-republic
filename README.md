
# Introduction
This project is a **React web application** built with **Vite**, **React Router**, and **Tailwind CSS**. It aims to provide an interactive and responsive user experience for navigating between different sections such as Home, About, Events, Team, and more.  
The main objective of this project is to deliver a scalable and well-structured frontend setup with optimized build configurations for deployment (including support for Azure Web Apps).

---

# Getting Started

Follow these steps to get the project running locally on your system.

## 1. Installation Process
1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
```

2. **Navigate into the project directory**
   ```bash
   cd <project-folder>
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Build for production**
   ```bash
   npm run build
   ```

---

## 2. Software Dependencies

This project uses the following technologies and dependencies:

* **React** — UI library
* **Vite** — Build tool for fast development
* **React Router** — For routing and navigation
* **Tailwind CSS** — Utility-first CSS framework
* **TypeScript** — For static type checking
* **Axios** — For API requests
* **Lodash** — Utility functions

Ensure you have **Node.js (v18 or higher)** and **npm** installed.

---

## 3. Latest Releases

All new releases and updates are managed via Git and versioned in the main repository.

To check the latest release:

```bash
git pull origin main
```

---

## 4. API References

This project currently integrates routes using  **React Router** .

Example routes configuration:

```js
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route('about', 'routes/about.jsx'),
  route('events', 'routes/communityevents.jsx'),
  route('team', 'routes/team.jsx'),
  route('speakers/:speakerId', 'routes/speakersDetail.jsx'),
  route('leaders/:leaderId', 'routes/leadersDetail.jsx'),
  route('events/:eventId', 'routes/eventDetail.jsx'),
  route('organizers/:organiserId', 'routes/organizersDetail.jsx'),
  route('contact', 'routes/contact.jsx'),
  route('testimonials', 'routes/testimonials.jsx'),
  route('gallery', 'routes/gallery.jsx'),
  route('faq', 'routes/faq.jsx')
] satisfies RouteConfig;
```

---

# Build and Test

### Build

To build the project for production:

```bash
npm run build
```

This will create a production-ready `dist/` folder optimized for deployment.

### Preview the build

```bash
npm run preview
```

### Test

If you have testing tools configured (e.g., Jest, React Testing Library), you can run tests using:

```bash
npm test
```

---

# Contribute

We welcome contributions from the community!

Here’s how you can contribute:

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone <your-fork-url>
   ```
3. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** , then commit and push:

```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
```

5. **Submit a Pull Request** with a detailed explanation of your changes.

---

