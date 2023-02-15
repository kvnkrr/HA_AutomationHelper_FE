const express = require('express');
const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/refuge', (req, res) => {
  res.sendFile('./helperapp/public/refugeSchedule.png', {root: __dirname});
});


app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(2090, () => {
  console.log('Server listening on port 2090');
});