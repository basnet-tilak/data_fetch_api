
import express from 'express'
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/species', async (req, res) => {
  // try to fetch the data from the aws server database
  try {
    const response = await axios.get('https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.get('/api/species/:name', async (req, res) => {
  // try to fetch the data from the aws server database
  try {
    const response = await axios.get('https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json');
    res.json(response.data);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(5000, () => console.log(`Server is running on port 5000`));


