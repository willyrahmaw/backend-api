const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
