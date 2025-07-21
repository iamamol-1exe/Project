# Video Summarizer AI - Full Stack Application

A modern, full-stack web application that transforms YouTube videos into intelligent AI-powered summaries using Google Gemini AI. Built for students, researchers, and professionals who need to quickly extract key insights from educational and informational video content.

![Video Summarizer AI](https://img.shields.io/badge/AI-Powered-blue) ![Node.js](https://img.shields.io/badge/Node.js-Backend-green) ![React](https://img.shields.io/badge/React-Frontend-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)

## 🚀 Features

### Core Functionality
- **YouTube Video Processing**: Direct URL input with automatic video download and audio extraction
- **AI-Powered Transcription**: Google Gemini 2.5 Flash for accurate speech-to-text conversion
- **Intelligent Summarization**: Structured bullet-point summaries with key takeaways
- **Real-time Processing**: Live status updates during video processing pipeline

### User Management
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **User Registration & Login**: Complete user account management system
- **Profile Management**: Personal dashboard with processing history
- **Session Management**: Token blacklisting for secure logout functionality

### Frontend Experience
- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Real-time Feedback**: Processing status indicators and error handling
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Components**: Smooth animations and intuitive navigation

## 🏗️ Architecture Overview

```
┌─────────────────┐    HTTP/HTTPS    ┌─────────────────┐
│   React Client  │ ←──────────────→ │  Node.js Server │
│   (Frontend)    │                  │   (Backend)     │
└─────────────────┘                  └─────────────────┘
                                             │
                                             ▼
┌─────────────────┐    Mongoose ODM   ┌─────────────────┐
│  Google Gemini  │                   │   MongoDB       │
│      AI         │                   │   Database      │
└─────────────────┘                   └─────────────────┘
```

## 🛠️ Technology Stack

### Backend Technologies
- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) + bcrypt
- **AI Integration**: Google Gemini 2.5 Flash API
- **Video Processing**: yt-dlp-exec + FFmpeg for audio extraction
- **Validation**: Express-validator for input sanitization

### Frontend Technologies
- **Framework**: React 19.1.0 with Vite build tool
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.6.3
- **HTTP Client**: Axios for API communication
- **Icons**: Lucide React icon library
- **State Management**: React Context API

### DevOps & Tools
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv for configuration
- **Linting**: ESLint with React-specific rules

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or cloud instance)
- Google Gemini API key
- FFmpeg installed on system

### Backend Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd video-summarizer-ai/backend
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Environment Configuration**
Create a `.env` file in the project root:
```env
MONGO_URI=mongodb://127.0.0.1:27017/videosummarizer
JWT_SECRET=your-super-secret-jwt-key-here
GEMINI_API_KEY=your-google-gemini-api-key
PORT=4000
```

4. **Start the backend server**
```bash
npm start
# Server runs on http://localhost:4000
```

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd ../frontend
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
# Frontend runs on http://localhost:5173
```

## 📁 Project Structure

```
video-summarizer-ai/
├── backend/
│   ├── controllers/
│   │   ├── function.controller.js    # Video processing logic
│   │   └── user.controller.js        # User management
│   ├── middlewares/
│   │   ├── auth.middleware.js        # JWT authentication
│   │   └── function.middleware.js    # Video download middleware
│   ├── models/
│   │   ├── user.model.js            # User schema
│   │   └── blacklistToken.model.js  # Token blacklist
│   ├── routes/
│   │   ├── user.routes.js           # Authentication routes
│   │   └── function.routes.js       # Video processing routes
│   ├── services/
│   │   ├── user.service.js          # User business logic
│   │   └── function.service.js      # AI integration
│   ├── db/
│   │   └── db.js                    # MongoDB connection
│   ├── public/
│   │   └── mp3/                     # Temporary audio files
│   ├── index.js                     # Express app setup
│   ├── server.js                    # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppHeader.jsx        # Navigation component
│   │   │   ├── Footer.jsx           # Footer component
│   │   │   ├── Navigation.jsx       # Navigation component
│   │   │   └── ProfileContent.jsx   # Profile component
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Main summarization interface
│   │   │   ├── Login.jsx           # Authentication page
│   │   │   ├── Register.jsx        # User registration
│   │   │   ├── Profile.jsx         # User dashboard
│   │   │   ├── AboutPage.jsx       # About information
│   │   │   └── LandingPage.jsx     # Welcome page
│   │   ├── context/
│   │   │   └── DataContextProvider.jsx # Global state
│   │   ├── App.jsx                 # Main app component
│   │   ├── App.css                 # Custom styles
│   │   └── main.jsx               # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Authentication Routes (`/user`)
- `POST /user/register` - User registration
- `POST /user/login` - User authentication
- `GET /user/logout` - Secure logout with token blacklisting
- `GET /user/profile` - Get user profile (protected)

