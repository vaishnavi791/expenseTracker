# Expense Tracker

A full-stack Expense Tracker application featuring a secure Java Spring Boot backend paired with a clean, minimal React frontend UI.

---

## Tech Stack

### Backend
![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.5.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![JWT](https://img.shields.io/badge/JWT_Authentication-black?style=for-the-badge&logo=JSON-web-tokens&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![Lombok](https://img.shields.io/badge/Lombok-red?style=for-the-badge)
![Swagger](https://img.shields.io/badge/OpenAPI_/_Swagger-85EA2D?style=for-the-badge&logo=openapi-initiative&logoColor=black)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## Project Overview

Incoming client requests from the React UI are intercepted by Spring Security and validated using stateless JWT tokens before reaching the controller layer. Validated requests then transition smoothly through specialized service and repository layers to perform secure data operations on the MySQL database.

### Features
* **Authentication:** Secure user sign-up/login with stateless JWT.
* **Expense Management:** Add new expenses and delete old logs.
* **Calculations:** Dynamically computes total expenditures.

---

## UI Theme (Frontend)

This project uses a minimal color palette:
* `#41431B` – Dark Olive
* `#AEB784` – Soft Green
* `#E3DBBB` – Warm Beige
* `#F8F3E1` – Light Cream

---
## How to Run
1. Backend Setup
   
Navigate to the backend directory:

<h> cd backend</h>

2. Frontend Setup
Open a new terminal and navigate to the frontend directory:

cd frontend
Install dependencies:

npm install
Run the development server:

npm run dev

## Future Improvements
Filter expenses by categoryCharts
Interactive data analyticsExport expense data as CSV/PDF

## Preview

<img width="665" height="624" alt="Screenshot" src="https://github.com/user-attachments/assets/016531cb-62fd-4699-b142-b93ac58c5a35" />


## Project Structure

```text
.
├── backend/
│   ├── .mvn/
│   ├── src/
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── public/
    ├── index.html
    └── package.json

