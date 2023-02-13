import React from "react"; // J'importe React + UseState
import "./StarRating.css";
import OrangeStar from "./OrangeStar.png";
import LightGreyStar from "./LightGreyStar.png";
import HouseData from "../ASSETS/HouseData";

function StarRating(props) {
	const OrangeStars = () => {
		return <img src={OrangeStar} alt="Orange star" />;
	};
    const LightGreyStars = () => {
		return <img src={LightGreyStar} alt="Silver star" />;
	};

	return (
		<div className="starRating ">
        
			{Array.from({length: props.starValue}, () => (
				<OrangeStars />
			))}
            {Array.from({length: 5 - (props.starValue)}, () => (
                <LightGreyStars />))}
		</div>
	);
}
export default StarRating;


