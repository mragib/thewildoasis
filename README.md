# 🌴 The Wild Oasis – Admin Panel

Welcome to the **Admin Panel** for [The Wild Oasis](https://the-wild-oasis-website-nu-eight.vercel.app/) – a sleek, modern resort management dashboard. This frontend is built with **React**, **Vite**, and **React Query**, and uses **Supabase** for backend services.

> 🔐 **Admin Dashboard:** [https://thewildoasis-hazel.vercel.app](https://thewildoasis-hazel.vercel.app)

## 🚀 Live Client Website

👉 [https://the-wild-oasis-website-nu-eight.vercel.app](https://the-wild-oasis-website-nu-eight.vercel.app)

## 🧱 Tech Stack

### 🔙 Backend

- [Supabase](https://supabase.com/)
  - PostgreSQL database
  - Authentication
  - Storage
  - Realtime Subscriptions

### 🧑‍💻 Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)
- Styled Components

## 📁 Project Structure

```
thewildoasis/
├── public/                # Static files
├── src/

│   ├── context/           # Context Api
│   ├── features/          # Domain-specific features (cabins, bookings, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Top-level route pages
│   ├── services/          # Supabase client and API logic
│   ├── styles/            # CSS
│   ├── ui/                # UI primitives (buttons, modals, etc.)
│   ├── utils/             # Utility functions
│   └── App.jsx            # Root component
├── .env                   # Environment variables
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies and scripts
```

## 🛠️ Installation & Setup

1. Clone the repository

   ```bash
   git clone [https://github.com/mragib/thewildoasis.git]

   ```

2. Install dependencies
   ```bash
   npm install
   ```
3. Set up environment variables
   Create a .env file in the root directory with the following:
   ```bash
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_KEY=your-supabase-key
   ```
4. Run the development server
   ```bash
   npm run dev
   ```
   Visit: http://localhost:5173

## 📦 Build & Preview

1. Build for production

```bash
npm run build

```

2. Preview the production build

```bash
npm run preview
```

## 🔐 Authentication

- Supabase handles user sign-in, sign-up, and session management
- Row-Level Security (RLS) in Supabase controls access based on user roles

## 🙏 Acknowledgements

- Inspired by Jonas Schmedtmann's "The Wild Oasis" concept
- Thanks to Supabase & TanStack for their excellent tools

## 🔗 Project Links

- 🌴 Client Website: [https://the-wild-oasis-website-nu-eight.vercel.app](https://the-wild-oasis-website-nu-eight.vercel.app)
- 🛠️ Admin Dashboard: [https://thewildoasis-hazel.vercel.app](https://thewildoasis-hazel.vercel.app)
