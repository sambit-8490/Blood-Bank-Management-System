# 🩸 Blood Bank Management System (Full Stack)

A full-stack MERN-based Blood Donation & Inventory Management System for managing donors, hospitals, organizations, and blood stock efficiently.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit
- React Router DOM
- Ant Design
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Nodemailer
- Handlebars

### Database
- MongoDB (Local / Atlas)

### DevOps
- Docker
- Docker Compose

---

## 📁 Project Structure


Full-Stack-Blood-Bank-App/
│
├── Client/ # React Frontend (Vite)
├── Server/ # Node.js Backend (Express)
├── docker-compose.yml
└── README.md


---

## ⚙️ Environment Variables

### Client (.env)

```env
VITE_API_URL=http://localhost:5000/api/
Server (.env)
PORT=5000
mongoURL=mongodb://mongo:27017/blood-db
JWTSecret=your_secret_key
🐳 Run with Docker
Build & Start all services
docker compose up --build
Stop services
docker compose down
📦 Services
Service	URL
Client	http://localhost:5173
Server	http://localhost:5000
MongoDB	mongodb://localhost:27017
🔐 Features
👤 Users
Donor registration & login
Hospital registration & login
Organization management
🩸 Blood Inventory
Add blood stock
Track incoming/outgoing blood
Filter inventory by user type
📊 Dashboard
Blood group analytics
Inventory statistics
