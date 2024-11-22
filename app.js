const express = require('express');
const fs = require('fs');
const app = express();

// Route to print the README content
app.get('/', (req, res) => {
  const readmeContent = fs.readFileSync('README.md', 'utf8');
  res.send(`<h1>Hello, World!</h1><pre>${readmeContent}</pre>`);
});

// App will listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
