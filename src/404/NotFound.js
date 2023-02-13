import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="NotFound-Main ">
			<div className="NotFound">
				<p>404</p>
			</div>
			<div className="NotFound-Oups ">
				<p>Oups! La page que vous demandez n'existe pas.</p>
			</div>
			<div className="NotFound-BackHome ">
				<Link to="/">
					<p>Retourner sur la page d’accueil</p>
				</Link>
			</div>
		</div>
	);
}
