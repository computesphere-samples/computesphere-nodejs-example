const express = require('express');
const path = require('path');

const app = express();
// The platform sets PORT to the service's port; 3000 when it isn't set.
const port = Number(process.env.PORT) || 3000;

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