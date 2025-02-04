# AI Chat Interface with Ollama

## Overview
A simple, responsive web-based chat application that uses Ollama for AI-powered conversational interactions.

## Features
- Real-time chat interface
- AI-powered responses using Ollama
- Responsive design
- Error handling
- Typing indicators
- Clean, modern UI

## Prerequisites
- Node.js (v18+ recommended)
- Ollama installed and running
- npm (Node Package Manager)

## Technology Stack
- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Express.js
- AI Model: Ollama (DeepSeek R1 1.5B)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-chat-interface.git
cd ai-chat-interface
```

### 2. Install Dependencies
```bash
npm init -y
npm install express ollama
```

### 3. Ollama Setup
- Install Ollama from [ollama.ai](https://ollama.ai)
- Pull the DeepSeek model:
```bash
ollama pull deepseek-r1:1.5b
```

### 4. Configure Server
Ensure Ollama is running on `http://127.0.0.1:11434`

### 5. Start the Application
```bash
node server.js
```

## Project Structure
```
ai-chat-interface/
│
├── public/
│   └── index.html        # Frontend chat interface
│
├── src/
│   └── server.js         # Express server
│
├── package.json
└── README.md
```

## Configuration
- Modify `server.js` to change:
  - Port number
  - Ollama host
  - AI model

## Customization
- Adjust CSS in `index.html` for styling
- Modify JavaScript for additional features

## Troubleshooting
- Ensure Ollama is running
- Check console for error messages
- Verify network connections

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License
MIT License

## Contact
[Your Name]
[Your Email/Contact Info]
