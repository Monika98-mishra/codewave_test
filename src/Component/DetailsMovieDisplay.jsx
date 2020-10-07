import React from 'react';
import "./DetailsMovie.css";

function DetailsMovieDisplay({ movie_data_details }) {

    const renderlist = (data) => {
        if (data) {
            return (
                <div className="card">
                    <img src={data.Poster} width="150" alt={data.Title} />
                    <h4>{data.Title}</h4>
                    <p className="margin-zero"><b>Type:</b>{data.Type}</p>
                    <p className="margin-zero"><b> Year</b>{data.Year}</p>

                </div>
            )
        }
    }

    return (
        <div>
            <center>
                <h2>MovieDetails</h2>
            </center>

            <div className="cards">
                {renderlist(movie_data_details)}
            </div>



        </div>
    )
}

export default DetailsMovieDisplay;