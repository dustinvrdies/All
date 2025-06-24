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
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`DAH Assistant running on port ${port}`);
});
