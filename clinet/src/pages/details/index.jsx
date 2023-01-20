import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=ce94841a&i=${id}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBack = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <div className="cardDetails">
        <div className="gobcakBtn">
          <button onClick={() => handleBack()}>Go Back</button>
        </div>
        <div className="content">
          <div className="head">
            <h3>{data.Title}</h3>
          </div>
          <div className="rating">
            IMDB Rating: <span> {data.imdbRating}</span>
            <br />
            IMDB votes: <span> {data.imdbVotes}</span>
            <br />
            Runtime: <span>{data.Runtime}</span>
            <br />
            Year: <span>{data.Year}</span>
          </div>
          <div className="text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
          <br />
          <div className="suppo">
            <div className="director">
              director: <span>{data.Director}</span>
            </div>
            <div className="stars">
              Stars: <span>{data.Actors}</span>
            </div>
            <div className="genre">
              Genre: <span>{data.Genre}</span>
            </div>

            <div className="language">
              Language: <span>{data.Language}</span>
            </div>
            <div className="awards">
              Awards: <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={data.Poster} alt="movie" />
        </div>
      </div>
    </div>
  );
};

export default Details;
