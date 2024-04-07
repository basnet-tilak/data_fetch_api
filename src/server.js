
import express from 'express'
import axios from 'axios';

const app = express();
app.use(express.json());

app.get('/api/species', async (req, res) => {
  try {
    const response = await axios.get('https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});
app.listen(3000, () => console.log(`Server is running on port 3000`));


