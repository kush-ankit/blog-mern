# Blog App

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

This is a full-stack Blog application built with the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create and manage blogs, and it includes an admin approval workflow before blogs are published. Users can sign in using Google or email/password.

## Features

- **User Authentication**: Sign in via email/password or logout.
- **Blog**: Users can post, read, edit and delete blogs after signing in.
- **Responsive Design**: Fully responsive UI built with TailwindCSS.
  
## Tech Stack

- **Frontend**: React, TailwindCSS, React Router DOM, Zustand (for state management), Material-Tailwind Library
- **Backend**: Node.js, Express, MongoDB, JavaScript, Mongoose
- **Authentication**: JWT, Bcrypt for Encryption
- **Database**: MongoDB

## Setup

### Prerequisites

- Node.js and npm installed.
- JavaScript and react knowledge required.
- MERN stack 


### Frontend Setup

1. Clone the repository and navigate to the frontend directory:
    ```bash
    git clone https://github.com/kush-ankit/blog-mern.git
    cd blog-app/client
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    ```

4. The app will run at `http://localhost:5173`.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd blog-app/server
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the backend directory:
    ```
    PORT=4000
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret>
    ```

4. Start the Node.js server:
    ```bash
    npm run dev
    ```

5. The backend server will run at `http://localhost:4000`.

### Environment Variables

| Variable               | Description                                  |
| ---------------------- | -------------------------------------------- |
| `PORT`                 | The port on which the server will run        |
| `MONGO_URI`            | MongoDB connection string                    |
| `JWT_SECRET`           | Secret key for signing JWT                   |

## How It Works

1. **User Authentication**: Users can sign in using email/password. Upon successful authentication, a JWT is generated and stored in a cookie for subsequent requests.
  
2. **Blog Creation**: After logging in, users can create a new blog. The blog is stored in the database.

3. **Public Display**: The blog becomes visible to the public. The user sees their blogs in their dashboard.

## Screenshots

![Home Page](https://i.ibb.co/X8khgvw/Screenshot-2024-10-06-232749.png)

![User Dashboard](https://i.ibb.co/nM3szKQ/Screenshot-2024-10-06-232600.png)

## Folder Structure


## API Endpoints

### Auth Routes

- `POST /api/auth/login` - Log in with email/password
- `POST /api/auth/google` - Log in with Google OAuth
- `POST /api/auth/register` - Register a new user

### Blog Routes

- `GET /api/blogs` - Fetch all approved blogs
- `POST /api/blogs` - Create a new blog (requires authentication)
- `GET /api/blogs/:id` - Fetch a single blog by ID

### Admin Routes

- `GET /api/admin/blogs/pending` - Fetch all pending blogs
- `PUT /api/admin/blogs/:id/approve` - Approve a blog
- `PUT /api/admin/blogs/:id/reject` - Reject a blog with comments

## Contributing

If you'd like to contribute to this project, please submit a pull request with clear explanations of the changes made.

