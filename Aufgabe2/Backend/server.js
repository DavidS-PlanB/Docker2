const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  res.json({ message: 'Daten vom Backend' });
});

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});
