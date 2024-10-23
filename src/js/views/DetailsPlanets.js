import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";


export const DescriptionPlanets = () =>{
    const { store } = useContext(Context);
    const { id } = useParams();
    const Navigate = useNavigate()

    const planet = store.planets[id]
	

    if(!planet) {
		return <p>Planeta no encontrado...</p>;
	}
    return(
        <div className="container">
				<div className="row">
					<div className="col mt-2 ps-5"><img className="img-fluid " src={planet.planetUrl} style={{ width: '28vw', height: '70vh', objectFit: 'cover', }}></img></div>
					<div className="col mt-2"><h2 className="text-center">{planet.name}</h2>
					<p className="text-justify">The planets of Star Wars are among the most iconic and diverse locations in science fiction. Each planet is uniquely designed, reflecting different cultures, climates, and ecosystems. From the desert landscapes of Tatooine, where Luke Skywalker begins his journey, to the forest moon of Endor, home to the Ewoks, the Star Wars galaxy offers a rich variety of environments. Planets like Coruscant, a city-covered world, serve as political hubs, while Hoth is an icy wasteland where the Rebel Alliance hides from the Empire. These worlds not only provide stunning backdrops but also play a crucial role in shaping the characters and stories, symbolizing themes such as hope, struggle, and transformation throughout the saga.</p></div>
				</div>
				<div className="row mt-2" style={{ borderTop: '2px solid #F20404' }}>
					<div className="col text-danger text-center mt-2"><h5>Name</h5><p className="text-danger text-center">{planet.name}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Climate</h5><p className="text-danger text-center ">{planet.climate}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Population</h5><p className="text-danger text-center">{planet.population}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Orbital Period</h5><p className="text-danger text-center">{planet.orbital_period}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Rotation Period</h5><p className="text-danger text-center">{planet.rotation_period}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Diameter</h5><p className="text-danger text-center">{planet.diameter}</p></div>
				</div>
				</div>
    )
};