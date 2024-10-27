import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const Navigate = useNavigate();

  const handleCardClick = (index) => {
    Navigate(`/character/${index}`);
  };

  
    

  return (
    <div className="container">
      <div className="title text-danger mt-4 mb-0">
        <h2>Characters</h2>
      </div>
      <div className="row">
        <div
          className="d-flex overflow-auto mt-2"
          style={{
            gap: "2rem",
            padding: "1rem",
            whiteSpace: "nowrap",
            borderRadius: "25px",
          }}
        >
          {store.characters.map((character, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <img
                  src={character.imageUrl}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "350px",
                    width: "366px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div className="card-body pb-0">
                  <h5 className="card-title">{character.name}</h5>
                </div>
                <ul className="list-group list-group-flush border-0 ">
                  <li className="list-group-item border-0 pb-0">
                    Gender: {character.gender}
                  </li>
                  <li className="list-group-item border-0 pb-0">
                    Hair Color: {character.hair_color}
                  </li>
                  <li className="list-group-item border-0 pb-0 mb-4">
                    Eye-Color: {character.eye_color}
                  </li>
                </ul>
                <div className="card-body d-flex justify-content-between">
                  <div
                    className="btn btn-outline-primary"
                    onClick={() => handleCardClick(index)}
                    style={{ border: "2px solid #0d6efd", height: "2.5rem" }}
                  >
                    Learn more!
                  </div>
                  <div
                    className="btn btn-outline-warning"
                    onClick={() => actions.handleLike(character)}
                    style={{
                      border: "2px solid #f7d344",
                      height: "2.5rem",
                      width: "2.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.5rem",
                    }}
                  >
                   <i className={store.likedCharacters.some((item) => item.name === character.name) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    <p>{character.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const Navigate = useNavigate();

  const handlePlanetClick = (index) => {
    Navigate(`/planets/${index}`);
  };


  return (
    <div className="container">
      <div className="title text-danger mt-4 mb-0">
        <h2>Planets</h2>
      </div>
      <div className="row">
        <div
          className="d-flex overflow-auto mt-2"
          style={{ gap: "2rem", padding: "1rem", whiteSpace: "nowrap" }}
        >
          {store.planets.map((planet, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <img
                  src={planet.planetUrl}
                  className="card-img-top"
                  style={{
                    height: "350px",
                    width: "366px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  alt="..."
                />
                <div className="card-body pb-0">
                  <h5 className="card-title">{planet.name}</h5>
                </div>
                <ul className="list-group list-group-flush border-0 ">
                  <li className="list-group-item border-0 pb-0 text-wrap">
                    Population: {planet.population}
                  </li>
                  <li className="list-group-item border-0 pb-0 text-wrap">
                    Terrain: {planet.terrain}
                  </li>
                </ul>
                <div
                  className="card-body d-flex justify-content-between"
                  style={{}}
                >
                  <div
                    className="btn btn-outline-primary"
                    onClick={() => handlePlanetClick(index)}
                    style={{
                      border: "2px solid #0d6efd",
                      height: "50px",
                      width: "140px",
                    }}
                  >
                    Learn more!
                  </div>
                  <div
                    className="btn btn-outline-warning"
                    onClick={() => actions.handleLike(planet)}
                    style={{ border: "2px solid #f7d344", height: "2.5rem" }}
                  >
                    <i className={store.likedCharacters.some((item) => item.name === planet.name) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const Navigate = useNavigate();

  const handleVehiclesClick = (index) => {
    Navigate(`/vehicles/${index}`);
  };
  

  return (
    <div className="container">
      <div className="title text-danger mt-4 mb-0">
        <h2>Vehicles</h2>
      </div>
      <div className="row">
        <div
          className="d-flex overflow-auto mt-2"
          style={{
            gap: "2rem",
            padding: "1rem",
            whiteSpace: "nowrap",
            borderRadius: "25px",
          }}
        >
          {store.vehicles.map((vehicle, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <img
                  src={vehicle.vehicleUrl}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "350px",
                    width: "366px",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                <div className="card-body pb-0">
                  <h5 className="card-title">{vehicle.name}</h5>
                </div>
                <ul className="list-group list-group-flush border-0 ">
                  <li className="list-group-item border-0 pb-0">
                    length: {vehicle.length}
                  </li>
                  <li className="list-group-item border-0 pb-0">
                    passengers: {vehicle.passengers}
                  </li>
                  <li className="list-group-item border-0 pb-0 mb-4">
                    crew: {vehicle.crew}
                  </li>
                </ul>
                <div className="card-body d-flex justify-content-between">
                  <div
                    className="btn btn-outline-primary"
                    onClick={() => handleVehiclesClick(index)}
                    style={{ border: "2px solid #0d6efd", height: "2.5rem" }}
                  >
                    Learn more!
                  </div>
                  <div
                    className="btn btn-outline-warning"
                    onClick={() => actions.handleLike(vehicle)}
                    style={{ border: "2px solid #f7d344", height: "2.5rem" }}
                  >
                    <i className={store.likedCharacters.some((item) => item.name === vehicle.name) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



