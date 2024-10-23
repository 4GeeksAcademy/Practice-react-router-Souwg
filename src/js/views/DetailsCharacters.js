import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const navigate = useNavigate();

	const character = store.characters[id];

	if(!character) {
		return <p>Personaje no encontrado...</p>;
	}
	
		return (
			<div className="container">
				<div className="row">
					<div className="col mt-2 ps-5"><img className="img-fluid " src={character.imageUrl} style={{ width: '28vw', height: '70vh', objectFit: 'cover', }}></img></div>
					<div className="col mt-2"><h2 className="text-center">{character.name}</h2>
					<p className="text-justify">Star Wars is one of the most iconic cinematic sagas in pop culture, created by George Lucas in 1977. Set in a galaxy far, far away, the story blends elements of fantasy, science fiction, and mythology. Throughout its episodes, we follow the struggle between the dark side and the light side of the Force, embodied in the conflicts between the Sith and the Jedi. The main narrative revolves around the fall and redemption of key characters like Anakin Skywalker and his son, Luke Skywalker.</p></div>
				</div>
				<div className="row mt-2" style={{ borderTop: '2px solid #F20404' }}>
					<div className="col text-danger text-center mt-2"><h5>Name</h5><p className="text-danger text-center">{character.name}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Birth Year</h5><p className="text-danger text-center ">{character.birth_year}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Gender</h5><p className="text-danger text-center">{character.gender}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Height</h5><p className="text-danger text-center">{character.height}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Skin Color</h5><p className="text-danger text-center">{character.skin_color}</p></div>
					<div className="col text-danger text-center mt-2"><h5>Eyes Color</h5><p className="text-danger text-center">{character.eye_color}</p></div>
				</div>
				</div>
		);

};
