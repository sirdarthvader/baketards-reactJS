const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const exp = 400;


if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'))
  })
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`)
})