const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.use((req, res) => {
    res.redirect('/home');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});