# AI-Mock Interviewer

**AI-Mock Interviewer** is a platform designed to help users practice technical interviews with real-time feedback. The platform uses the Gemini API for AI-driven interview questions and responses. It is built with Next.js and React.js and provides secure user authentication using Clerk.

## Features

- Simulate technical interviews with AI-driven feedback.
- Real-time interview experience with Gemini API.
- User authentication with Clerk for secure access.
- Optimized PostgreSQL queries for fast data handling.

## Technologies Used

### Frontend:
- **Next.js**
- **React.js**
- **Tailwind CSS** (Styling)

### Backend:
- **Node.js**
- **PostgreSQL** (Database)
- **Gemini API** (AI-Driven Responses)

### Additional Tools:
- **Clerk** (User Authentication)
- **Vercel** (Frontend Hosting)

## Installation

### Prerequisites:
- Node.js
- PostgreSQL

### Steps to run the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/ai-mock-interviewer.git
    ```

2. Navigate to the **frontend** and **backend** directories and install the dependencies:

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

3. Create a `.env` file in the **backend** directory with the necessary environment variables. Example:

    **Backend .env**:
    ```env
    DATABASE_URL=<Your PostgreSQL URL>
    CLERK_SECRET=<Your Clerk Secret>
    ```

4. Start both the backend and frontend servers:

    **Backend**:
    ```bash
    npm start
    ```

    **Frontend**:
    ```bash
    npm start
    ```

5. Open the application in your browser at `http://localhost:3000`.

## Contribution

Feel free to submit pull requests with improvements or new features.

## License

This project is licensed under the MIT License.
