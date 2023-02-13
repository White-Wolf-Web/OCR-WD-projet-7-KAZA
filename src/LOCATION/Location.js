//import React, { useState, useEffect, useRef} from "react";
import "./Location.css";
import Dropdown from "../DROPDOWN/Dropdown-Mini";
import { useParams } from "react-router-dom";
import HouseData from "../ASSETS/HouseData.js";
import StarRating from "../STAR-RATING/StarRating.js";
import SlideShow from "../SLIDESHOW/SlideShow";
import Avatar from "../AVATAR/Avatar";

function Location() {
	const { id } = useParams(); // on "déstructure l'ID" on retourne un useParams
	console.log(id);

	const LocationChosen = HouseData.findIndex((obj) => obj.id === id);
	console.log(LocationChosen);

	

	return (
		<div className="Location-main">
			<div className="Location-Carrousel">
				<SlideShow
					img={HouseData[LocationChosen].pictures}
					
					id={HouseData[LocationChosen].id}
				/>
			</div>

			<div className="titre-PicFace">
				<h1>{HouseData[LocationChosen].title}</h1>
				<Avatar
					name={HouseData[LocationChosen].host.name}
					picture={HouseData[LocationChosen].host.picture}
					key={HouseData[LocationChosen].host.name}
				/>
			</div>
			<h2>{HouseData[LocationChosen].location}</h2>
			<div className="Location-DropDown-space-between">
				<div className="flex">
					<div className="Location-Tag">
						<h4>{HouseData[LocationChosen].tags[0]}</h4>
					</div>
					<div className="Location-Tag">
						<h4>{HouseData[LocationChosen].tags[1]}</h4>
					</div>
					<div className="Location-Tag">
						<h4>{HouseData[LocationChosen].tags[2]}</h4>
					</div>
				</div>
				<div>
					<StarRating
						id={HouseData[LocationChosen].id}
						starValue={HouseData[LocationChosen].rating}
						
					/>
				</div>
			</div>
			<div className="Stars-Name-Pic">
				<div className="Location-Rate-Mobile">
					<StarRating
					starValue={HouseData[LocationChosen].rating}
					key={ HouseData[LocationChosen].rating +id}
						id={HouseData[LocationChosen].id}
					/>
				</div>{" "}
				<div className="Location-Avatar-container">
					<Avatar
						name={HouseData[LocationChosen].host.name}
						picture={HouseData[LocationChosen].host.picture}
						key={HouseData[LocationChosen].host.name}
					/>
				</div>
			</div>

			<div className="Location-DropDown-space-between">
				<Dropdown
					title="Description"
					content=<p>{HouseData[LocationChosen].description}</p>
					key={HouseData[LocationChosen].description}
				/>
				<Dropdown
					title="Equipement"
					content={
						<ul>
							<li>{HouseData[LocationChosen].equipments[0]}</li>
							<li>{HouseData[LocationChosen].equipments[1]}</li>
							<li>{HouseData[LocationChosen].equipments[2]}</li>
							<li>{HouseData[LocationChosen].equipments[3]}</li>
							<li>{HouseData[LocationChosen].equipments[4]}</li>
							<li>{HouseData[LocationChosen].equipments[5]}</li>
						</ul>
					}
					key={HouseData[LocationChosen].equipments}
				/>
			</div>
		</div>
	);
}

export default Location;
