import React, { useState } from "react"; // J'importe React + UseState
import "./SlideShow.css"; // J'importe mon fichier css
import BtnSlider from "./BtnSlideShow"; // J'importe mon fichier comportant mes 2 fleches gauche et droite
import HouseData from "../ASSETS/HouseData";


export default function SlideShow(props) {
	const [slideAnim, setSlideAnim] = useState({
		// creation de mon index (qui me permet d'incrémenter ou de décrementer le passage de mes photos), slideAnim qui sera la "base de depart", et setSlideAnim qui sera la fonction qui mettra a jour notre UseState
		index: 1, // je commence par la 1er photo              (au vue que j'ai 2 propriétés c'est donc un objet)
		inProgress: false, // Je "bloque" l'animation afin d'empecher le "spamClick" plus tard j'oblige a attendre 0,4 sec min pour passer a une autre photo
	});

	const nextSlide = () => {
		//
		if (slideAnim.index !== props.img.length && !slideAnim.inProgress) {
			// si le 1 de index est different du nombre de photo (du tableau) ET que different de
			setSlideAnim({ index: slideAnim.index + 1, inProgress: true }); // alors je vais juste augmenter l'index de 1 (en + simple je passe à la photo suivante)
			setTimeout(() => {
				//
				setSlideAnim({ index: slideAnim.index + 1, inProgress: false }); //
			}, 400); //
		} else if (
			slideAnim.index === props.img.length &&
			!slideAnim.inProgress
		) {
			// si le chiffre de la photo est egale au nombre de la longueur du tableau (en + simple je suis arrive a la derniere photo )
			setSlideAnim({ index: 1, inProgress: true }); // alors index egal à 1 (en + simple je retourne a la premiere photo)
			setTimeout(() => {
				//
				setSlideAnim({ index: 1, inProgress: false }); //
			}, 400); //
		}
	};

	const prevSlide = () => {
		if (slideAnim.index !== 1 && !slideAnim.inProgress) {
			// si mon index est autre que 1 alors (+ simple c'est un bouton retour donc on doit etre au minimum a la 2nd)
			setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
			setTimeout(() => {
				setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
			}, 400);
		} else if (slideAnim.index === 1 && !slideAnim.inProgress) {
			// Mais si je suis à la premiere photo
			setSlideAnim({ index: slideAnim.index, inProgress: true }); // je retourne a la derniere photo
			setTimeout(() => {
				setSlideAnim({ index: slideAnim.index, inProgress: false });
			}, 400);
		}
	};

	return (
		<div className="container-slider">
			{props.img.map((obj, index) => {
				// j'emploie la methode Map (qui me renvoie un nouveautableau) pour permettre d'afficher les differentes images
				return (
					<div
						key={obj.id} //key={props.img.map + obj.id} // pour clé je l'id de mon objet  car il me faut une clé unique quand je retourne des listes (ce qui permet a Réact de mieux s'y retrouver en cas de suppression ou modification .....)
						className={
							slideAnim.index === index + 1
								? "slide active-anim"
								: "slide"
						} // SlideAnim.index est 1 (on parle donc de la 1er photo) est strictement egale à index + 1 (pt rappel un tableau commence à 0 et moi je l'ai commencé à 1). J'active son OPACITY à 1 (css)
					>
						<img src={obj} alt="Piece de la Maison" />
					</div>
				);
			})}
			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />

			<div className="SlideShow-PageNumbers">
				{slideAnim.index} / {props.img.length}
			</div>
		</div>
	);
}
