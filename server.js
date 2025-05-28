const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.BASE_URL,
});

app.post('/v1/chat/completions', async (req, res) => {
  const { stream, ...rest } = req.body;

  if (!stream) {
    // Non-streaming request
    try {
      const completion = await openai.chat.completions.create(req.body);
      res.json(completion);
    } catch (err) {
      console.error('OpenAI Error:', err);
      res.status(err.status || 500).json({ error: { message: err.message } });
    }
  } else {
    // Streaming request
    console.log("came to streaming the result")
    try {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.flushHeaders(); // Ensure headers are sent early

      const openaiStream = await openai.chat.completions.create({
        stream: true,
        ...rest,
      });

      for await (const chunk of openaiStream) {
        // Send raw OpenAI response chunks directly
        res.write(`data: ${JSON.stringify(chunk)}\n\n`);
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (err) {
      console.error('Streaming error:', err);
      res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
      res.end();
    }
  }
});

app.listen(port, () => {
  console.log(`✅ Proxy with OpenAI streaming is running at http://localhost:${port}`);
});
