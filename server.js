const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/ask', (req, res) => {
  const prompt = req.body.prompt;
  // Dummy reply logic for now
  res.json({ reply: `You asked: "${prompt}" - This is a dummy AI reply.` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
