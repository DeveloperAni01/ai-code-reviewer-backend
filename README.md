A professional code review service powered by Google's Gemini AI model that provides expert-level code analysis and suggestions.

## Features
- Focus on code quality, best practices, and performance
- Detailed feedback with practical improvements
- Security vulnerability detection
- Scalability recommendations

## Tech Stack

- Node.js
- Express.js
- Google Generative AI (Gemini 2.0)
- dotenv for configuration

## Project Structure

\`\`\`
backend/
├── src/
│   ├── app.js          # Express app configuration
│   ├── controllers/    
│   │   └── ai.controller.js
│   ├── routes/
│   │   └── ai.routes.js
│   └── services/
│       └── ai.service.js
├── .env                # Environment variables
├── .gitignore
├── package.json
└── server.js          # Entry point
\`\`\`
## API Endpoints

- \`GET /api/v1/\` - Health check endpoint
- \`GET /api/v1/get-prompt\` - Get AI review for code
- \`POST /api/v1/get-review\` - Submit code for review

## Setup

1. Clone the repository
2. Install dependencies:
\`\`\`sh
cd backend
npm install
\`\`\`
3. Create a \`.env\` file with:
\`\`\`sh
PORT=3000
GEMINI_API_KEY=your_api_key_here
\`\`\`

4. Start the development server:
\`\`\`sh
npm start
\`\`\`

## Environment Variables

- \`PORT\`: Server port (default: 3000)
- \`GEMINI_API_KEY\`: Google Gemini AI API key

## Author

Anirban Mondal

## License

ISC`;
