import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Ollama } from 'ollama';

const port = 4000;
const app = express();

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

// Fix for "__dirname" in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct static folder path
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/chat', async (req, res) => {
    try {
        // Check if request body exists and has required fields
        if (!req.body || !req.body.message) {
            return res.status(400).json({ 
                error: 'Missing required fields' 
            });
        }

        const { message } = req.body;
        
        console.log('Received message:', message);

        const response = await ollama.chat({
            model: 'deepseek-r1:1.5b',
            messages: [{ role: 'user', content: message }],
        });
        
        console.log('Ollama response:', response.message);

        res.status(200).json({
            status: 'success',
            message: response.message.content,
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});