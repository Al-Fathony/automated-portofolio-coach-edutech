# Automated Portfolio Coach

Automated Portfolio Coach adalah aplikasi berbasis web yang membantu pengguna membangun portfolio profesional berdasarkan learning progress dan project yang telah dikerjakan. Sistem melakukan analisis terhadap data pengguna menggunakan metode **Scoring** dan **Rule-Based Recommendation** untuk menghasilkan rekomendasi karier, professional summary, daftar skill, dan tingkat kesiapan portfolio (Portfolio Readiness).

---

# Features

- User Authentication (Login & Register)
- Dashboard
- Learning Progress Management (CRUD)
- Project Management (CRUD)
- Generate Portfolio
- AI Career Recommendation
- Portfolio Readiness Analysis

---

# Architecture

```
                 +----------------------+
                 |    Vue.js Frontend   |
                 |   (Bootstrap + Vite) |
                 +----------+-----------+
                            |
                       Axios REST API
                            |
                            ▼
                 +----------------------+
                 | Express.js Backend   |
                 +----------+-----------+
                            |
        ---------------------------------------------
        |                |               |
        ▼                ▼               ▼
 Auth Controller   Progress Service   Portfolio Service
        |                |               |
        ---------------------------------------------
                            |
                      Sequelize ORM
                            |
                            ▼
                PostgreSQL Database (Supabase)
```

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | Vue 3 + Vite |
| UI Framework | Bootstrap 5 |
| Backend | Node.js + Express.js |
| Database | PostgreSQL (Supabase) |
| ORM | Sequelize |
| Authentication | JWT + bcryptjs |
| HTTP Client | Axios |
| Version Control | Git & GitHub |

---

# Recommendation Method

Metode yang digunakan pada sistem ini adalah **Rule-Based Recommendation** dengan pendekatan **Scoring Method**.

Cara kerja sistem:

- Mengumpulkan data Learning Progress pengguna.
- Mengumpulkan data Project yang telah dibuat.
- Menghitung rata-rata skor pembelajaran dan project.
- Mengidentifikasi skill yang dimiliki pengguna.
- Menentukan tingkat Portfolio Readiness.
- Memberikan rekomendasi karier berdasarkan aturan (rules) yang telah ditentukan.

---

# Roles

| Role | Responsibility |
|------|----------------|
| User | Register dan Login |
| User | Mengelola Learning Progress |
| User | Mengelola Project |
| User | Generate Portfolio |
| User | Melihat Dashboard dan Career Recommendation |

---

# Folder Structure

```
automated-portfolio-coach-edutech
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── config
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── layouts
│   │   ├── router
│   │   ├── services
│   │   ├── views
│   │   └── App.vue
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Tom88-dev/automated-portfolio-coach-edutech.git
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan pada:

```
http://localhost:5173
```

Backend berjalan pada:

```
http://localhost:3000
```

---

# API Endpoint

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/progress/user/:id | Get User Progress |
| POST | /api/progress | Add Progress |
| PUT | /api/progress/:id | Update Progress |
| DELETE | /api/progress/:id | Delete Progress |
| GET | /api/projects/user/:id | Get User Projects |
| POST | /api/projects | Add Project |
| PUT | /api/projects/:id | Update Project |
| DELETE | /api/projects/:id | Delete Project |
| POST | /api/portfolio/generate/:userId | Generate Portfolio |

---

# Workflow

1. User melakukan login.
2. User mengisi Learning Progress.
3. User menambahkan Project.
4. Sistem menghitung skor pembelajaran.
5. Sistem melakukan analisis portfolio.
6. Sistem menghasilkan Career Recommendation.
7. Dashboard menampilkan hasil analisis.

---

# Future Development

- Integrasi AI (OpenAI API/Gemini)
- Export Portfolio ke PDF
- Upload CV
- Upload Sertifikat
- Skill Gap Analysis
- Career Roadmap

---

# Developer

**Ismawati (411231008)**
**Wardah Hamidah Oktavia (411231152)**
**AL Fahtony Munawar (411231111)**

Universitas Dian Nusantara

2026
