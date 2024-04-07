import { useState, useEffect } from "react";

/**
 *  "name": "Addax", "continent": "Africa", "weight": 220, "height": 41, "horns": "Twisted", "picture": 
 */

function DataFetchApp() {
  const [species, setSpecies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/species");
      const jsonData = await response.json();
      setSpecies(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <ul>
        {species.map(item =>
          <li key={item.id}>
            <div id="imageContainer">
              <img src={item.picture} />
              {item.name}
              {item.continent}
              {item.weight}
              {item.height}
              {item.horns}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default DataFetchApp;
