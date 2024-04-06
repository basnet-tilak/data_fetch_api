// App.js

import  { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    axios.get('/api/species')
      .then(response => {
        setSpecies(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Species Data</h1>
      <ul>
        {species.map((animal, index) => (
          <li key={index}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
