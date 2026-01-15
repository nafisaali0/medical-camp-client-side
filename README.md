# Amelia Medical Campaign
**Live Site:** https://medical-camp.netlify.app/
---

## Project Overview

Amelia Medical Campaign is a full-stack web application designed to manage and organize medical camps efficiently.  
The platform provides separate dashboards for **Admin** and **Users (Participants)**, allowing secure camp enrollment, management, and user role control.

Users can browse medical camps, view details, enroll through Stripe payment, and manage their profiles.  
Admins have full control over camps, users, enrollments, and roles.

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Firebase Authentication
- Stripe (React Stripe)

### Backend
- Node.js
- Express.js
- MongoDB

### Deployment
- Frontend: Netlify

---

## Authentication & Authorization

- Firebase Authentication (Email/Password)
- Role-based authorization:
  - Admin
  - User (Participant)

---

## Features

### Home Page
- Displays popular medical camps based on participant count
- Responsive and clean UI

### Camp Page
- View all available camps
- Sort camps by:
  - Ascending order
  - Descending order
- Access detailed information for each camp

### Camp Details
- View complete camp information
- Secure enrollment using Stripe payment

---

## User Dashboard (Participant)

- View enrolled medical camps
- Update user profile
- Track participation history

---

## Admin Dashboard

- Create medical camps
- Update existing camps
- Delete camps
- View all enrolled camps by users
- Manage users:
  - Update user roles (Admin / Participant)
  - Update admin profile

---

## Role-Based Access

| Role  | Permissions |
|------|------------|
| User | Enroll in camps, view enrolled camps, update profile |
| Admin | Full control over camps, users, and enrollments |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

---

## 📋 Prerequisites

Before running the project, make sure you have:

- **Node.js** (LTS recommended)  
- **MongoDB** (local installation or MongoDB Atlas)  

---

## 📥 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/medical-camp-client-side.git
cd jestblog
```

2. **Install dependencies**:
```npm install```


---

## 🔑 Environment Variables

Create a `.env.local` file in the **root directory of the frontend project**:

```env
VITE_IMAGE_HOSTING_KEY=your_image_hosting_key
```
```env
VITE_Payment_Gateway_PK=your_payment_hosting_key
```
⚠️ The backend `.env` file contains database credentials. Check the backend repository for details.


---

 ## 🖥️ Backend Repository

The backend for Amelia is built with **Express.js** and **MongoDB**.  
You can find it here: [Amelia Backend](https://github.com/nafisaali0/medical-camp-server-side)


---


## ▶️ Run the Application

Start the frontend development server:

```bash
npm run dev
```

---

## 🌐 Development URLs

- **Client:** [http://localhost:5173](http://localhost:5173)  
- **Server:** [http://localhost:5000](http://localhost:5000)