# 🛒 E-Commerce Platform

A modern, full-stack e-commerce web application featuring a robust TypeScript/Express API backend and a responsive Next.js storefront frontend. Built with modern micro-service-ready architecture, real-time communication via Socket.IO, and Google Gemini AI integration.

---

## 📁 Repository Structure

This repository is organized as a multi-package workspace containing both backend and frontend applications:

```plaintext
ecommerce-platform/
├── api-63/                 # Backend REST API & Real-time Socket Service
│   ├── config/             # Database & app configuration
│   ├── database/           # Migrations & seeders (Sequelize / PostgreSQL)
│   ├── src/
│   │   ├── config/         # App, MongoDB, SQL & Gemini configurations
│   │   ├── middlewares/    # Authentication, RBAC, validation, rate limiting
│   │   ├── modules/        # Domain modules (auth, brand, category, chat, user)
│   │   ├── router/         # Express route definitions
│   │   ├── services/       # Email, Socket, and AI services
│   │   ├── utilities/      # Helpers and common utility functions
│   │   ├── app.ts          # Express application setup
│   │   └── server.ts       # HTTP & Socket.IO server initialization
│   ├── .env-sample         # Environment configuration template
│   ├── package.json        # Backend dependencies & scripts
│   └── tsconfig.json       # TypeScript configuration
│
├── web-63/                 # Frontend Web Storefront (Next.js)
│   ├── app/                # Next.js App Router pages and layouts
│   ├── components/         # Reusable UI components
│   ├── lib/                # API client (Axios), Socket client, and helpers
│   ├── public/             # Static assets
│   ├── .env.example        # Frontend environment template
│   ├── next.config.ts      # Next.js configuration
│   ├── package.json        # Frontend dependencies & scripts
│   ├── postcss.config.mjs  # Tailwind CSS PostCSS configuration
│   └── tsconfig.json       # TypeScript configuration
│
├── .gitignore              # Root git ignore rules
└── README.md               # Project documentation
```

---

## 🚀 Tech Stack

### Backend (`api-63`)
- **Runtime & Language**: Node.js, TypeScript
- **Framework**: [Express.js](https://expressjs.com/) (v5)
- **Databases & ORM/ODM**:
  - [PostgreSQL](https://www.postgresql.org/) with [Sequelize](https://sequelize.org/) ORM
  - [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
- **Real-Time Communication**: [Socket.IO](https://socket.io/)
- **AI Integration**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini AI)
- **Security & Validation**: Helmet, CORS, Express Rate Limit, Zod, BcryptJS, JSON Web Tokens (JWT)
- **File Uploads**: Multer
- **Mail Service**: Nodemailer

### Frontend (`web-63`)
- **Framework**: [Next.js](https://nextjs.org/) (v16, App Router)
- **UI & React**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: Iconify (`@iconify/react`)
- **Forms & Validation**: React Hook Form, Zod resolvers
- **Networking**: Axios, Socket.IO Client
- **Interactive UI**: Swiper, Sonner toast notifications, SweetAlert2
- **Linter & Formatter**: [Biome](https://biomejs.dev/)

---

## 🌟 Key Features

- **Authentication & RBAC**: Secure JWT-based authentication (access & refresh tokens), role-based permissions, OTP verification, and password recovery workflows.
- **Product & Catalog Management**: Brands, categories, and products with SEO-friendly slugs, stock tracking, and image upload handling.
- **Real-Time Capabilities**: Socket.IO integration for live messaging, chat, and system notifications.
- **AI-Powered Assistance**: Integrated Google Gemini AI for smart recommendations and data processing.
- **Responsive Storefront**: Clean, modern e-commerce user interface built with Next.js App Router and Tailwind CSS.
- **Production-Ready Security**: Secure HTTP headers with Helmet, request rate limiting, structured validation schemas with Zod, and CORS configuration.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.x or higher recommended)
- [pnpm](https://pnpm.io/) (v10+ recommended) or `npm`
- [PostgreSQL](https://www.postgresql.org/) instance
- [MongoDB](https://www.mongodb.com/) instance (optional/configurable based on modules used)

---

### 1. Backend Setup (`api-63`)

1. **Navigate to the backend directory**:
   ```bash
   cd api-63
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Copy `.env-sample` to `.env`:
   ```bash
   cp .env-sample .env
   ```
   Fill in your configuration:
   ```env
   # Database Configuration
   SQL_DB_URL=postgres://user:password@localhost:5432/ecommerce_db
   SQL_DB_DIALECT=postgres
   MONGODB_URL=mongodb://localhost:27017
   DB_NAME=api-63

   # Static Files
   IMAGE_BASE_PATH=public/uploads

   # Mail (SMTP)
   SMTP_SERVICE=gmail
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   FROM_ADDRESS=noreply@ecommerce.local

   # Authentication
   JWT_SECRET=your_super_secret_jwt_key
   JWT_REFRESH_SECRET=your_super_secret_jwt_refresh_key

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run Database Migrations (if applicable)**:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start Development Server**:
   ```bash
   pnpm run dev
   ```
   The backend API and Socket server will start at `http://localhost:9005`.

---

### 2. Frontend Setup (`web-63`)

1. **Navigate to the frontend directory**:
   ```bash
   cd web-63
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Verify the endpoints match your backend:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:9005
   NEXT_PUBLIC_SOCKET_URL=http://localhost:9005
   ```

4. **Start Development Server**:
   ```bash
   pnpm run dev
   ```
   The storefront will be accessible at `http://localhost:3000`.

---

## 📜 Available Scripts

### `api-63` (Backend)

| Command | Description |
|---|---|
| `pnpm run dev` | Runs the server in development mode using `nodemon` and `tsx` |
| `pnpm run build` | Compiles TypeScript into JavaScript (`dist/`) |
| `pnpm run start` | Runs the compiled production server from `dist/server.js` |

### `web-63` (Frontend)

| Command | Description |
|---|---|
| `pnpm run dev` | Starts the Next.js development server at `http://localhost:3000` |
| `pnpm run build` | Creates an optimized production build of the Next.js application |
| `pnpm run start` | Starts the Next.js production server |
| `pnpm run lint` | Runs Biome linter check |
| `pnpm run format` | Automatically formats frontend code using Biome |

---

## 📄 License

This project is licensed under the ISC License.
