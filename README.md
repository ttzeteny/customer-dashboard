# Customer Dashboard

This project was created to learn the fundamentals of **C#** and **Angular**. The goal is to build a data manipulation application from scratch, connecting a frontend with a persistent backend.

## Learning Objectives
- **Backend**: Implementing an asynchronous REST API using .NET 9.
- **Database**: Managing data persistence with Entity Framework Core and SQLite.
- **Frontend**: Learning Angular state management.
- **Full Stack**: Connecting the two layers with proper CORS configuration and service-based architecture.

## Tech Stack
- **Frontend**: Angular 18+, TypeScript, CSS3, Signals.
- **Backend**: .NET 9, ASP.NET Core API.
- **Database**: SQLite with Entity Framework Core.
- **ORM**: EF Core Migrations (Code First approach).

## Prerequisites
Before running the project, ensure you have the following installed:
- [.NET 9 SDK]
- [Node.js & npm]
- [Angular CLI] (`npm install -g @angular/cli`)

## Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ttzeteny/customer-dashboard.git
```

### 2. Database Initialization
Navigate to the `backend` folder and run the following command to create your local SQLite database:
```bash
cd backend
dotnet ef database update
```
### 3. Start the Backend
From the `backend` directory, start the API:
```bash
dotnet run
```
The API will be available at http://localhost:5264 (check your launchSettings.json)
### 4. Start the Frontend
Open a new terminal, navigate to the `frontend` folder, and start the Angular development server:
```bash
cd frontend
npm install
ng serve -o
```
The dashboard will automatically open at http://localhost:4200.