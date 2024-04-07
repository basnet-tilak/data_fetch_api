import { useState, useEffect } from "react";
import "./styles/Style.css";
/**
 *  "name": "Addax", "continent": "Africa", "weight": 220, "height": 41, "horns": "Twisted", "picture": urls
 * 
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
    <div className="imageContainer">
      <h2>Animals species</h2>
      <ul>
        <div className="imageList">
          {species.map(item =>
            <li key={item.id}>
              <div className="image-card">
                <img src={item.picture} />
              </div>
              <div>
                <p>
                {"  Name: "}
                {item.name},
                {"  Continent: "}
                {item.continent},
                {"  Weight: "}
                {item.weight},
                {"  Height "}
                {item.height},
                {"  Horns: "}
                {item.horns}
                </p>
              </div>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default DataFetchApp;
