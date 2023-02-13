import React from "react";
import "./About.css";
import Dropdown from "../DROPDOWN/Dropdown-Large";
import "../DROPDOWN/Dropdown.css";

function About() {
	return (
		<div className="About-main">
			<div className="About-Banner"></div>
<Dropdown title="FIABILITE" content=<div className=".large-Dropdown-toggle-p">
Les annonces postées sur Kasa garantissent une fiabilité totale. 
Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
				
		/>

<Dropdown title="RESPECT" content=<div className=".large-Dropdown-toggle-p">
La bienveillance fait partie des valeurs fondatrices de Kasa.
 Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
				
		/>

<Dropdown title="SERVICE" content=<div className=".large-Dropdown-toggle-p">
Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
 N'hésitez pas à nous contacter si vous avez la moindre question.</div>
				
		/>

<Dropdown title="SECURITE" content=<div className=".large-Dropdown-toggle-p">
La sécurité est la priorité de Kasa. 
Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
				
		/>

			</div>
	);
}

export default About;
