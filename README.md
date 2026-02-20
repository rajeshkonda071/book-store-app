📚 MERN BookStore Application
A modern, full-stack e-commerce style bookstore application featuring user authentication, category-based filtering, and a responsive dark-mode UI.

## 🔗 Live Demo
Frontend:https://book-store-app-3rqb-32lph3ag4-konda-rajeshs-projects.vercel.app

Backend API: https://book-store-app-w0c0.onrender.com

## 🛠️ Technical Stack
Layer	Technology Used
Frontend	React.js, Vite, Tailwind CSS, DaisyUI
Backend	Node.js, Express.js
Database	MongoDB Atlas (NoSQL)
Authentication	JWT (JSON Web Tokens) & BcryptJS
State Management	React Hooks (useState, useEffect) & LocalStorage
## 🚀 Key Features
User Authentication: Secure Signup and Login functionality using encrypted passwords (Bcrypt).

Dynamic Book Library: Fetches real-time data from MongoDB via a RESTful API.

Search & Filter: Real-time search bar and category filtering (Free vs. Premium content).

Responsive Design: Fully optimized for Mobile, Tablet, and Desktop using Tailwind’s utility-first CSS.

Dark Mode: Built-in theme switching for a better user experience.

Form Validation: Uses react-hook-form for efficient client-side validation and react-hot-toast for real-time notifications.

## 🏗️ System Architecture
The project follows a Decoupled Architecture, where the frontend and backend are hosted independently to ensure scalability.

Frontend (Vercel): Handles the UI and client-side routing using react-router-dom.

Backend (Render): A REST API that processes requests, handles logic, and communicates with the database.

Database (MongoDB Atlas): Stores user credentials and book metadata (name, price, category, image).

## 🔧 Installation & Setup
1. Clone the repository

Bash
git clone https://github.com/rajeshkonda071/book-store-app.git
2. Backend Setup

Navigate to /backend.

Run npm install.

Create a .env file and add your MONGO_URI.

Start server: npm start.

3. Frontend Setup

Navigate to /frontend.

Run npm install.

Start development server: npm run dev.

## 💡 Technical Challenges Overcome
CORS Configuration: Handled Cross-Origin Resource Sharing to allow the Vercel frontend to securely communicate with the Render backend.

Environment Management: Implemented environment variables to protect sensitive database credentials during deployment.

Deployment Optimization: Managed a monorepo structure on Vercel by configuring custom root directories for the build process.

## 👤 Author
Rajesh B.Tech in Computer Science and Engineering (https://www.linkedin.com/in/rajeshkonda071)
