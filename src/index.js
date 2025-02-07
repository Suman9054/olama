import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Ollama } from 'ollama';

const port = 4000;
const app = express();
let replace;
// Initialize Ollama instance
const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

// Fix for "__dirname" in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

async function initializeAI() {
    try {
        // Ensure the model is pulled
        await ollama.pull({ model: 'deepseek-r1:7b' });

        console.log('AI Model initialized successfully');
    } catch (error) {
        console.error('Error initializing AI:', error);
        process.exit(1);
    }
}

// Handle the /chat route
app.post('/chat', async (req, res) => {
    try {
        if (!req.body || !req.body.message) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        const { message } = req.body;

        // Send message to AI and get response
        const response = await ollama.chat({
            model: 'deepseek-r1:7b',
            messages: [
                { 
                    role: 'system', 
                    content: 'You are Mario from Super Mario Bros.' 
                },
                { 
                    role: 'user', 
                    content: message 
                }
            ]
        });
      replace = response.message.content;
     const reply= replace.replace(/<think>.*?<\/think>/gs, '')
      .trim();
      console.log(replace);
        res.status(200).json({
            status: 'success',
            message: reply,
        });
    } catch (error) {
        console.error('Error processing message:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error.message
        });
    }
});

// Start the server after AI model is ready
initializeAI().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});