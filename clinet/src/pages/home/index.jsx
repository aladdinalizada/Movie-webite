import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";
const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=ce94841a&s=harry"
    );
    const data = await response.json();
    setData(data.Search);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDetails = (e) => {
    const id = e.target.id;
    const details = data.filter((item) => item.imdbID === id);
    window.location.href = `/details/${id}`;
  };
  return (
    <div>
      <div className="movie">
        <div className="title">Movies</div>
        <div className="content">
          <div className="cards">
            {data.map((item) => (
              <Link>
                <div
                  className="card"
                  key={item.imdbID}
                  onClick={(e) => handleDetails(e)}
                >
                  <div className="image">
                    <img src={item.Poster} alt="movie" id={item.imdbID} />
                  </div>
                  <div className="cardTitle">
                    <h3>{item.Title}</h3>
                  </div>
                  <div className="year">
                    <span>{item.Year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
