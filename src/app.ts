import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, (err: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is running on ${port}`);
});
