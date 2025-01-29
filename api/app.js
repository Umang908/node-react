const express = require('express');
const app = express();
const db = require('./db');  // Import the DB connection
const cors = require('cors');

app.use(cors());

// Route to check DB connection and show data
app.get('/', (req, res) => {
  db.query('SELECT * FROM test_table', (err, results) => {
    if (err) {
        console.log(err);
        return res.status(500).send('Error fetching data');
    }
    const names = results.map(item => item.name);
    res.json(names);  // Send the query result as a response
  });
});
  
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});