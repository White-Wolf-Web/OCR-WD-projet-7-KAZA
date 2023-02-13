import React from "react";
import "./Avatar.css";

export default function Avatar(props) {
	return (
		<div className="Avatar-container">
			<div className="Avatar-NomPrenom">{props.name}</div>
			<div className="Avatar-PicFace">
				<img src={props.picture} alt="propriétaire" />
			</div>
            
		</div>
	);
}
