

# Loan Management Application

## Overview

The Loan Management Application is a web-based platform designed to streamline the process of managing loan applications. It provides a personalized dashboard for users, admins, and verifiers to interact with the application based on their roles. Users can submit loan requests, admins can approve or reject applications, and verifiers can verify or reject applications.

## Features

- **Online Application Submission**: Applicants can submit their loan applications through an intuitive and user-friendly interface.
- **Role-Based Access Control**: The application supports three user roles: user, admin, and verifier. Each role has specific permissions and access levels:
  - **User**: Can submit loan applications.
  - **Admin**: Can approve or reject loan applications.
  - **Verifier**: Can verify or reject loan applications.
- **Personalized Dashboard**: Each user role has a personalized dashboard tailored to their specific responsibilities and tasks.

## Tech Stack

- **Frontend**: Built with Next.js, a React framework for server-side rendering and static site generation.
- **Backend**: Next.js API routes for handling backend logic and communication with the database.
- **Database**: MongoDB, a flexible and scalable NoSQL database for storing application data.
- **UI Styling**: Tailwind CSS for styling the user interface components.

## Installation

1. Clone the repository:

```
git clone <repository-url>
cd loan-management-application
```

2. Install dependencies:

```
npm install
```

3. Set up environment variables:

```
cp .env.example .env
```

Update the `.env` file with your MongoDB connection string.

4. Start the development server:

```
npm run dev
```

5. Access the application in your browser at `http://localhost:3000`.

## Usage

- **User**: Register an account and submit loan applications.
- **Admin**: Access the admin panel to approve or reject loan applications.
- **Verifier**: Verify or reject loan applications assigned to you.
