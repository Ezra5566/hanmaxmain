# HANMAX SECURITY Website

## Project Overview

HANMAX SECURITY website is a comprehensive platform designed to streamline the process of hiring security guards and managing security services. The website serves two primary user groups: individuals seeking employment as security guards and clients (both individuals and companies) looking to hire security services.

### Key Features

1. **User Registration and Authentication**
   - Separate registration processes for security guards and clients
   - Secure login system with role-based access control

2. **Security Guard Application Portal**
   - Online application form for potential security guards
   - Document upload functionality (resume, certifications, etc.)
   - Background check integration

3. **Client Request System**
   - Request form for clients to specify their security needs
   - Customizable options for service type, duration, and requirements

4. **Matching Algorithm**
   - Automated system to match client requests with available security guards based on skills, experience, and availability

5. **Dashboard for Security Guards**
   - Personal profile management
   - Schedule viewer
   - Assignment details and history
   - Performance metrics and ratings

6. **Dashboard for Clients**
   - Company/individual profile management
   - Current and past security assignments
   - Guard performance ratings and feedback system
   - Billing and payment history

7. **Admin Panel**
   - User management (both guards and clients)
   - Assignment oversight and manual intervention capabilities
   - System-wide analytics and reporting

8. **Responsive Design**
   - Mobile-friendly interface for on-the-go access

## Technology Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **Redux**: State management for complex application logic
- **React Router**: For handling routing within the application
- **Axios**: Promise-based HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Chart.js**: For creating interactive charts in dashboards

### Backend
- **Node.js**: JavaScript runtime for server-side logic
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

### Authentication
- **JSON Web Tokens (JWT)**: For secure authentication and authorization
- **bcrypt**: For password hashing

### Testing
- **Jest**: JavaScript testing framework
- **React Testing Library**: For testing React components

### DevOps
- **Docker**: For containerization and consistent development environments
- **GitLab CI/CD**: For continuous integration and deployment pipelines

### Additional Tools
- **ESLint**: For code linting and maintaining code quality
- **Prettier**: For consistent code formatting
- **Husky**: For pre-commit hooks to ensure code quality

## Project Structure

```
hanmax-security/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux store, actions, and reducers
│   │   ├── services/       # API service functions
│   │   ├── styles/         # Global styles and Tailwind config
│   │   └── utils/          # Utility functions
│   ├── public/             # Public assets
│   └── index.html          # HTML entry point
├── server/                 # Backend Node.js/Express application
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API route definitions
│   │   ├── middleware/     # Custom middleware functions
│   │   └── utils/          # Utility functions and helpers
│   └── app.js              # Express app entry point
├── tests/                  # Test suites
├── .gitignore              # Git ignore file
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── docker-compose.yml      # Docker Compose configuration
├── Dockerfile              # Docker configuration
└── README.md               # Project documentation (this file)
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/hanmax-security/website.git
   cd hanmax-security
   ```

2. Install dependencies:
   ```
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   - Create `.env` files in both `client/` and `server/` directories
   - Add necessary environment variables (database connection string, JWT secret, etc.)

4. Start the development servers:
   ```
   # In the client directory
   npm run dev

   # In the server directory
   npm run dev
   ```

5. Access the application:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

## Development Workflow

1. Create a new branch for each feature or bug fix
2. Write tests for new functionality
3. Implement the feature or fix
4. Run tests and ensure all pass
5. Submit a pull request for review

## Deployment

The application is deployed using Docker and GitLab CI/CD pipelines. The process includes:

1. Building Docker images for both frontend and backend
2. Running automated tests
3. Deploying to staging environment for final testing
4. Deploying to production upon approval

## Contributing

Please read our CONTRIBUTING.md file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

For any queries or support, please contact the HANMAX SECURITY IT team at it@hanmaxsecurity.com.