### Video Processing Routes (`/api/function`)
- `POST /api/function/mp3` - Process YouTube video and generate summary

### API Usage Examples

**User Registration:**
```javascript
POST /user/register
{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "securePassword123"
}
```

**Video Processing:**
```javascript
POST /api/function/mp3
Authorization: Bearer <jwt-token>
{
  "url": "https://youtube.com/watch?v=example"
}
```

**Response Format:**
```json
{
  "response": {
    "lecture_summary": {
      "bullet_points": [
        "Key point 1 from video",
        "Key point 2 from video"
      ],
      "key_takeaways": [
        "Important takeaway 1",
        "Important takeaway 2"  
      ]
    }
  },
  "transcript": "Full transcribed text...",
  "message": "mp3 fetched successfully"
}
```

## 🔄 Video Processing Pipeline

1. **URL Validation**: Frontend validates YouTube URL format
2. **Authentication**: JWT token verification for API access
3. **Video Download**: yt-dlp downloads video and extracts MP3 audio
4. **File Upload**: Audio file uploaded to Google Gemini AI
5. **Transcription**: AI converts speech to text transcript
6. **Summarization**: AI processes transcript into structured summary
7. **Response**: JSON response with bullet points and key takeaways
8. **Cleanup**: Temporary audio files automatically deleted

## 🎨 Frontend Features

### User Interface Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Smooth transitions and loading states
- **Interactive Forms**: Real-time validation and error handling
- **Status Indicators**: Visual feedback during processing

### Page Functionality
- **Home Page**: Main video URL input and summary display
- **Authentication**: Secure login/register with form validation
- **Profile Dashboard**: User account management and history
- **About Page**: Project information and team details

### State Management
- **Context API**: Global authentication state
- **Local Storage**: JWT token persistence
- **Error Handling**: Comprehensive error states and messaging

## 🔐 Security Features

- **Password Hashing**: bcrypt with salt rounds for secure storage
- **JWT Authentication**: Stateless authentication with configurable expiration
- **Token Blacklisting**: Secure logout prevents token reuse
- **Input Validation**: Server-side validation for all user inputs
- **CORS Configuration**: Restricted cross-origin access
- **Environment Variables**: Sensitive data protected via .env

## 🚀 Deployment

### Development Environment
```bash
# Terminal 1 - Backend
cd backend && npm start

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

### Production Build
```bash
# Build frontend for production
cd frontend && npm run build

# Start backend in production mode
cd backend && NODE_ENV=production npm start
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/videosummarizer
JWT_SECRET=your-production-jwt-secret
GEMINI_API_KEY=your-production-gemini-key
PORT=4000
```

## 📋 Development Scripts

### Backend Commands
```bash
npm start          # Start development server
npm test           # Run test suite (when implemented)
```

### Frontend Commands
```bash
npm run dev        # Start Vite development server
npm run build      # Create production build
npm run preview    # Preview production build
npm run lint       # Run ESLint code analysis
```

## 🤝 Contributing

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/AmazingFeature`
3. **Commit Changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to Branch**: `git push origin feature/AmazingFeature`
5. **Open Pull Request**

### Contribution Guidelines
- Follow existing code style and conventions
- Add comprehensive comments for complex logic
- Test all new features thoroughly
- Update documentation for API changes
- Ensure responsive design for UI changes

## 📝 Future Enhancements

- [ ] Support for additional video platforms (Vimeo, Dailymotion)
- [ ] Batch processing for multiple videos
- [ ] Summary export formats (PDF, DOCX)
- [ ] User summary history and favorites
- [ ] Advanced AI customization options
- [ ] Real-time collaborative summaries
- [ ] Integration with note-taking applications

## 🐛 Known Issues

- Audio processing limited to MP3 format
- Large video files may timeout during processing
- Gemini API rate limiting may affect concurrent users

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

Built by students, for students - making educational content more accessible through AI-powered summarization.

## 🙏 Acknowledgments

- Google Gemini AI for advanced language processing
- YouTube and yt-dlp community for video access tools
- React and Node.js communities for excellent documentation
- Tailwind CSS for modern, responsive design patterns

---

**Happy Summarizing! 🎥✨**

*Transform hours of video content into actionable insights in minutes.*