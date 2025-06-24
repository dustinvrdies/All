const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Your DAH Assistant is running!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});