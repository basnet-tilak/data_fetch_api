import { useState, useEffect } from "react";
import "./styles/Style.css";
import PageNotFound from "./pages/PageNotFound";
/**
 *  "name": "Addax", "continent": "Africa", "weight": 220, "height": 41, "horns": "Twisted", "picture": urls
 */

const  DataFetchByContinent =()=> {

  const [species, setSpecies] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/species");
      const jsonData = await response.json();
      const species = jsonData.find( continent_s => continent_s.continent === toString(continent));
      if (!species) {
        return (
          <div>
                <PageNotFound/>
          </div>
        );
      }
      //name, continent, weight, height, horns, pictur
      const {continent} = jsonData;
      setSpecies(jsonData);
      console.log(jsonData);
      
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

export default DataFetchByContinent;
